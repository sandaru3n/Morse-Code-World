import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { morseLineFromAiText } from "@/lib/aiMorseResponse";

export const runtime = "nodejs";
/** Allow time for multi-model retries + overload backoff (Vercel Pro+ can raise further). */
export const maxDuration = 120;

const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

/**
 * Gemini 3.x: multimodal reasoning fits Morse better than letter-OCR.
 * Default = highest accuracy (3.1 Pro preview); then 3 Flash, 3.1 Flash-Lite, then 2.x.
 * IDs: https://ai.google.dev/gemini-api/docs/gemini-3
 */
const DEFAULT_MODEL = "gemini-3.1-pro-preview";
const FALLBACK_MODELS = [
  "gemini-3-flash-preview",
  "gemini-3.1-flash-lite-preview",
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite"
];

const PROMPT = `You read International Morse code from the IMAGE using visual reasoning—not by guessing English letters first.
Trace the signal left-to-right (or top-to-bottom if written in columns). For each letter, group dits and dahs by timing/proportion: short marks = dot (.), long marks = dash (-). Treat bullets (· •), small circles, or narrow vertical bars as dots; longer strokes or em-dashes as dashes.

Be strict about not skipping symbols in long runs. If spacing clearly separates words, insert " / " between words; one space between letters within a word.

Rules:
- Output exactly ONE line of Morse using only . - / and spaces.
- If one symbol is unreadable, use ? for that symbol only.
- No explanations, markdown, code fences, labels, or quotes—ONLY the Morse line.

If the image contains no Morse code, output exactly: (none)`;

function getGenerativeModelForMorse(genAI: GoogleGenerativeAI, modelId: string) {
  const isGemini3 = modelId.startsWith("gemini-3");
  if (!isGemini3) {
    return genAI.getGenerativeModel({ model: modelId });
  }
  const thinkingLevel =
    modelId.includes("pro-preview") || modelId.includes("3.1-pro") ? "high" : "medium";
  return genAI.getGenerativeModel({
    model: modelId,
    generationConfig: {
      temperature: 1,
      thinkingConfig: { thinkingLevel }
    }
  } as Parameters<GoogleGenerativeAI["getGenerativeModel"]>[0]);
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function parseRetryDelayMs(message: string): number {
  const m = message.match(/[Rr]etry in ([\d.]+)\s*s/i);
  if (m) return Math.min(Math.ceil(Number.parseFloat(m[1]) * 1000) + 750, 90_000);
  return 21_000;
}

function isModelNotFound(message: string): boolean {
  return (
    /\[404\b/.test(message) ||
    /404\s+Not\s+Found/i.test(message) ||
    /is not found for API version/i.test(message) ||
    /models\/[\w.-]+\s+is not found/i.test(message)
  );
}

function isFreeTierNoQuota(message: string): boolean {
  return /limit:\s*0/i.test(message) && /free_tier|FreeTier/i.test(message);
}

function isRateLimited(message: string): boolean {
  return (
    message.includes("429") ||
    message.includes("Too Many Requests") ||
    message.includes("RESOURCE_EXHAUSTED") ||
    message.includes("Quota exceeded")
  );
}

/** 503 / overloaded — retry with backoff, then try another model in the chain. */
function isOverloaded(message: string): boolean {
  return (
    message.includes("503") ||
    message.includes("Service Unavailable") ||
    /high demand/i.test(message) ||
    message.includes("UNAVAILABLE") ||
    /temporarily unavailable/i.test(message)
  );
}

function retryDelayMs(message: string, attempt: number, overloaded: boolean): number {
  if (!overloaded) {
    return parseRetryDelayMs(message);
  }
  const steps = [2500, 7000, 16000];
  return steps[Math.min(attempt, steps.length - 1)]!;
}

function shouldRetryAsTransient(message: string): boolean {
  return isRateLimited(message) || isOverloaded(message);
}

function friendlyGeminiError(message: string): string {
  if (isModelNotFound(message)) {
    return (
      "No working Gemini model responded. See https://ai.google.dev/gemini-api/docs/gemini-3 and set GOOGLE_GENERATIVE_AI_MODEL. " +
      "Try gemini-3.1-pro-preview (accuracy), gemini-3-flash-preview (speed), gemini-3.1-flash-lite-preview, or gemini-2.5-flash."
    );
  }
  if (isFreeTierNoQuota(message)) {
    return (
      "Gemini quota for this model is exhausted or set to 0. Try GOOGLE_GENERATIVE_AI_MODEL=gemini-3-flash-preview or gemini-3.1-flash-lite-preview, " +
      "or a 2.5/2.0 -lite model, or enable billing in Google AI Studio / Cloud Console."
    );
  }
  if (isRateLimited(message)) {
    return (
      "Gemini rate limit or quota reached. Wait and retry, try a -lite model, or enable billing. " +
      message.slice(0, 240)
    );
  }
  if (isOverloaded(message)) {
    return (
      "Gemini is temporarily overloaded (503 / high demand). Wait 1–2 minutes and tap “Extract with AI” again, " +
      "or set GOOGLE_GENERATIVE_AI_MODEL=gemini-2.5-flash-lite (often less saturated). See https://status.cloud.google.com/ for incidents."
    );
  }
  return message;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json(
      { error: "AI is not configured. Set GOOGLE_GENERATIVE_AI_API_KEY on the server." },
      { status: 503 }
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const image = formData.get("image");
  if (!image || !(image instanceof File)) {
    return NextResponse.json({ error: "Missing image file (field name: image)." }, { status: 400 });
  }

  const mimeType = image.type || "image/jpeg";
  if (!ALLOWED.has(mimeType)) {
    return NextResponse.json({ error: "Use JPEG, PNG, WebP, or GIF." }, { status: 400 });
  }

  const buffer = Buffer.from(await image.arrayBuffer());
  if (buffer.length === 0) {
    return NextResponse.json({ error: "Empty file." }, { status: 400 });
  }
  if (buffer.length > MAX_BYTES) {
    return NextResponse.json({ error: "Image too large (max 4 MB)." }, { status: 413 });
  }

  const envModel = process.env.GOOGLE_GENERATIVE_AI_MODEL?.trim();
  const primary = envModel || DEFAULT_MODEL;
  const modelChain = [...new Set([primary, DEFAULT_MODEL, ...FALLBACK_MODELS])];

  const genAI = new GoogleGenerativeAI(apiKey);
  const base64 = buffer.toString("base64");
  const parts = [
    { text: PROMPT },
    { inlineData: { mimeType, data: base64 } }
  ];

  let lastMessage = "Gemini request failed.";

  for (const modelId of modelChain) {
    const model = getGenerativeModelForMorse(genAI, modelId);

    for (let attempt = 0; attempt < 4; attempt++) {
      try {
        const result = await model.generateContent(parts);
        const raw = result.response.text().trim();
        const morse = morseLineFromAiText(raw);
        return NextResponse.json({ raw, morse, model: modelId });
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        lastMessage = message;

        if (isModelNotFound(message) || isFreeTierNoQuota(message)) {
          break;
        }

        const overloaded = isOverloaded(message);
        if (shouldRetryAsTransient(message) && attempt < 3) {
          await sleep(retryDelayMs(message, attempt, overloaded));
          continue;
        }

        if (shouldRetryAsTransient(message)) {
          break;
        }

        return NextResponse.json({ error: friendlyGeminiError(message) }, { status: 502 });
      }
    }
  }

  return NextResponse.json({ error: friendlyGeminiError(lastMessage) }, { status: 502 });
}

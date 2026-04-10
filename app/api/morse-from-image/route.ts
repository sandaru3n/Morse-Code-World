import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { morseLineFromAiText } from "@/lib/aiMorseResponse";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

/**
 * Gemini 1.5 IDs are removed from v1beta for many keys (404). Use 2.5 / 2.0 family.
 * Order: prefer 2.5 Flash, then lighter/cheaper variants, then 2.0.
 */
const DEFAULT_MODEL = "gemini-2.5-flash";
const FALLBACK_MODELS = [
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite"
];

const PROMPT = `You are an expert at reading International Morse code from images (printed or hand-drawn dots and dashes, or symbols like · • for dot and – — for dash).

Rules:
- Output a SINGLE line of Morse using . for dot/dit and - for dash/dah.
- One space between letters in a word.
- Use " / " (space, slash, space) between words.
- If one symbol is unreadable, use ? for that symbol only.
- No explanations, markdown, code fences, labels, or quotes—ONLY the Morse line.

If the image contains no Morse code, output exactly: (none)`;

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

function friendlyGeminiError(message: string): string {
  if (isModelNotFound(message)) {
    return (
      "No working Gemini model responded. Check GOOGLE_GENERATIVE_AI_MODEL against " +
      "https://ai.google.dev/gemini-api/docs/models — try gemini-2.5-flash, gemini-2.5-flash-lite, gemini-2.0-flash, or gemini-2.0-flash-lite."
    );
  }
  if (isFreeTierNoQuota(message)) {
    return (
      "Gemini free-tier quota for this model is exhausted or set to 0. Try another model via GOOGLE_GENERATIVE_AI_MODEL " +
      "(e.g. gemini-2.5-flash-lite or gemini-2.0-flash-lite) or enable billing in Google AI Studio / Cloud Console."
    );
  }
  if (isRateLimited(message)) {
    return (
      "Gemini rate limit or quota reached. Wait and retry, try a -lite model, or enable billing. " +
      message.slice(0, 240)
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
    const model = genAI.getGenerativeModel({ model: modelId });

    for (let attempt = 0; attempt < 3; attempt++) {
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

        if (isRateLimited(message) && attempt < 2) {
          await sleep(parseRetryDelayMs(message));
          continue;
        }

        if (isRateLimited(message)) {
          break;
        }

        return NextResponse.json({ error: friendlyGeminiError(message) }, { status: 502 });
      }
    }
  }

  return NextResponse.json({ error: friendlyGeminiError(lastMessage) }, { status: 502 });
}

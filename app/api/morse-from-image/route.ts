import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { morseLineFromAiText } from "@/lib/aiMorseResponse";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

/** Free tier often has no quota for 2.0-flash; 1.5-flash is the reliable default. */
const DEFAULT_MODEL = "gemini-1.5-flash";
const FALLBACK_MODELS = ["gemini-1.5-flash", "gemini-1.5-flash-8b"];

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
  if (isFreeTierNoQuota(message) && message.includes("gemini-2.0")) {
    return (
      "This Google Cloud project has no free-tier quota for gemini-2.0-flash (limit 0). " +
      `Unset GOOGLE_GENERATIVE_AI_MODEL or set it to ${DEFAULT_MODEL}. ` +
      "Or enable billing in Google AI Studio / Cloud Console."
    );
  }
  if (isRateLimited(message)) {
    return (
      "Gemini rate limit or quota reached. Wait a minute and try again, " +
      `or set GOOGLE_GENERATIVE_AI_MODEL=${DEFAULT_MODEL}, or enable billing. Details: ${message.slice(0, 280)}`
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
  const modelChain = [...new Set([primary, ...FALLBACK_MODELS])];

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

        if (isFreeTierNoQuota(message)) {
          break;
        }

        if (isRateLimited(message) && attempt < 2) {
          await sleep(parseRetryDelayMs(message));
          continue;
        }

        if (!isRateLimited(message)) {
          return NextResponse.json({ error: friendlyGeminiError(message) }, { status: 502 });
        }

        break;
      }
    }
  }

  return NextResponse.json({ error: friendlyGeminiError(lastMessage) }, { status: 502 });
}

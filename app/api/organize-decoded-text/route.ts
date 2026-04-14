import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

const DEFAULT_MODEL = "gemini-3.1-flash-lite-preview";
const FALLBACK_MODELS = [
  "gemini-3-flash-preview",
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-2.0-flash-lite"
];

function cleanAiText(s: string): string {
  return s
    .replace(/^```[\w-]*\s*/g, "")
    .replace(/\s*```$/g, "")
    .replace(/\r/g, "")
    .trim();
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json(
      { error: "AI is not configured. Set GOOGLE_GENERATIVE_AI_API_KEY on the server." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const text = typeof (body as { text?: unknown })?.text === "string" ? (body as { text: string }).text.trim() : "";
  const morse = typeof (body as { morse?: unknown })?.morse === "string" ? (body as { morse: string }).morse.trim() : "";

  if (!text) {
    return NextResponse.json({ error: "Missing decoded text." }, { status: 400 });
  }

  const prompt = `You are cleaning OCR-like decoded text from Morse code.
Goal: turn it into readable English with proper spaces, punctuation, and sentence casing.

Rules:
- Keep the original meaning.
- Do not add new facts.
- If uncertain, preserve original words instead of inventing.
- Return plain text only (no markdown, no labels, no quotes).

Raw decoded text:
${text}

Morse reference (optional):
${morse || "(not provided)"}
`;

  const primary = process.env.GOOGLE_GENERATIVE_AI_MODEL?.trim() || DEFAULT_MODEL;
  const modelChain = [...new Set([primary, DEFAULT_MODEL, ...FALLBACK_MODELS])];

  const genAI = new GoogleGenerativeAI(apiKey);
  let lastError = "AI organize failed.";

  for (const modelId of modelChain) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelId,
        generationConfig: {
          temperature: 0.15
        }
      });
      const result = await model.generateContent([{ text: prompt }]);
      const organized = cleanAiText(result.response.text());
      if (!organized) continue;
      return NextResponse.json({ organized, model: modelId });
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      lastError = message;
      const transient =
        message.includes("429") ||
        message.includes("503") ||
        message.includes("RESOURCE_EXHAUSTED") ||
        message.includes("UNAVAILABLE");
      if (transient) {
        continue;
      }
      return NextResponse.json({ error: `Gemini organize failed: ${message}` }, { status: 502 });
    }
  }

  return NextResponse.json(
    { error: `Gemini organize failed for all models. Last error: ${lastError}` },
    { status: 502 }
  );
}

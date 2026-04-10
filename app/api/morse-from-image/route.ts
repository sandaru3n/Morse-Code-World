import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { morseLineFromAiText } from "@/lib/aiMorseResponse";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

const PROMPT = `You are an expert at reading International Morse code from images (printed or hand-drawn dots and dashes, or symbols like · • for dot and – — for dash).

Rules:
- Output a SINGLE line of Morse using . for dot/dit and - for dash/dah.
- One space between letters in a word.
- Use " / " (space, slash, space) between words.
- If one symbol is unreadable, use ? for that symbol only.
- No explanations, markdown, code fences, labels, or quotes—ONLY the Morse line.

If the image contains no Morse code, output exactly: (none)`;

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

  const modelId =
    process.env.GOOGLE_GENERATIVE_AI_MODEL?.trim() || "gemini-2.0-flash";

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelId });
    const base64 = buffer.toString("base64");

    const result = await model.generateContent([
      { text: PROMPT },
      {
        inlineData: {
          mimeType,
          data: base64
        }
      }
    ]);

    const raw = result.response.text().trim();
    const morse = morseLineFromAiText(raw);

    return NextResponse.json({ raw, morse });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Gemini request failed.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

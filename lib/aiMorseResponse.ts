import { ocrTextToMorseGuess } from "@/lib/ocrMorse";

/** Strip markdown fences and normalize Gemini output into a Morse line. */
export function morseLineFromAiText(raw: string): string {
  let t = raw.trim();
  if (/^\(none\)$/i.test(t)) return "";
  t = t.replace(/^```[\w]*\s*/i, "").replace(/\s*```$/i, "").trim();
  t = t.replace(/^["'`]+|["'`]+$/g, "").trim();
  const line = t.split(/\r?\n/).find((l) => /[.\-\/]/.test(l)) ?? t;
  return ocrTextToMorseGuess(line);
}

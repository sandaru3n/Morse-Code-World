import { normalizeMorseInput } from "@/lib/translate";

/**
 * Turn noisy OCR text into a Morse-like string (dots, dashes, slashes, spaces).
 */
export function ocrTextToMorseGuess(raw: string): string {
  if (!raw) return "";
  let s = raw
    .replace(/[·•∙‧・･●]/g, ".")
    .replace(/[−–—‐_‒─]/g, "-")
    .replace(/\b[Dd]ot\b/g, ".")
    .replace(/\b[Dd]ash\b|\b[Dd]ah\b/g, "-");
  s = s.replace(/[^\.\-\/\s]/g, " ");
  return normalizeMorseInput(s);
}

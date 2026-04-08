import { CHAR_TO_MORSE } from "@/lib/morseMap";

export function encodeToMorse(input: string): string {
  return input
    .toUpperCase()
    .trim()
    .split(/\s+/)
    .map((word) =>
      word
        .split("")
        .map((char) => CHAR_TO_MORSE[char] ?? "")
        .filter(Boolean)
        .join(" ")
    )
    .filter(Boolean)
    .join(" / ");
}

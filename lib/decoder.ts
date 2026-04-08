import { MORSE_TO_CHAR } from "@/lib/morseMap";

export function decodeFromMorse(input: string): string {
  return input
    .trim()
    .split("/")
    .map((word) =>
      word
        .trim()
        .split(/\s+/)
        .map((symbol) => MORSE_TO_CHAR[symbol] ?? "#")
        .join("")
    )
    .filter(Boolean)
    .join(" ");
}

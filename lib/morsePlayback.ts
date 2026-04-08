import { encodeToMorse } from "@/lib/encoder";
import { normalizeMorseInput } from "@/lib/translate";

export type TranslateMode = "encode" | "decode";

/** Morse string safe for tone playback (no # placeholders). */
export function morseForPlayback(rawInput: string, mode: TranslateMode): string {
  if (mode === "decode") {
    return normalizeMorseInput(rawInput).replace(/[^.\- /]/g, "");
  }
  return encodeToMorse(rawInput)
    .replace(/#/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export type PlaybackStep =
  | { kind: "tone"; durationMs: number; symbolIndex: number }
  | { kind: "silence"; durationMs: number };

export function morseToSteps(morse: string, wpm: number): PlaybackStep[] {
  const unit = 1200 / wpm;
  const steps: PlaybackStep[] = [];
  let symbolIndex = 0;

  for (const char of morse) {
    if (char === ".") {
      steps.push({ kind: "tone", durationMs: unit, symbolIndex: symbolIndex++ });
      steps.push({ kind: "silence", durationMs: unit });
      continue;
    }
    if (char === "-") {
      steps.push({ kind: "tone", durationMs: unit * 3, symbolIndex: symbolIndex++ });
      steps.push({ kind: "silence", durationMs: unit });
      continue;
    }
    if (char === " ") {
      steps.push({ kind: "silence", durationMs: unit * 3 });
      continue;
    }
    if (char === "/") {
      steps.push({ kind: "silence", durationMs: unit * 7 });
    }
  }

  return steps;
}

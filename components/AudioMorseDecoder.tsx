"use client";

import { useMemo, useState } from "react";
import { decodeFromMorse } from "@/lib/decoder";
import { normalizeMorseInput } from "@/lib/translate";

type DecodeResult = {
  morse: string;
  dotMs: number;
  threshold: number;
};

function mean(values: number[]): number {
  if (!values.length) return 0;
  return values.reduce((acc, v) => acc + v, 0) / values.length;
}

function normalizedTimingError(duration: number, units: number[], dotMs: number): number {
  const best = Math.min(...units.map((u) => Math.abs(duration - u * dotMs)));
  return best / dotMs;
}

function formatByWords(text: string, maxChars: number): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "";
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (!line) {
      line = word;
      continue;
    }
    if (`${line} ${word}`.length <= maxChars) {
      line = `${line} ${word}`;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines.join("\n");
}

async function decodeAudioToMorse(file: File): Promise<DecodeResult> {
  const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) {
    throw new Error("This browser does not support Web Audio decoding.");
  }

  const context = new AudioCtx();
  try {
    const buffer = await file.arrayBuffer();
    const audio = await context.decodeAudioData(buffer);
    const data = audio.getChannelData(0);
    if (!data.length) {
      throw new Error("Audio file is empty.");
    }

    const frameMs = 10;
    const frameSize = Math.max(1, Math.floor((audio.sampleRate * frameMs) / 1000));
    const levels: number[] = [];

    for (let i = 0; i < data.length; i += frameSize) {
      let sum = 0;
      const end = Math.min(i + frameSize, data.length);
      for (let j = i; j < end; j++) {
        const v = data[j];
        sum += v * v;
      }
      const rms = Math.sqrt(sum / Math.max(1, end - i));
      levels.push(rms);
    }

    const smoothed = levels.map((_, i) => {
      const a = levels[i - 1] ?? levels[i];
      const b = levels[i];
      const c = levels[i + 1] ?? levels[i];
      return (a + b + c) / 3;
    });

    const maxLevel = Math.max(...smoothed, 0);
    if (maxLevel < 0.005) {
      throw new Error("No clear Morse tone detected in this audio.");
    }

    const threshold = Math.max(maxLevel * 0.3, 0.008);
    const states = smoothed.map((v) => v >= threshold);

    const segments: Array<{ tone: boolean; ms: number }> = [];
    let current = states[0];
    let count = 0;
    for (let i = 0; i < states.length; i++) {
      if (states[i] === current) {
        count++;
        continue;
      }
      segments.push({ tone: current, ms: count * frameMs });
      current = states[i];
      count = 1;
    }
    if (count > 0) {
      segments.push({ tone: current, ms: count * frameMs });
    }

    const cleaned = segments.filter((s) => s.ms >= 20);
    const toneDurations = cleaned.filter((s) => s.tone).map((s) => s.ms);
    const gapDurations = cleaned.filter((s) => !s.tone).map((s) => s.ms);
    if (!toneDurations.length) {
      throw new Error("Could not separate Morse beeps from silence.");
    }

    const sorted = [...toneDurations].sort((a, b) => a - b);
    const dotMs = sorted[Math.floor(sorted.length * 0.2)] ?? sorted[0];
    if (!dotMs || dotMs < 10) {
      throw new Error("Could not detect dot timing from audio.");
    }

    // Reject non-Morse-like timing patterns (e.g. speech/noise) early.
    const toneError = mean(toneDurations.map((d) => normalizedTimingError(d, [1, 3], dotMs)));
    const gapError = gapDurations.length
      ? mean(gapDurations.map((d) => normalizedTimingError(d, [1, 3, 7], dotMs)))
      : 1;
    if (toneError > 1.15 || gapError > 1.35) {
      throw new Error("Audio timing does not look like Morse beeps. Use a clearer pure-tone Morse recording.");
    }

    const tokens: string[] = [];
    let currentLetter = "";
    for (const seg of cleaned) {
      if (seg.tone) {
        currentLetter += seg.ms < dotMs * 2 ? "." : "-";
        continue;
      }

      const gapUnits = seg.ms / dotMs;
      if (gapUnits < 1.8) {
        // Intra-character gap: keep collecting dots/dashes in the same letter.
        continue;
      }

      if (currentLetter) {
        tokens.push(currentLetter);
        currentLetter = "";
      }

      if (gapUnits >= 5.5 && tokens[tokens.length - 1] !== "/") {
        tokens.push("/");
      }
    }
    if (currentLetter) tokens.push(currentLetter);

    const normalized = normalizeMorseInput(tokens.join(" "));
    if (!normalized) {
      throw new Error("Decoded output is empty. Try clearer tone audio.");
    }

    const symbolCount = (normalized.match(/[.-]/g) ?? []).length;
    const letterGapCount = (normalized.match(/ /g) ?? []).length;
    if (symbolCount > 30 && letterGapCount === 0) {
      throw new Error("Could not detect letter spacing. Try audio with clearer pauses between Morse letters.");
    }
    if (symbolCount > 2000) {
      throw new Error("Decoded signal is too dense to be valid Morse from this file.");
    }

    return {
      morse: normalized,
      dotMs,
      threshold
    };
  } finally {
    await context.close();
  }
}

export default function AudioMorseDecoder() {
  const [file, setFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [morseText, setMorseText] = useState("");
  const [dotMs, setDotMs] = useState<number | null>(null);
  const [threshold, setThreshold] = useState<number | null>(null);
  const [isDecoding, setIsDecoding] = useState(false);
  const [isOrganizing, setIsOrganizing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [aiText, setAiText] = useState("");
  const [aiError, setAiError] = useState("");
  const [aiModel, setAiModel] = useState("");

  const decoded = useMemo(() => {
    const normalized = normalizeMorseInput(morseText.replace(/\n+/g, " / "));
    if (!normalized) return "";
    return decodeFromMorse(normalized);
  }, [morseText]);
  const decodedLines = useMemo(() => formatByWords(decoded, 72), [decoded]);

  const onPickFile = (next: File | null) => {
    setErrorMsg("");
    setMorseText("");
    setDotMs(null);
    setThreshold(null);

    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl("");

    if (!next) {
      setFile(null);
      return;
    }
    if (!next.type.startsWith("audio/")) {
      setFile(null);
      setErrorMsg("Please choose an audio file (wav, mp3, m4a, ogg, etc.).");
      return;
    }
    setFile(next);
    setAudioUrl(URL.createObjectURL(next));
  };

  const handleDecode = async () => {
    if (!file) {
      setErrorMsg("Add an audio file first.");
      return;
    }
    setIsDecoding(true);
    setErrorMsg("");
    setAiError("");
    setAiText("");
    setAiModel("");
    setMorseText("");
    setDotMs(null);
    setThreshold(null);
    try {
      const result = await decodeAudioToMorse(file);
      const normalizedMorse = result.morse;
      const formattedMorse = formatByWords(normalizedMorse.replaceAll("/", " / "), 68);
      setMorseText(formattedMorse);
      setDotMs(result.dotMs);
      setThreshold(result.threshold);
      // Auto-process with Gemini after successful Morse decode.
      await handleAiOrganize(decodeFromMorse(normalizedMorse), normalizedMorse);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Could not decode this audio.");
    } finally {
      setIsDecoding(false);
    }
  };

  const handleAiOrganize = async (textOverride?: string, morseOverride?: string) => {
    const sourceText = (textOverride ?? decoded).trim();
    const sourceMorse = (morseOverride ?? normalizeMorseInput(morseText.replace(/\n+/g, " / ")) ?? "").trim();
    if (!sourceText) {
      setAiError("Decode Morse first, then use AI organize.");
      return;
    }
    setAiError("");
    setIsOrganizing(true);
    try {
      const res = await fetch("/api/organize-decoded-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: sourceText,
          morse: sourceMorse
        })
      });
      const data = (await res.json()) as { organized?: string; model?: string; error?: string };
      if (!res.ok) {
        throw new Error(data.error || `AI request failed (${res.status})`);
      }
      setAiText(formatByWords((data.organized ?? "").trim(), 72));
      setAiModel((data.model ?? "").trim());
    } catch (e) {
      setAiError(e instanceof Error ? e.message : "AI organize failed.");
    } finally {
      setIsOrganizing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div
        className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/80 p-6 text-center dark:border-outline-variant/40 dark:bg-surface-container-low/60 sm:p-8"
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={(e) => {
          e.preventDefault();
          const f = e.dataTransfer.files[0];
          if (f) onPickFile(f);
        }}
      >
        <input
          id="audio-morse-file"
          type="file"
          accept="audio/*"
          className="hidden"
          tabIndex={-1}
          onChange={(e) => onPickFile(e.target.files?.[0] ?? null)}
        />
        <label
          htmlFor="audio-morse-file"
          className="inline-flex cursor-pointer flex-col items-center gap-2 font-headline text-sm font-bold text-emerald-600 dark:text-primary-container"
        >
          <span className="rounded-full bg-primary-container/15 px-4 py-2 text-on-primary-container dark:bg-primary-container/20 dark:text-primary-fixed">
            Choose audio
          </span>
          <span className="font-label text-xs font-normal text-slate-500 dark:text-slate-500">or drag and drop here</span>
        </label>
      </div>

      {audioUrl && (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-outline-variant/30 dark:bg-surface-container">
          <div className="mb-2 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">Audio preview</div>
          <audio controls className="w-full" src={audioUrl}>
            Your browser does not support audio playback.
          </audio>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => void handleDecode()}
          disabled={!file || isDecoding}
          className="rounded-xl bg-primary-container px-5 py-2.5 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-all hover:brightness-110 disabled:opacity-45 dark:text-on-primary-container"
        >
          {isDecoding ? "Decoding audio..." : "Decode Morse from audio"}
        </button>
        {file && (
          <button
            type="button"
            onClick={() => onPickFile(null)}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-headline text-sm font-bold text-neutral-800 dark:border-outline-variant/40 dark:bg-surface-container dark:text-on-surface"
          >
            Clear
          </button>
        )}
        <button
          type="button"
          onClick={() => void handleAiOrganize()}
          disabled={isOrganizing || !decoded.trim()}
          className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 font-headline text-sm font-bold text-neutral-800 transition-all hover:bg-slate-50 disabled:opacity-45 dark:border-outline-variant/40 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
        >
          {isOrganizing ? "Organizing with AI..." : "Organize text with AI"}
        </button>
      </div>

      {errorMsg && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-label text-sm text-red-800 dark:border-error/40 dark:bg-error/10 dark:text-error">
          {errorMsg}
        </p>
      )}
      {aiError && (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-label text-sm text-amber-900 dark:border-amber-400/35 dark:bg-amber-500/10 dark:text-amber-200">
          {aiError}
        </p>
      )}

      {(dotMs || threshold) && (
        <div className="rounded-xl border border-slate-200/80 bg-slate-50 p-3 text-xs text-slate-600 dark:border-outline-variant/30 dark:bg-surface-container-low dark:text-slate-400">
          Dot length estimate: <strong>{dotMs?.toFixed(0)} ms</strong>
          {" | "}
          Signal threshold: <strong>{threshold?.toFixed(4)}</strong>
        </div>
      )}

      <div>
        <label htmlFor="audio-morse-edit" className="mb-1 block font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">
          Morse (edit if needed)
        </label>
        <textarea
          id="audio-morse-edit"
          className="h-28 w-full resize-y rounded-xl border border-slate-200 bg-white p-3 font-mono text-sm text-neutral-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-container/30 dark:border-outline-variant/30 dark:bg-surface-container dark:text-on-surface dark:placeholder:text-slate-600"
          placeholder=".- -... -.-.\n(words can be separated by / and lines)"
          value={morseText}
          onChange={(e) => setMorseText(e.target.value)}
          spellCheck={false}
        />
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 dark:border-outline-variant/20 dark:bg-surface-container-high/40 sm:p-5">
        <div className="mb-2 font-label text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500">Decoded text</div>
        <div className="min-h-[3rem] whitespace-pre-wrap break-words font-headline text-lg font-bold leading-snug text-neutral-900 dark:text-primary-fixed sm:text-xl">
          {decodedLines || <span className="text-slate-400 dark:text-slate-600">...</span>}
        </div>
      </div>

      {aiText && (
        <div className="rounded-2xl border border-emerald-300/50 bg-emerald-50/70 p-4 dark:border-primary-container/35 dark:bg-primary-container/10 sm:p-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <div className="font-label text-[10px] uppercase tracking-widest text-emerald-700 dark:text-primary-container">
              AI Organized Text
            </div>
            {aiModel && (
              <div className="font-label text-[10px] uppercase tracking-widest text-emerald-700/80 dark:text-primary-container/80">
                Gemini: {aiModel}
              </div>
            )}
          </div>
          <div className="min-h-[3rem] whitespace-pre-wrap break-words font-body text-base font-semibold leading-relaxed text-emerald-900 dark:text-primary-fixed">
            {aiText}
          </div>
        </div>
      )}
    </div>
  );
}

import type { PlaybackStep } from "@/lib/morsePlayback";

export type MorsePlaybackOptions = {
  wpm: number;
  pitchHz: number;
  volume: number;
  soundEnabled: boolean;
  vibrateEnabled: boolean;
  onSymbol?: (index: number) => void;
  onComplete?: () => void;
};

function beep(
  ctx: AudioContext,
  start: number,
  durationSec: number,
  pitchHz: number,
  peakGain: number
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.value = pitchHz;
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(peakGain, start + 0.005);
  gain.gain.setValueAtTime(peakGain, start + Math.max(durationSec - 0.01, 0));
  gain.gain.linearRampToValueAtTime(0, start + durationSec);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + durationSec + 0.02);
}

export function runMorsePlayback(
  steps: PlaybackStep[],
  options: MorsePlaybackOptions
): { stop: () => void; pause: () => void; resume: () => void; getPaused: () => boolean } {
  const AudioCtx =
    typeof window !== "undefined"
      ? window.AudioContext ||
        (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      : undefined;

  if (!AudioCtx || steps.length === 0) {
    options.onComplete?.();
    return {
      stop: () => undefined,
      pause: () => undefined,
      resume: () => undefined,
      getPaused: () => false
    };
  }

  const ctx = new AudioCtx();
  let stopped = false;
  let paused = false;
  let stepIndex = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const peakGain = Math.min(1, Math.max(0, options.volume)) * 0.35;

  const clearTimer = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  const scheduleStep = () => {
    if (stopped || paused) return;

    if (stepIndex >= steps.length) {
      clearTimer();
      void ctx.close();
      options.onComplete?.();
      return;
    }

    const step = steps[stepIndex]!;

    if (step.kind === "silence") {
      timeoutId = setTimeout(() => {
        stepIndex += 1;
        scheduleStep();
      }, step.durationMs);
      return;
    }

    options.onSymbol?.(step.symbolIndex);
    if (options.vibrateEnabled && typeof navigator !== "undefined" && navigator.vibrate) {
      const v = step.durationMs < 200 ? 40 : 120;
      navigator.vibrate(v);
    }

    if (options.soundEnabled) {
      const t = ctx.currentTime + 0.01;
      beep(ctx, t, step.durationMs / 1000, options.pitchHz, peakGain);
    }

    timeoutId = setTimeout(() => {
      stepIndex += 1;
      scheduleStep();
    }, step.durationMs);
  };

  scheduleStep();

  return {
    stop: () => {
      stopped = true;
      paused = false;
      clearTimer();
      void ctx.close();
    },
    pause: () => {
      if (stopped || paused) return;
      paused = true;
      clearTimer();
      void ctx.suspend();
    },
    resume: () => {
      if (stopped || !paused) return;
      paused = false;
      void ctx.resume();
      scheduleStep();
    },
    getPaused: () => paused
  };
}

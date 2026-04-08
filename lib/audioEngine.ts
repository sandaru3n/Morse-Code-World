const TONE_HZ = 600;
const GAIN_LEVEL = 0.25;

function beep(ctx: AudioContext, start: number, duration: number) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.value = TONE_HZ;
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(GAIN_LEVEL, start + 0.005);
  gain.gain.setValueAtTime(GAIN_LEVEL, start + Math.max(duration - 0.01, 0));
  gain.gain.linearRampToValueAtTime(0, start + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

export function playMorse(
  morse: string,
  wpm: number,
  onSymbol?: (index: number) => void
): { stop: () => void } {
  const AudioCtx =
    typeof window !== "undefined" ? window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext : undefined;
  if (!AudioCtx) {
    return { stop: () => undefined };
  }

  const ctx = new AudioCtx();
  const unitMs = 1200 / wpm;
  const timeline: number[] = [];
  let time = ctx.currentTime + 0.02;
  const timers: number[] = [];

  for (const char of morse) {
    if (char === ".") {
      timeline.push(time);
      beep(ctx, time, unitMs / 1000);
      time += (unitMs * 2) / 1000;
      continue;
    }
    if (char === "-") {
      timeline.push(time);
      beep(ctx, time, (unitMs * 3) / 1000);
      time += (unitMs * 4) / 1000;
      continue;
    }
    if (char === " ") {
      time += (unitMs * 3) / 1000;
      continue;
    }
    if (char === "/") {
      time += (unitMs * 7) / 1000;
    }
  }

  timeline.forEach((start, index) => {
    const delay = Math.max(0, (start - ctx.currentTime) * 1000);
    const id = window.setTimeout(() => {
      onSymbol?.(index);
    }, delay);
    timers.push(id);
  });

  return {
    stop: () => {
      timers.forEach((id) => window.clearTimeout(id));
      void ctx.close();
    }
  };
}

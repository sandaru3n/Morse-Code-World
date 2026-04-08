import type { PlaybackStep } from "@/lib/morsePlayback";

function floatToWav(samples: Float32Array, sampleRate: number): Blob {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
  };

  let offset = 0;
  writeStr(offset, "RIFF");
  offset += 4;
  view.setUint32(offset, 36 + samples.length * 2, true);
  offset += 4;
  writeStr(offset, "WAVE");
  offset += 4;
  writeStr(offset, "fmt ");
  offset += 4;
  view.setUint32(offset, 16, true);
  offset += 4;
  view.setUint16(offset, 1, true);
  offset += 2;
  view.setUint16(offset, 1, true);
  offset += 2;
  view.setUint32(offset, sampleRate, true);
  offset += 4;
  view.setUint32(offset, sampleRate * 2, true);
  offset += 4;
  view.setUint16(offset, 2, true);
  offset += 2;
  view.setUint16(offset, 16, true);
  offset += 2;
  writeStr(offset, "data");
  offset += 4;
  view.setUint32(offset, samples.length * 2, true);
  offset += 4;

  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]!));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function scheduleTone(
  ctx: OfflineAudioContext,
  startSec: number,
  durationSec: number,
  pitchHz: number,
  peakGain: number
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = pitchHz;
  gain.gain.setValueAtTime(0, startSec);
  gain.gain.linearRampToValueAtTime(peakGain, startSec + 0.005);
  gain.gain.setValueAtTime(peakGain, startSec + Math.max(durationSec - 0.01, 0));
  gain.gain.linearRampToValueAtTime(0, startSec + durationSec);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startSec);
  osc.stop(startSec + durationSec + 0.02);
}

export async function morseStepsToWavBlob(
  steps: PlaybackStep[],
  pitchHz: number,
  volume: number
): Promise<Blob | null> {
  if (steps.length === 0) return null;

  let totalSec = 0;
  for (const step of steps) {
    totalSec += step.durationMs / 1000;
  }

  const sampleRate = 44100;
  const length = Math.max(1, Math.ceil(totalSec * sampleRate));
  const offline = new OfflineAudioContext(1, length, sampleRate);
  const peakGain = Math.min(1, Math.max(0, volume)) * 0.35;

  let tSec = 0;
  for (const step of steps) {
    const dur = step.durationMs / 1000;
    if (step.kind === "tone") {
      scheduleTone(offline, tSec, dur, pitchHz, peakGain);
    }
    tSec += dur;
  }

  const rendered = await offline.startRendering();
  return floatToWav(rendered.getChannelData(0), sampleRate);
}

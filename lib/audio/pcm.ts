/** Client-only PCM manipulation: slicing, joining, and fading decoded audio buffers. */

function getSharedAudioContext(): AudioContext {
  const w = window as Window & { __morseAudioCtx?: AudioContext };
  if (!w.__morseAudioCtx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    w.__morseAudioCtx = new Ctor();
  }
  return w.__morseAudioCtx;
}

export function createEmptyBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer {
  return getSharedAudioContext().createBuffer(numberOfChannels, Math.max(1, length), sampleRate);
}

/** Returns a new AudioBuffer containing only the [startSec, endSec) region. */
export function sliceBuffer(buffer: AudioBuffer, startSec: number, endSec: number): AudioBuffer {
  const sampleRate = buffer.sampleRate;
  const startSample = Math.max(0, Math.floor(startSec * sampleRate));
  const endSample = Math.min(buffer.length, Math.ceil(endSec * sampleRate));
  const length = Math.max(1, endSample - startSample);
  const out = createEmptyBuffer(buffer.numberOfChannels, length, sampleRate);

  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const src = buffer.getChannelData(c);
    const dst = out.getChannelData(c);
    dst.set(src.subarray(startSample, startSample + length));
  }
  return out;
}

/** Concatenates two buffers of the same sample rate / channel count into one continuous buffer. */
export function concatBuffers(a: AudioBuffer, b: AudioBuffer): AudioBuffer {
  const sampleRate = a.sampleRate;
  const channelCount = Math.max(a.numberOfChannels, b.numberOfChannels);
  const length = a.length + b.length;
  const out = createEmptyBuffer(channelCount, length, sampleRate);

  for (let c = 0; c < channelCount; c++) {
    const dst = out.getChannelData(c);
    const aData = c < a.numberOfChannels ? a.getChannelData(c) : null;
    const bData = c < b.numberOfChannels ? b.getChannelData(c) : null;
    if (aData) dst.set(aData, 0);
    if (bData) dst.set(bData, a.length);
  }
  return out;
}

/** Builds the exact buffer that will be exported, given the cut mode. */
export function buildExportBuffer(
  source: AudioBuffer,
  startSec: number,
  endSec: number,
  mode: "keep" | "delete"
): AudioBuffer {
  if (mode === "keep") {
    return sliceBuffer(source, startSec, endSec);
  }
  const before = sliceBuffer(source, 0, startSec);
  const after = sliceBuffer(source, endSec, source.duration);
  return concatBuffers(before, after);
}

/** Applies linear fade-in / fade-out ramps in place, directly on the buffer's sample data. */
export function applyFades(buffer: AudioBuffer, fadeInSec: number, fadeOutSec: number): void {
  const sampleRate = buffer.sampleRate;
  const length = buffer.length;
  const fadeInSamples = Math.min(length, Math.round(Math.max(0, fadeInSec) * sampleRate));
  const fadeOutSamples = Math.min(length, Math.round(Math.max(0, fadeOutSec) * sampleRate));

  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const data = buffer.getChannelData(c);

    for (let i = 0; i < fadeInSamples; i++) {
      data[i]! *= i / fadeInSamples;
    }

    for (let i = 0; i < fadeOutSamples; i++) {
      const idx = length - 1 - i;
      if (idx < fadeInSamples) break; // avoid double-fading a very short clip
      data[idx]! *= i / fadeOutSamples;
    }
  }
}

/** Decodes a File into an AudioBuffer entirely in-browser (never uploaded anywhere). */
export async function decodeAudioFile(file: File): Promise<AudioBuffer> {
  const arrayBuffer = await file.arrayBuffer();
  const ctx = getSharedAudioContext();
  // Safari's decodeAudioData callback overload is more reliable than the promise form on old versions.
  return await ctx.decodeAudioData(arrayBuffer.slice(0));
}

export { getSharedAudioContext };

/** MP3 encoding via lamejs (pure JS, no wasm/threads needed) — runs entirely client-side. */
import { Mp3Encoder } from "lamejs";

const SAMPLES_PER_FRAME = 1152;

function floatTo16BitInt(input: Float32Array): Int16Array {
  const out = new Int16Array(input.length);
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]!));
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return out;
}

export async function encodeMp3Blob(buffer: AudioBuffer, kbps = 128): Promise<Blob> {
  const channelCount = Math.min(2, buffer.numberOfChannels);
  const encoder = new Mp3Encoder(channelCount, buffer.sampleRate, kbps);
  const left = floatTo16BitInt(buffer.getChannelData(0));
  const right = channelCount === 2 ? floatTo16BitInt(buffer.getChannelData(1)) : undefined;

  const chunks: Int8Array[] = [];
  for (let i = 0; i < left.length; i += SAMPLES_PER_FRAME) {
    const leftChunk = left.subarray(i, i + SAMPLES_PER_FRAME);
    const rightChunk = right ? right.subarray(i, i + SAMPLES_PER_FRAME) : undefined;
    const encoded = encoder.encodeBuffer(leftChunk, rightChunk);
    if (encoded.length > 0) chunks.push(encoded);

    // Yield back to the main thread periodically so the UI (progress spinner) stays responsive.
    if (i % (SAMPLES_PER_FRAME * 200) === 0) {
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  }
  const final = encoder.flush();
  if (final.length > 0) chunks.push(final);

  return new Blob(chunks as unknown as BlobPart[], { type: "audio/mpeg" });
}

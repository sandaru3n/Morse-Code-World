/** Client-only helpers for turning decoded audio into a drawable waveform. */

export type WaveformPeaks = {
  /** Per-bucket minimum sample value, range [-1, 1]. */
  mins: Float32Array;
  /** Per-bucket maximum sample value, range [-1, 1]. */
  maxes: Float32Array;
};

/**
 * Downsamples a decoded AudioBuffer into `bucketCount` (min, max) pairs so a
 * multi-minute song can be drawn on a canvas a few hundred pixels wide
 * without re-scanning millions of samples on every repaint.
 */
export function computeWaveformPeaks(buffer: AudioBuffer, bucketCount: number): WaveformPeaks {
  const channelCount = buffer.numberOfChannels;
  const length = buffer.length;
  const mins = new Float32Array(bucketCount);
  const maxes = new Float32Array(bucketCount);
  const samplesPerBucket = Math.max(1, Math.floor(length / bucketCount));

  const channels: Float32Array[] = [];
  for (let c = 0; c < channelCount; c++) channels.push(buffer.getChannelData(c));

  for (let bucket = 0; bucket < bucketCount; bucket++) {
    const start = bucket * samplesPerBucket;
    const end = bucket === bucketCount - 1 ? length : Math.min(length, start + samplesPerBucket);
    let min = 0;
    let max = 0;
    for (let i = start; i < end; i++) {
      let sample = 0;
      for (let c = 0; c < channelCount; c++) sample += channels[c]![i]!;
      sample /= channelCount;
      if (sample < min) min = sample;
      if (sample > max) max = sample;
    }
    mins[bucket] = min;
    maxes[bucket] = max;
  }

  return { mins, maxes };
}

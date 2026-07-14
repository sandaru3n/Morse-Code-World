import Replicate from "replicate";

/** Server-only Replicate client. Never import this from a client component. */
export function getReplicateClient(): Replicate {
  const token = process.env.REPLICATE_API_TOKEN;
  if (!token?.trim()) {
    throw new Error("REPLICATE_API_TOKEN is not configured on the server.");
  }
  return new Replicate({ auth: token });
}

/**
 * Pinned version of cjwbw/demucs (Hybrid Transformer Demucs, htdemucs).
 * https://replicate.com/cjwbw/demucs/versions
 */
export const DEMUCS_MODEL_VERSION =
  "25a173108cff36ef9f80f854c162d01df9e6528be175794b81158fa03836d953";

export type DemucsOutput = {
  vocals?: string | null;
  bass?: string | null;
  drums?: string | null;
  guitar?: string | null;
  piano?: string | null;
  other?: string | null;
};

/**
 * With `stem: "vocals"`, the model returns only two populated fields:
 * - `vocals`: the isolated vocal track
 * - `other`: every other stem (drums + bass + rest) summed back together,
 *   i.e. the instrumental / karaoke track.
 */
export function splitDemucsOutput(output: DemucsOutput | null | undefined) {
  return {
    vocals: output?.vocals ?? null,
    instrumental: output?.other ?? null
  };
}

/**
 * Lazy-loaded ffmpeg.wasm client, used only for M4A / M4R (iPhone ringtone)
 * export. Uses the SINGLE-THREADED core on purpose: the multi-threaded one
 * needs SharedArrayBuffer + cross-origin isolation, which silently isn't
 * active after client-side navigation and breaks in several browsers. The
 * single-threaded core works everywhere and is fast enough for short clips.
 * Everything still runs on-device, nothing is uploaded anywhere.
 */
import { encodeWavBlob } from "@/lib/audio/wavEncoder";

const CORE_VERSION = "0.12.6";
const CORE_BASE_URL = `https://unpkg.com/@ffmpeg/core@${CORE_VERSION}/dist/umd`;

let ffmpegPromise: Promise<import("@ffmpeg/ffmpeg").FFmpeg> | null = null;

async function loadFfmpeg(): Promise<import("@ffmpeg/ffmpeg").FFmpeg> {
  if (!ffmpegPromise) {
    ffmpegPromise = (async () => {
      const { FFmpeg } = await import("@ffmpeg/ffmpeg");
      const { toBlobURL } = await import("@ffmpeg/util");
      const ffmpeg = new FFmpeg();
      await ffmpeg.load({
        coreURL: await toBlobURL(`${CORE_BASE_URL}/ffmpeg-core.js`, "text/javascript"),
        wasmURL: await toBlobURL(`${CORE_BASE_URL}/ffmpeg-core.wasm`, "application/wasm")
      });
      return ffmpeg;
    })().catch((e) => {
      ffmpegPromise = null;
      throw e;
    });
  }
  return ffmpegPromise;
}

/** Transcodes a decoded AudioBuffer to AAC-in-MP4, saved with either the .m4a or .m4r extension. */
export async function encodeM4aOrM4r(buffer: AudioBuffer, extension: "m4a" | "m4r"): Promise<Blob> {
  const ffmpeg = await loadFfmpeg();
  const wavBlob = encodeWavBlob(buffer);
  const inputBytes = new Uint8Array(await wavBlob.arrayBuffer());

  const inputName = "input.wav";
  // ffmpeg infers the container from the extension; .m4r isn't recognized, so
  // always produce .m4a (same MP4/AAC container) and let the download rename it.
  const outputName = "output.m4a";

  await ffmpeg.writeFile(inputName, inputBytes);
  const code = await ffmpeg.exec(["-i", inputName, "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", outputName]);
  if (code !== 0) {
    await ffmpeg.deleteFile(inputName).catch(() => {});
    throw new Error("Conversion failed. Try a different format.");
  }

  const data = await ffmpeg.readFile(outputName);
  await ffmpeg.deleteFile(inputName).catch(() => {});
  await ffmpeg.deleteFile(outputName).catch(() => {});

  const bytes = data instanceof Uint8Array ? data : new TextEncoder().encode(data as string);
  void extension; // extension only affects the filename chosen by the caller
  return new Blob([bytes as BlobPart], { type: "audio/mp4" });
}

"use client";

import dynamic from "next/dynamic";

// All audio decoding/encoding relies on browser-only APIs (Web Audio API,
// canvas, ffmpeg.wasm), so this is loaded client-side only, never on the server.
const AudioCutter = dynamic(() => import("@/components/AudioCutter").then((m) => m.AudioCutter), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center dark:border-outline-variant/30 dark:bg-surface-container">
      <p className="font-label text-xs text-slate-500 dark:text-slate-500">Loading...</p>
    </div>
  )
});

export function AudioCutterClient() {
  return <AudioCutter />;
}

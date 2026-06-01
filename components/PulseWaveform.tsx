"use client";

import { memo } from "react";

type PulseWaveformProps = {
  morse: string;
  activeIndex: number | null;
};

/** Morse dot/dash strip only (no equalizer / scan line). */
const PulseWaveform = memo(function PulseWaveform({ morse, activeIndex }: PulseWaveformProps) {
  const symbols = morse.split("").filter((c) => c === "." || c === "-");

  if (symbols.length === 0) return null;

  return (
    <div className="mb-5 flex flex-wrap justify-center gap-1 rounded-lg border border-outline-variant/10 bg-surface-container-lowest px-2 py-2 dark:border-outline-variant/10 dark:bg-surface-container-lowest">
      {symbols.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`h-2 rounded-sm border border-outline-variant/40 dark:border-outline-variant/40 ${
            char === "." ? "w-2" : "w-6"
          } ${index === activeIndex ? "bg-primary-container shadow-neon-primary" : "bg-surface-bright/80 dark:bg-surface-bright/80"}`}
        />
      ))}
    </div>
  );
});

export default PulseWaveform;

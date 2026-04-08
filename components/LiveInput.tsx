"use client";

import { useRef } from "react";

type LiveInputProps = {
  onSymbol: (symbol: "." | "-") => void;
  onLetterGap: () => void;
};

export default function LiveInput({ onSymbol, onLetterGap }: LiveInputProps) {
  const pressStartRef = useRef<number | null>(null);
  const releaseTimerRef = useRef<number | null>(null);

  const handlePressStart = () => {
    if (releaseTimerRef.current) {
      window.clearTimeout(releaseTimerRef.current);
    }
    pressStartRef.current = Date.now();
  };

  const handlePressEnd = () => {
    if (!pressStartRef.current) return;
    const duration = Date.now() - pressStartRef.current;
    onSymbol(duration >= 200 ? "-" : ".");
    pressStartRef.current = null;

    releaseTimerRef.current = window.setTimeout(() => {
      onLetterGap();
    }, 500);
  };

  return (
    <div>
      <h3 className="mb-1.5 font-label text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        Live input
      </h3>
      <button
        type="button"
        className="min-h-[64px] w-full rounded-lg border border-outline-variant/30 bg-primary-container/90 py-3 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-all active:brightness-110 dark:border-outline-variant/30 dark:text-on-primary-container"
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
      >
        Tap for dot, hold for dash
      </button>
    </div>
  );
}

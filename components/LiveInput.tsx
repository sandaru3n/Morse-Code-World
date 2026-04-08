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
    <div className="card">
      <h3 className="panel-title">Live Input Mode</h3>
      <button
        className="live-btn"
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

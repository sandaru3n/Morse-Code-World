"use client";

import { useCallback, useRef, useState } from "react";
import { playMorse } from "@/lib/audioEngine";

type Player = { stop: () => void } | null;

export function useMorseAudio() {
  const [activeSymbolIndex, setActiveSymbolIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<Player>(null);

  const stop = useCallback(() => {
    playerRef.current?.stop();
    playerRef.current = null;
    setIsPlaying(false);
    setActiveSymbolIndex(null);
  }, []);

  const play = useCallback(
    (morse: string, wpm: number) => {
      stop();
      if (!morse.trim()) return;
      setIsPlaying(true);
      playerRef.current = playMorse(morse, wpm, (index) => setActiveSymbolIndex(index));
      const approximateMs = Math.max(300, (morse.length * (1200 / wpm)));
      window.setTimeout(() => {
        setIsPlaying(false);
        setActiveSymbolIndex(null);
      }, approximateMs + 500);
    },
    [stop]
  );

  return { play, stop, isPlaying, activeSymbolIndex };
}

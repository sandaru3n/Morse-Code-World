"use client";

import { useCallback, useRef, useState } from "react";
import { runMorsePlayback, type MorsePlaybackOptions } from "@/lib/audioEngine";
import type { PlaybackStep } from "@/lib/morsePlayback";

type Controller = ReturnType<typeof runMorsePlayback> | null;

export function useMorseAudio() {
  const [activeSymbolIndex, setActiveSymbolIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const controllerRef = useRef<Controller>(null);

  const stop = useCallback(() => {
    controllerRef.current?.stop();
    controllerRef.current = null;
    setIsPlaying(false);
    setIsPaused(false);
    setActiveSymbolIndex(null);
  }, []);

  const startPlayback = useCallback(
    (steps: PlaybackStep[], baseOptions: MorsePlaybackOptions) => {
      stop();
      if (steps.length === 0) return;

      setIsPlaying(true);
      setIsPaused(false);
      setActiveSymbolIndex(null);

      controllerRef.current = runMorsePlayback(steps, {
        ...baseOptions,
        onSymbol: (index) => {
          setActiveSymbolIndex(index);
          baseOptions.onSymbol?.(index);
        },
        onComplete: () => {
          controllerRef.current = null;
          setIsPlaying(false);
          setIsPaused(false);
          setActiveSymbolIndex(null);
          baseOptions.onComplete?.();
        }
      });
    },
    [stop]
  );

  const pause = useCallback(() => {
    controllerRef.current?.pause();
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    controllerRef.current?.resume();
    setIsPaused(false);
  }, []);

  return {
    startPlayback,
    stop,
    pause,
    resume,
    isPlaying,
    isPaused,
    activeSymbolIndex
  };
}

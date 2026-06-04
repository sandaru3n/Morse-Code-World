"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  runMorsePlayback,
  type MorsePlaybackOptions,
  type ScreenFlashPhase
} from "@/lib/audioEngine";
import type { PlaybackStep } from "@/lib/morsePlayback";

type Controller = ReturnType<typeof runMorsePlayback> | null;

export function useMorseAudio() {
  const [activeSymbolIndex, setActiveSymbolIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotionRef = useRef(false);
  const controllerRef = useRef<Controller>(null);
  const symbolRafRef = useRef<number | null>(null);
  const pendingSymbolRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const onChange = () => {
      reduceMotionRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const flushSymbolIndex = useCallback(() => {
    symbolRafRef.current = null;
    const idx = pendingSymbolRef.current;
    pendingSymbolRef.current = null;
    setActiveSymbolIndex(idx);
  }, []);

  const scheduleSymbolIndex = useCallback(
    (index: number) => {
      pendingSymbolRef.current = index;
      if (symbolRafRef.current === null) {
        symbolRafRef.current = requestAnimationFrame(flushSymbolIndex);
      }
    },
    [flushSymbolIndex]
  );

  const stop = useCallback(() => {
    if (symbolRafRef.current !== null) {
      cancelAnimationFrame(symbolRafRef.current);
      symbolRafRef.current = null;
    }
    pendingSymbolRef.current = null;
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
        onScreenFlash: (phase) => {
          if (!reduceMotionRef.current) {
            baseOptions.onScreenFlash?.(phase);
          }
        },
        onSymbol: (index) => {
          scheduleSymbolIndex(index);
          baseOptions.onSymbol?.(index);
        },
        onComplete: () => {
          controllerRef.current = null;
          setIsPlaying(false);
          setIsPaused(false);
          setActiveSymbolIndex(null);
          baseOptions.onScreenFlash?.("off");
          baseOptions.onComplete?.();
        }
      });
    },
    [scheduleSymbolIndex, stop]
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

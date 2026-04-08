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
  const [screenFlashPhase, setScreenFlashPhase] = useState<ScreenFlashPhase>("off");
  const reduceMotionRef = useRef(false);
  const controllerRef = useRef<Controller>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const onChange = () => {
      reduceMotionRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const stop = useCallback(() => {
    controllerRef.current?.stop();
    controllerRef.current = null;
    setIsPlaying(false);
    setIsPaused(false);
    setActiveSymbolIndex(null);
    setScreenFlashPhase("off");
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
          if (baseOptions.screenFlashEnabled && !reduceMotionRef.current) {
            setScreenFlashPhase(phase);
          }
        },
        onSymbol: (index) => {
          setActiveSymbolIndex(index);
          baseOptions.onSymbol?.(index);
        },
        onComplete: () => {
          controllerRef.current = null;
          setIsPlaying(false);
          setIsPaused(false);
          setActiveSymbolIndex(null);
          setScreenFlashPhase("off");
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
    activeSymbolIndex,
    screenFlashPhase
  };
}

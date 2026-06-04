"use client";

import { useCallback, useRef } from "react";
import type { ScreenFlashPhase } from "@/lib/audioEngine";

/** Updates a persistent overlay via DOM — avoids React re-renders during playback. */
export function useScreenFlashOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const enabledRef = useRef(false);

  const applyPhase = useCallback((phase: ScreenFlashPhase) => {
    const el = overlayRef.current;
    if (!el) return;
    if (phase === "off" || !enabledRef.current) {
      el.style.visibility = "hidden";
      el.style.opacity = "0";
      return;
    }
    el.style.visibility = "visible";
    el.style.opacity = phase === "white" ? "0.94" : "0.92";
    el.style.backgroundColor = phase === "white" ? "#ffffff" : "#000000";
  }, []);

  const setEnabled = useCallback(
    (enabled: boolean) => {
      enabledRef.current = enabled;
      if (!enabled) applyPhase("off");
    },
    [applyPhase]
  );

  return { applyPhase, setEnabled, overlayRef };
}

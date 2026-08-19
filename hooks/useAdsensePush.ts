"use client";

import { useEffect, useRef } from "react";

type AdsWindow = Window & { adsbygoogle?: unknown[] };

/**
 * Returns a ref for an <ins class="adsbygoogle"> and pushes the unit only after
 * the slot has a measurable width. Calling push() while width is 0 triggers
 * "No slot size for availableWidth=0" from AdSense.
 */
export function useAdsensePush() {
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const ins = insRef.current;
    if (!ins) return;

    let pushed = false;

    const tryPush = () => {
      if (pushed) return true;
      if (ins.offsetWidth < 1) return false;
      try {
        const w = window as AdsWindow;
        w.adsbygoogle = w.adsbygoogle || [];
        w.adsbygoogle.push({});
        pushed = true;
      } catch {
        // Ad blockers or consent tooling can prevent initialization.
      }
      return pushed;
    };

    if (tryPush()) return;

    const ro = new ResizeObserver(() => {
      if (tryPush()) ro.disconnect();
    });
    ro.observe(ins);

    const t = window.setTimeout(() => {
      if (tryPush()) ro.disconnect();
    }, 250);

    return () => {
      ro.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return insRef;
}

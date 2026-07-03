"use client";

import { useEffect } from "react";

const ADSENSE_CLIENT = "ca-pub-7227917768990151";
const HEADER_HORIZONTAL_SLOT = "5039334568";

type AdsWindow = Window & {
  adsbygoogle?: unknown[];
};

export function AdsenseHorizontalBanner({ className = "" }: { className?: string }) {
  useEffect(() => {
    try {
      const adsWindow = window as AdsWindow;
      adsWindow.adsbygoogle = adsWindow.adsbygoogle || [];
      adsWindow.adsbygoogle.push({});
    } catch {
      // Ad blockers or consent tooling can prevent AdSense initialization.
    }
  }, []);

  return (
    <aside className={`w-full ${className}`} aria-label="Advertisement">
      <div className="mx-auto w-full overflow-hidden border border-slate-200/80 bg-white px-2 py-3 text-center shadow-sm dark:border-white/10 dark:bg-surface-container">
        <div className="mb-2 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          Advertisement
        </div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={HEADER_HORIZONTAL_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}

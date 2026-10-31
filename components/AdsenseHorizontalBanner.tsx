"use client";

import { useAdsensePush } from "@/hooks/useAdsensePush";

const ADSENSE_CLIENT = "ca-pub-7227917768990151";
const HEADER_HORIZONTAL_SLOT = "5039334568";

export function AdsenseHorizontalBanner({
  className = "",
  appearance = "default"
}: {
  className?: string;
  appearance?: "default" | "white";
}) {
  const insRef = useAdsensePush();
  const isWhite = appearance === "white";

  return (
    <aside className={`block w-full ${className}`} aria-label="Advertisement">
      <div
        className={
          isWhite
            ? "mx-auto w-full overflow-hidden border border-slate-200 bg-white px-2 py-3 text-center shadow-sm"
            : "mx-auto w-full overflow-hidden border border-slate-200/80 bg-white px-2 py-3 text-center shadow-sm dark:border-white/10 dark:bg-surface-container"
        }
      >
        <div
          className={`mb-2 font-label text-[10px] font-semibold uppercase tracking-[0.18em] ${isWhite ? "text-[#94A3B8]" : "text-slate-400 dark:text-slate-500"}`}
        >
          Advertisement
        </div>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", minHeight: 90 }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={HEADER_HORIZONTAL_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}

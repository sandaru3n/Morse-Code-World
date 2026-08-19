"use client";

import { useAdsensePush } from "@/hooks/useAdsensePush";

/** Square AdSense unit (morsecodesquare, slot 1887151488). Loader script lives in app/layout.tsx. */
export function AdsenseSquareAd({ className = "" }: { className?: string }) {
  const insRef = useAdsensePush();

  return (
    <aside
      className={`block w-full overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
      {/* morsecodesquare — attributes match the AdSense snippet exactly */}
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minHeight: 280 }}
        data-ad-client="ca-pub-7227917768990151"
        data-ad-slot="1887151488"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

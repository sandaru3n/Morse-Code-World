"use client";

// AdSense temporarily disabled — Scriptwrapper is used instead.
// import { useAdsensePush } from "@/hooks/useAdsensePush";

export function AdsenseSquareAd({ className = "" }: { className?: string }) {
  void className;
  return null;

  /*
  const insRef = useAdsensePush();

  return (
    <aside
      className={`block w-full overflow-hidden ${className}`}
      aria-label="Advertisement"
    >
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
  */
}

"use client";

import { useEffect, useRef } from "react";

/** Exact AdSense square unit code — do not edit the snippet below. */
const ADSENSE_SQUARE_HTML = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7227917768990151"
     crossorigin="anonymous"></script>
<!-- morsecodesquare -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7227917768990151"
     data-ad-slot="1887151488"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

export function AdsenseSquareAd({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || el.dataset.adsInserted === "1") return;
    el.dataset.adsInserted = "1";

    // createContextualFragment runs <script> tags; innerHTML does not.
    const range = document.createRange();
    range.selectNode(el);
    el.appendChild(range.createContextualFragment(ADSENSE_SQUARE_HTML));
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex min-h-[280px] w-full max-w-full items-center justify-center overflow-hidden ${className}`}
      aria-label="Advertisement"
    />
  );
}

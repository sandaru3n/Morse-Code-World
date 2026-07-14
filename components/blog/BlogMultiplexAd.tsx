"use client";

import { useEffect, useRef } from "react";

/** Exact AdSense multiplex unit code — do not edit the snippet below. */
const ADSENSE_MULTIPLEX_HTML = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7227917768990151"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:inline-block;width:360px;height:400px"
     data-ad-client="ca-pub-7227917768990151"
     data-ad-slot="6671942444"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

export function BlogMultiplexAd() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || el.dataset.adsInserted === "1") return;
    el.dataset.adsInserted = "1";

    // createContextualFragment runs <script> tags; innerHTML does not.
    const range = document.createRange();
    range.selectNode(el);
    el.appendChild(range.createContextualFragment(ADSENSE_MULTIPLEX_HTML));
  }, []);

  return (
    <div
      ref={containerRef}
      className="not-prose my-6 flex h-[400px] w-full max-w-full items-center justify-center overflow-hidden sm:my-8"
      aria-label="Advertisement"
    />
  );
}

"use client";

import { useEffect } from "react";

export function BlogInArticleAd() {
  useEffect(() => {
    try {
      const w = window as Window & { adsbygoogle?: Record<string, unknown>[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // Ad blockers can prevent AdSense initialization.
    }
  }, []);

  return (
    <div className="not-prose my-6 sm:my-8" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-7227917768990151"
        data-ad-slot="2855047986"
      />
    </div>
  );
}

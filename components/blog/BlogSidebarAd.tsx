"use client";

import { useEffect } from "react";

export function BlogSidebarAd() {
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
    <div className="blog-sidebar-ad" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7227917768990151"
        data-ad-slot="1030018355"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

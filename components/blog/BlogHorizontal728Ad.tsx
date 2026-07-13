"use client";

import { useEffect } from "react";

export function BlogHorizontal728Ad() {
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
    <div className="not-prose mb-6 flex justify-center overflow-x-auto sm:mb-8" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "728px", height: "90px" }}
        data-ad-client="ca-pub-7227917768990151"
        data-ad-slot="9097324023"
      />
    </div>
  );
}

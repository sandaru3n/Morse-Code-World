"use client";

import { useEffect } from "react";

const ADSENSE_CLIENT = "ca-pub-7227917768990151";
const IN_ARTICLE_SLOT = "2855047986";

type AdsWindow = Window & {
  adsbygoogle?: unknown[];
};

function pushAd() {
  try {
    const adsWindow = window as AdsWindow;
    adsWindow.adsbygoogle = adsWindow.adsbygoogle || [];
    adsWindow.adsbygoogle.push({});
  } catch {
    // Ad blockers or consent tooling can prevent AdSense initialization.
  }
}

/** In-article fluid ad unit — place inside blog prose content. */
export function BlogInArticleAd({ className = "" }: { className?: string }) {
  useEffect(() => {
    pushAd();
  }, []);

  return (
    <aside
      className={`blog-in-article-ad not-prose my-8 sm:my-10 ${className}`}
      aria-label="Advertisement"
      data-in-article-ad
    >
      <div className="mx-auto w-full overflow-hidden border border-slate-200/80 bg-white px-3 py-4 text-center dark:border-white/10 dark:bg-surface-container-low sm:px-4">
        <div className="mb-3 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          Advertisement
        </div>
        <ins
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={IN_ARTICLE_SLOT}
        />
      </div>
    </aside>
  );
}

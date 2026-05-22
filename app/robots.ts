import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        /** Allow all crawlers full access to indexable pages */
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // API routes — not indexable content
          "/_next/",      // Build assets — not indexable
          "/favicon/",    // Static assets — not indexable
        ]
      },
      {
        /** Explicitly allow Bingbot (important for Bing/Copilot eligibility) */
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/favicon/"]
      },
      {
        /** Allow Copilot crawler for grounding/citation eligibility */
        userAgent: "GPTBot",
        allow: "/"
      },
      {
        /** Allow Copilot / Microsoft AI crawlers */
        userAgent: "ChatGPT-User",
        allow: "/"
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml")
  };
}

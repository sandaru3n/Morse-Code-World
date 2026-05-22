import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** AI and search crawlers allowed for indexing + Bing Copilot grounding */
const AI_AND_SEARCH_BOTS = [
  "Bingbot",
  "msnbot",
  "BingPreview",
  "MicrosoftPreview",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Googlebot",
  "Google-Extended"
] as const;

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/", "/_next/", "/favicon/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow
      },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
        disallow
      }))
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/").replace(/\/$/, "")
  };
}

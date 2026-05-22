import { SITE_JSON_LD_GRAPH } from "@/lib/seo/schemas";

/** Site-wide JSON-LD @graph for Google AI Overviews, Bing Copilot, and rich results */
export function GlobalAiSeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD_GRAPH) }}
    />
  );
}

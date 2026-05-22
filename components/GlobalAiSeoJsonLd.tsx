import {
  SITE_ORGANIZATION_SCHEMA,
  SITE_TOOLS_ITEM_LIST_SCHEMA,
  SITE_WEBSITE_SCHEMA
} from "@/lib/seo/schemas";

/** Site-wide JSON-LD for Bing, Copilot, and other AI/search experiences */
export function GlobalAiSeoJsonLd() {
  const graphs = [SITE_ORGANIZATION_SCHEMA, SITE_WEBSITE_SCHEMA, SITE_TOOLS_ITEM_LIST_SCHEMA];

  return (
    <>
      {graphs.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

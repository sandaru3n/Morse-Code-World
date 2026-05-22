import { absoluteUrl, SITE_DOMAIN, SITE_NAME } from "@/lib/site";

const SITE_URL = `https://${SITE_DOMAIN}`;

const LANGUAGE_ROUTES: { code: string; name: string; path: string }[] = [
  { code: "en", name: "English", path: "/" },
  { code: "es", name: "Spanish", path: "/es" },
  { code: "ko", name: "Korean", path: "/ko" },
  { code: "zh", name: "Chinese", path: "/zh" },
  { code: "pt", name: "Portuguese", path: "/pt" },
  { code: "ar", name: "Arabic", path: "/ar" },
  { code: "ja", name: "Japanese", path: "/ja" },
  { code: "ru", name: "Russian", path: "/ru" },
  { code: "de", name: "German", path: "/de" },
  { code: "cs", name: "Czech", path: "/cs" },
  { code: "fr", name: "French", path: "/fr" },
  { code: "it", name: "Italian", path: "/it" },
  { code: "tr", name: "Turkish", path: "/tr" },
  { code: "pl", name: "Polish", path: "/pl" },
  { code: "nl", name: "Dutch", path: "/nl" },
  { code: "hi", name: "Hindi", path: "/hi" },
  { code: "id", name: "Indonesian", path: "/id" },
  { code: "vi", name: "Vietnamese", path: "/vi" },
  { code: "th", name: "Thai", path: "/th" },
  { code: "uk", name: "Ukrainian", path: "/uk" }
];

/** Organization — Google Knowledge Graph + AI Overview entity signals */
export const SITE_ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Morse Code World",
  alternateName: ["Morse Code Translator", SITE_NAME],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon/android-chrome-512x512.png`,
    width: 512,
    height: 512
  },
  image: `${SITE_URL}/favicon/android-chrome-512x512.png`,
  description:
    "Morse Code World (morsecodeworld.org) provides free browser-based Morse code tools: text translator, audio decoder, and picture translator in 20 languages.",
  email: "contact@morsecodeworld.org",
  areaServed: "Worldwide",
  knowsAbout: [
    "International Morse Code",
    "Morse code translation",
    "Amateur radio CW",
    "Morse code decoding",
    "Morse code encoding"
  ]
};

/** WebSite — Google sitelinks + AI site understanding */
export const SITE_WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Morse Code World — Morse Code Translator",
  alternateName: SITE_NAME,
  url: SITE_URL,
  description:
    "Free online Morse code translator at morsecodeworld.org. Convert text to Morse and Morse to text in your browser. Includes audio decoder and image translator.",
  inLanguage: LANGUAGE_ROUTES.map((l) => l.code),
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: { "@type": "Thing", name: "International Morse Code" },
  isAccessibleForFree: true
};

/** Tools index — Google AI / SGE list of site capabilities */
export const SITE_TOOLS_ITEM_LIST_SCHEMA = {
  "@type": "ItemList",
  "@id": `${SITE_URL}/#tools`,
  name: "Morse Code World tools",
  description: "Free Morse code utilities on morsecodeworld.org",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Morse Code Translator (text)",
      url: absoluteUrl("/"),
      description: "Encode and decode International Morse code to plain text in the browser."
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Audio Morse Code Decoder",
      url: absoluteUrl("/audio-morse-code-decoder"),
      description: "Upload or record audio and decode Morse code from sound."
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Morse Code Picture Translator",
      url: absoluteUrl("/morse-code-picture-translator"),
      description: "Decode Morse code from images using AI vision."
    }
  ]
};

/** Language versions — helps Google AI map hreflang pages */
export const SITE_LANGUAGES_ITEM_LIST_SCHEMA = {
  "@type": "ItemList",
  "@id": `${SITE_URL}/#languages`,
  name: "Morse Code World language versions",
  numberOfItems: LANGUAGE_ROUTES.length,
  itemListElement: LANGUAGE_ROUTES.map((lang, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${lang.name} Morse code translator`,
    url: absoluteUrl(lang.path)
  }))
};

/**
 * Single @graph block — preferred by Google for linked entities.
 * Used site-wide in layout.
 */
export const SITE_JSON_LD_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    SITE_ORGANIZATION_SCHEMA,
    SITE_WEBSITE_SCHEMA,
    SITE_TOOLS_ITEM_LIST_SCHEMA,
    SITE_LANGUAGES_ITEM_LIST_SCHEMA
  ]
};

export function createWebAppSchema(options: {
  name: string;
  url: string;
  description: string;
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "SoftwareApplication"],
    name: options.name,
    url: options.url,
    description: options.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires a modern web browser with JavaScript.",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    ...(options.inLanguage ? { inLanguage: options.inLanguage } : {}),
    provider: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    featureList: [
      "Morse code to text decoding",
      "Text to Morse code encoding",
      "Adjustable speed and tone",
      "Works on mobile and desktop browsers",
      "No account required"
    ]
  };
}

/** WebPage — Google AI Overview / snippet context */
export function createWebPageSchema(options: {
  name: string;
  url: string;
  description: string;
  speakableSelectors?: string[];
}) {
  const page: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    url: options.url,
    description: options.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@type": "Thing", name: "International Morse Code" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    isAccessibleForFree: true
  };

  if (options.speakableSelectors?.length) {
    page.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: options.speakableSelectors
    };
  }

  return page;
}

/** Speakable — Google Assistant + AI citation hints */
export function createSpeakableSchema(cssSelectors: string[]) {
  return createWebPageSchema({
    name: "Morse Code World",
    url: SITE_URL,
    description: "Free Morse code translator and tools at morsecodeworld.org",
    speakableSelectors: cssSelectors
  });
}

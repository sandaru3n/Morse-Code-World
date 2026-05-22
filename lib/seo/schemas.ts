import { absoluteUrl, SITE_DOMAIN, SITE_NAME } from "@/lib/site";

const SITE_URL = `https://${SITE_DOMAIN}`;

/** Organization — consistent entity for Bing/Copilot grounding */
export const SITE_ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
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

/** WebSite — site-level graph for search and AI experiences */
export const SITE_WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Morse Code World — Morse Code Translator",
  alternateName: SITE_NAME,
  url: SITE_URL,
  description:
    "Free online Morse code translator at morsecodeworld.org. Convert text to Morse and Morse to text in your browser. Includes audio decoder and image translator.",
  inLanguage: [
    "en", "es", "ko", "zh", "pt", "ar", "ja", "ru", "de", "cs",
    "fr", "it", "tr", "pl", "nl", "hi", "id", "vi", "th", "uk"
  ],
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: { "@type": "Thing", name: "International Morse Code" }
};

/** Tools index — helps AI list what this site offers */
export const SITE_TOOLS_ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
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

export function createWebAppSchema(options: {
  name: string;
  url: string;
  description: string;
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: options.name,
    url: options.url,
    description: options.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires a modern web browser with JavaScript.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    ...(options.inLanguage ? { inLanguage: options.inLanguage } : {}),
    provider: { "@id": `${SITE_URL}/#organization` },
    featureList: [
      "Morse code to text decoding",
      "Text to Morse code encoding",
      "Adjustable speed and tone",
      "Works on mobile and desktop browsers",
      "No account required"
    ]
  };
}

/** Speakable — hints for voice/AI citation of on-page summary */
export function createSpeakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors
    }
  };
}

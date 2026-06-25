import type { HomeLocale } from "@/lib/i18n/home";

/**
 * Locales with full editorial guides — safe for search indexing.
 * Matches top traffic countries: TH, VN, US (en), RU, IT, KR, ID, BR (pt), etc.
 */
export const INDEXED_EDITORIAL_LOCALES = [
  "en",
  "es",
  "fr",
  "pt",
  "ja",
  "th",
  "vi",
  "ru",
  "it",
  "ko",
  "id"
] as const;

export type IndexedEditorialLocale = (typeof INDEXED_EDITORIAL_LOCALES)[number];

export function hasFullEditorial(locale: HomeLocale): locale is IndexedEditorialLocale {
  return (INDEXED_EDITORIAL_LOCALES as readonly string[]).includes(locale);
}

export function shouldIndexLocale(locale: HomeLocale): boolean {
  return hasFullEditorial(locale);
}

/** Non-English home pages and localized tool paths in sitemap. */
export const INDEXED_NON_EN_LOCALES: HomeLocale[] = [
  "es",
  "fr",
  "pt",
  "ja",
  "th",
  "vi",
  "ru",
  "it",
  "ko",
  "id"
];

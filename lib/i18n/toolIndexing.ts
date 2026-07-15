import type { HomeLocale } from "@/lib/i18n/home";
import { TOOL_SLUGS, type ToolSlug } from "@/lib/i18n/routes";

/**
 * Single source of truth for which locales have REAL (non-English-fallback)
 * translations of each tool page. Kept as plain string arrays (no large copy
 * objects) so this module stays cheap to import from edge middleware.
 *
 * These lists drive three things that MUST agree, per Google/Bing i18n rules:
 *   1. hreflang / canonical (lib/seo/toolAlternates.ts)
 *   2. the sitemap (app/sitemap.ts)
 *   3. the noindex header applied in middleware (proxy.ts)
 *
 * A fully-translated tool page is quality localized content and is indexable
 * even when that locale's editorial/home pages are not yet complete — which is
 * why tool indexing is decided here rather than by shouldIndexLocale() alone.
 */
export const TOOL_TRANSLATED_LOCALES: Record<ToolSlug, readonly HomeLocale[]> = {
  audio: [],
  picture: [],
  vocalRemover: ["es", "pt", "ru", "ja", "ko", "fr", "it", "vi", "th", "id"],
  mp3Cutter: ["es", "pt", "de", "ru", "ja", "ko", "zh", "tr", "ar", "id", "th"]
};

export function isToolTranslated(tool: ToolSlug, locale: HomeLocale): boolean {
  if (locale === "en") return true;
  return TOOL_TRANSLATED_LOCALES[tool].includes(locale);
}

/**
 * If `pathname` is a localized tool page (e.g. /de/mp3-cutter) that has a full
 * translation, returns true — signalling it should stay indexable even though
 * its locale is outside the editorial-indexed set. Returns false otherwise (the
 * caller then falls back to the normal per-locale indexing rule).
 */
export function isIndexableTranslatedToolPath(pathname: string, locale: HomeLocale): boolean {
  if (locale === "en") return false; // English handled by the normal rule (always indexable)
  const suffix = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "");
  for (const tool of Object.keys(TOOL_SLUGS) as ToolSlug[]) {
    if (suffix === TOOL_SLUGS[tool] && TOOL_TRANSLATED_LOCALES[tool].includes(locale)) {
      return true;
    }
  }
  return false;
}

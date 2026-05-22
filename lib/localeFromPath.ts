import type { HomeLocale } from "@/lib/i18n/home";

/** Two-letter locale codes used as top-level path segments. */
export const LOCALE_PATH_SEGMENTS = new Set<HomeLocale>([
  "es", "ko", "zh", "pt", "ar", "ja", "ru", "de", "cs",
  "fr", "it", "tr", "pl", "nl", "hi", "id", "vi", "th", "uk"
]);

export function localeFromPathname(pathname: string): HomeLocale {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && LOCALE_PATH_SEGMENTS.has(segment as HomeLocale)) {
    return segment as HomeLocale;
  }
  return "en";
}

export function htmlDirForLocale(locale: HomeLocale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

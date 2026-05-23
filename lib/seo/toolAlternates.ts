import type { Metadata } from "next";
import type { HomeLocale } from "@/lib/i18n/home";
import { homePath, toolPath, type ToolSlug } from "@/lib/i18n/routes";
import { LOCALE_PATH_SEGMENTS } from "@/lib/localeFromPath";

const OG_LOCALE: Record<HomeLocale, string> = {
  en: "en_US",
  es: "es_ES",
  ko: "ko_KR",
  zh: "zh_TW",
  pt: "pt_BR",
  ar: "ar_SA",
  ja: "ja_JP",
  ru: "ru_RU",
  de: "de_DE",
  cs: "cs_CZ",
  fr: "fr_FR",
  it: "it_IT",
  tr: "tr_TR",
  pl: "pl_PL",
  nl: "nl_NL",
  hi: "hi_IN",
  id: "id_ID",
  vi: "vi_VN",
  th: "th_TH",
  uk: "uk_UA"
};

export function buildToolAlternates(locale: HomeLocale, tool: ToolSlug) {
  const languages: Record<string, string> = {
    "x-default": toolPath("en", tool)
  };

  languages.en = toolPath("en", tool);
  for (const code of LOCALE_PATH_SEGMENTS) {
    languages[code] = toolPath(code, tool);
  }

  return {
    canonical: toolPath(locale, tool),
    languages
  };
}

export function buildToolOpenGraph(
  locale: HomeLocale,
  tool: ToolSlug,
  title: string,
  description: string
): Metadata["openGraph"] {
  const alternateLocale = (Object.keys(OG_LOCALE) as HomeLocale[])
    .filter((code) => code !== locale)
    .map((code) => OG_LOCALE[code]);

  return {
    type: "website",
    url: toolPath(locale, tool),
    title,
    description,
    locale: OG_LOCALE[locale],
    alternateLocale
  };
}

export { homePath, OG_LOCALE };

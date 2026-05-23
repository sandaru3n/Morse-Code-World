import type { HomeLocale } from "@/lib/i18n/home";
import { LOCALE_PATH_SEGMENTS } from "@/lib/localeFromPath";

export const TOOL_SLUGS = {
  audio: "/audio-morse-code-decoder",
  picture: "/morse-code-picture-translator"
} as const;

export type ToolSlug = keyof typeof TOOL_SLUGS;

export const NON_EN_LOCALES = [...LOCALE_PATH_SEGMENTS] as HomeLocale[];

/** Home translator path for a locale (English = /). */
export function homePath(locale: HomeLocale): string {
  return locale === "en" ? "/" : `/${locale}`;
}

/** Prefix a tool path with locale (/fr/audio-morse-code-decoder). English uses unprefixed paths. */
export function toolPath(locale: HomeLocale, tool: ToolSlug): string {
  const slug = TOOL_SLUGS[tool];
  return locale === "en" ? slug : `/${locale}${slug}`;
}

export function audioDecoderPath(locale: HomeLocale): string {
  return toolPath(locale, "audio");
}

export function pictureTranslatorPath(locale: HomeLocale): string {
  return toolPath(locale, "picture");
}

export function isNonEnLocale(lang: string): lang is HomeLocale {
  return LOCALE_PATH_SEGMENTS.has(lang as HomeLocale);
}

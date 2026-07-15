import type { Metadata } from "next";
import type { HomeLocale } from "@/lib/i18n/home";
import { getAudioPageCopy } from "@/lib/i18n/toolPages/audio";
import { getPicturePageCopy } from "@/lib/i18n/toolPages/picture";
import { getVocalRemoverPageCopy } from "@/lib/i18n/toolPages/vocalRemover";
import { getMp3CutterPageCopy } from "@/lib/i18n/toolPages/mp3Cutter";
import { TOOL_TRANSLATED_LOCALES, isToolTranslated } from "@/lib/i18n/toolIndexing";
import { SITE_NAME } from "@/lib/site";
import { buildToolAlternates, buildToolOpenGraph } from "@/lib/seo/toolAlternates";

export function buildAudioMetadata(locale: HomeLocale): Metadata {
  const copy = getAudioPageCopy(locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: buildToolAlternates(locale, "audio"),
    keywords: [...copy.keywords, SITE_NAME],
    openGraph: buildToolOpenGraph(locale, "audio", copy.title, copy.description),
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description
    },
    other: { "Content-Language": locale }
  };
}

export function buildPictureMetadata(locale: HomeLocale): Metadata {
  const copy = getPicturePageCopy(locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: buildToolAlternates(locale, "picture"),
    keywords: [...copy.keywords, SITE_NAME],
    openGraph: buildToolOpenGraph(locale, "picture", copy.title, copy.description),
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description
    },
    other: { "Content-Language": locale }
  };
}

export function buildVocalRemoverMetadata(locale: HomeLocale): Metadata {
  const copy = getVocalRemoverPageCopy(locale);
  const isTranslated = isToolTranslated("vocalRemover", locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: buildToolAlternates(locale, "vocalRemover", TOOL_TRANSLATED_LOCALES.vocalRemover),
    keywords: [...copy.keywords, SITE_NAME],
    openGraph: buildToolOpenGraph(locale, "vocalRemover", copy.title, copy.description),
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description
    },
    ...(isTranslated ? {} : { robots: { index: false, follow: true } }),
    other: { "Content-Language": isTranslated ? locale : "en" }
  };
}

export function buildMp3CutterMetadata(locale: HomeLocale): Metadata {
  const copy = getMp3CutterPageCopy(locale);
  const isTranslated = isToolTranslated("mp3Cutter", locale);
  return {
    title: copy.title,
    description: copy.description,
    alternates: buildToolAlternates(locale, "mp3Cutter", TOOL_TRANSLATED_LOCALES.mp3Cutter),
    keywords: [...copy.keywords, SITE_NAME],
    openGraph: buildToolOpenGraph(locale, "mp3Cutter", copy.title, copy.description),
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description
    },
    // Untranslated locale URLs serve English fallback copy — keep them out of
    // the index (their canonical also points at /mp3-cutter) per i18n guidelines.
    ...(isTranslated ? {} : { robots: { index: false, follow: true } }),
    other: { "Content-Language": isTranslated ? locale : "en" }
  };
}

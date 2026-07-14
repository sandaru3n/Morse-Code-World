import type { Metadata } from "next";
import type { HomeLocale } from "@/lib/i18n/home";
import { getAudioPageCopy } from "@/lib/i18n/toolPages/audio";
import { getPicturePageCopy } from "@/lib/i18n/toolPages/picture";
import { getVocalRemoverPageCopy } from "@/lib/i18n/toolPages/vocalRemover";
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
  return {
    title: copy.title,
    description: copy.description,
    alternates: buildToolAlternates(locale, "vocalRemover"),
    keywords: [...copy.keywords, SITE_NAME],
    openGraph: buildToolOpenGraph(locale, "vocalRemover", copy.title, copy.description),
    twitter: {
      card: "summary",
      title: copy.title,
      description: copy.description
    },
    other: { "Content-Language": locale }
  };
}

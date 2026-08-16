import type { MetadataRoute } from "next";
import { audioDecoderPath, mp3CutterPath, pictureTranslatorPath, vocalRemoverPath } from "@/lib/i18n/routes";
import { INDEXED_NON_EN_LOCALES } from "@/lib/i18n/localeIndexing";
import { TOOL_TRANSLATED_LOCALES } from "@/lib/i18n/toolIndexing";
import { absoluteUrl } from "@/lib/site";
import { getAllSitemapPosts } from "@/lib/blog";

/**
 * Locales with real (non-English-fallback) translated tool copy. Only submit a
 * localized tool URL to search engines when it actually has translated
 * content — otherwise we'd be telling Google a French/Italian/etc URL is a
 * language variant when it's really just English text.
 *
 * Some translated tool locales (e.g. de/zh/ar/tr for the MP3 cutter) are NOT in
 * INDEXED_NON_EN_LOCALES, so union them in below to still surface those pages.
 */
const VOCAL_REMOVER_TRANSLATED_LOCALES = TOOL_TRANSLATED_LOCALES.vocalRemover;
const MP3_CUTTER_TRANSLATED_LOCALES = TOOL_TRANSLATED_LOCALES.mp3Cutter;
const TOOL_ONLY_LOCALES = Array.from(
  new Set([...VOCAL_REMOVER_TRANSLATED_LOCALES, ...MP3_CUTTER_TRANSLATED_LOCALES])
).filter((lang) => !INDEXED_NON_EN_LOCALES.includes(lang));

/** Update when editorial content on a locale home page changes. */
const LOCALE_HOME_DATES: Record<string, string> = {
  es: "2026-06-15",
  fr: "2026-06-15",
  pt: "2026-06-15",
  ja: "2026-06-15",
  th: "2026-06-15",
  vi: "2026-06-15",
  ru: "2026-06-15",
  it: "2026-06-15",
  ko: "2026-06-15",
  id: "2026-06-15"
};

const DATES = {
  home: "2026-06-15",
  about: "2026-04-15",
  pictureTool: "2026-04-15",
  audioTool: "2026-04-15",
  vocalRemoverTool: "2026-07-14",
  mp3CutterTool: "2026-07-15"
} as const;

const localizedHomeEntries = (): MetadataRoute.Sitemap =>
  INDEXED_NON_EN_LOCALES.map((lang) => ({
    url: absoluteUrl(`/${lang}`),
    lastModified: LOCALE_HOME_DATES[lang] ?? DATES.home,
    changeFrequency: "weekly" as const,
    priority: lang === "th" || lang === "vi" || lang === "id" || lang === "ko" ? 0.92 : 0.9
  }));

const localizedToolEntries = (): MetadataRoute.Sitemap => {
  // Editorial-indexed locales get the audio + picture tools; every locale in
  // this union may additionally get the vocal remover / MP3 cutter when those
  // pages are fully translated (which is decided per-tool below).
  const toolLocales = Array.from(new Set([...INDEXED_NON_EN_LOCALES, ...TOOL_ONLY_LOCALES]));

  return toolLocales.flatMap((lang) => {
    const entries: MetadataRoute.Sitemap = [];

    if (INDEXED_NON_EN_LOCALES.includes(lang)) {
      entries.push(
        {
          url: absoluteUrl(audioDecoderPath(lang)),
          lastModified: DATES.audioTool,
          changeFrequency: "monthly" as const,
          priority: 0.7
        },
        {
          url: absoluteUrl(pictureTranslatorPath(lang)),
          lastModified: DATES.pictureTool,
          changeFrequency: "monthly" as const,
          priority: 0.7
        }
      );
    }

    if ((VOCAL_REMOVER_TRANSLATED_LOCALES as readonly string[]).includes(lang)) {
      entries.push({
        url: absoluteUrl(vocalRemoverPath(lang)),
        lastModified: DATES.vocalRemoverTool,
        changeFrequency: "monthly" as const,
        priority: 0.7
      });
    }

    if ((MP3_CUTTER_TRANSLATED_LOCALES as readonly string[]).includes(lang)) {
      entries.push({
        url: absoluteUrl(mp3CutterPath(lang)),
        lastModified: DATES.mp3CutterTool,
        changeFrequency: "monthly" as const,
        priority: 0.7
      });
    }

    return entries;
  });
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: DATES.home,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/about"),
      lastModified: DATES.about,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: DATES.about,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: DATES.about,
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: DATES.about,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: DATES.home,
      changeFrequency: "weekly",
      priority: 0.7
    },
    ...getAllSitemapPosts().map(({ slug, date }) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified: date,
      changeFrequency: "monthly" as const,
      priority: 0.65
    })),
    ...localizedHomeEntries(),
    {
      url: absoluteUrl("/morse-code-picture-translator"),
      lastModified: DATES.pictureTool,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: absoluteUrl("/audio-morse-code-decoder"),
      lastModified: DATES.audioTool,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: absoluteUrl("/vocal-remover"),
      lastModified: DATES.vocalRemoverTool,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: absoluteUrl("/mp3-cutter"),
      lastModified: DATES.mp3CutterTool,
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: absoluteUrl("/llms.txt"),
      lastModified: DATES.home,
      changeFrequency: "monthly",
      priority: 0.5
    },
    ...localizedToolEntries()
  ];
}

import type { MetadataRoute } from "next";
import { audioDecoderPath, pictureTranslatorPath, vocalRemoverPath } from "@/lib/i18n/routes";
import { INDEXED_NON_EN_LOCALES } from "@/lib/i18n/localeIndexing";
import { absoluteUrl } from "@/lib/site";
import { getAllSlugs } from "@/lib/blog";

/**
 * Locales with real (non-English-fallback) Vocal Remover copy. Only submit a
 * localized /vocal-remover URL to search engines when it actually has
 * translated content — otherwise we'd be telling Google a French/Italian/etc
 * URL is a language variant when it's really just English text.
 */
const VOCAL_REMOVER_TRANSLATED_LOCALES = ["es", "pt", "ru", "ja", "ko", "fr", "it", "vi", "th", "id"] as const;

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
  vocalRemoverTool: "2026-07-14"
} as const;

const localizedHomeEntries = (): MetadataRoute.Sitemap =>
  INDEXED_NON_EN_LOCALES.map((lang) => ({
    url: absoluteUrl(`/${lang}`),
    lastModified: LOCALE_HOME_DATES[lang] ?? DATES.home,
    changeFrequency: "weekly" as const,
    priority: lang === "th" || lang === "vi" || lang === "id" || lang === "ko" ? 0.92 : 0.9
  }));

const localizedToolEntries = (): MetadataRoute.Sitemap =>
  INDEXED_NON_EN_LOCALES.flatMap((lang) => {
    const entries: MetadataRoute.Sitemap = [
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
    ];

    if ((VOCAL_REMOVER_TRANSLATED_LOCALES as readonly string[]).includes(lang)) {
      entries.push({
        url: absoluteUrl(vocalRemoverPath(lang)),
        lastModified: DATES.vocalRemoverTool,
        changeFrequency: "monthly" as const,
        priority: 0.7
      });
    }

    return entries;
  });

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
    ...getAllSlugs().map((slug) => ({
      url: absoluteUrl(`/blog/${slug}`),
      lastModified: DATES.home,
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
      url: absoluteUrl("/llms.txt"),
      lastModified: DATES.home,
      changeFrequency: "monthly",
      priority: 0.5
    },
    ...localizedToolEntries()
  ];
}

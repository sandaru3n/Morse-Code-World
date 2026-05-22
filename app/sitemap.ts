import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Actual last-significant-modification dates per URL.
 *  Update these when content on the page genuinely changes.
 *  Never use new Date() — inaccurate freshness signals confuse Bing/Copilot. */
const DATES = {
  home:        "2026-05-22",
  about:       "2026-04-15",
  es:          "2026-05-22",
  ko:          "2026-05-22",
  zh:          "2026-05-22",
  pt:          "2026-05-22",
  ar:          "2026-05-22",
  ja:          "2026-05-22",
  ru:          "2026-05-22",
  de:          "2026-05-22",
  cs:          "2026-05-22",
  pictureTool: "2026-04-15",
  audioTool:   "2026-04-15",
  fr:          "2026-05-22",
  it:          "2026-05-22",
  tr:          "2026-05-22",
  pl:          "2026-05-22",
  nl:          "2026-05-22",
  hi:          "2026-05-22",
  id:          "2026-05-22",
  vi:          "2026-05-22",
  th:          "2026-05-22",
  uk:          "2026-05-22",
} as const;

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
      url: absoluteUrl("/es"),
      lastModified: DATES.es,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/ko"),
      lastModified: DATES.ko,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/zh"),
      lastModified: DATES.zh,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/pt"),
      lastModified: DATES.pt,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/ar"),
      lastModified: DATES.ar,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/ja"),
      lastModified: DATES.ja,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/ru"),
      lastModified: DATES.ru,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/de"),
      lastModified: DATES.de,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/cs"),
      lastModified: DATES.cs,
      changeFrequency: "weekly",
      priority: 0.9
    },
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
      url: absoluteUrl("/fr"),
      lastModified: DATES.fr,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/it"),
      lastModified: DATES.it,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/tr"),
      lastModified: DATES.tr,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/pl"),
      lastModified: DATES.pl,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/nl"),
      lastModified: DATES.nl,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/hi"),
      lastModified: DATES.hi,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/id"),
      lastModified: DATES.id,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/vi"),
      lastModified: DATES.vi,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/th"),
      lastModified: DATES.th,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/uk"),
      lastModified: DATES.uk,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/llms.txt"),
      lastModified: DATES.home,
      changeFrequency: "monthly",
      priority: 0.5
    }
  ];
}

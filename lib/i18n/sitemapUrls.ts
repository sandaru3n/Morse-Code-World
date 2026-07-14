import { absoluteUrl } from "@/lib/site";
import {
  audioDecoderPath,
  homePath,
  NON_EN_LOCALES,
  pictureTranslatorPath,
  vocalRemoverPath
} from "@/lib/i18n/routes";

const HOME_LANGS = ["en", ...NON_EN_LOCALES] as const;

/** All indexable paths for sitemap and IndexNow. */
export function getAllIndexablePaths(): string[] {
  const paths = [
    "/",
    "/about",
    "/morse-code-picture-translator",
    "/audio-morse-code-decoder",
    "/vocal-remover",
    "/llms.txt",
    ...NON_EN_LOCALES.flatMap((lang) => [
      homePath(lang),
      audioDecoderPath(lang),
      pictureTranslatorPath(lang),
      vocalRemoverPath(lang)
    ])
  ];

  return [...new Set(paths)];
}

export function getAllIndexableUrls(): string[] {
  return getAllIndexablePaths().map(absoluteUrl);
}

export { HOME_LANGS, NON_EN_LOCALES };

import type { IndexedEditorialLocale } from "@/lib/i18n/localeIndexing";

export type SeoArticleSection = {
  heading?: string;
  paragraphs: string[];
};

export type SeoArticleContent = {
  heading: string;
  sections: SeoArticleSection[];
  aboutLinkLabel: string;
};

export type SeoArticleLocale = IndexedEditorialLocale;

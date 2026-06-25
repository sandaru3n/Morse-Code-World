import type { HomeLocale } from "@/lib/i18n/home";
import { hasFullEditorial, type IndexedEditorialLocale } from "@/lib/i18n/localeIndexing";
import en from "./en";
import es from "./es";
import fr from "./fr";
import id from "./id";
import it from "./it";
import ja from "./ja";
import ko from "./ko";
import pt from "./pt";
import ru from "./ru";
import th from "./th";
import vi from "./vi";
import type { SeoArticleContent } from "./types";

const ARTICLES: Record<IndexedEditorialLocale, SeoArticleContent> = {
  en,
  es,
  fr,
  pt,
  ja,
  th,
  vi,
  ru,
  it,
  ko,
  id
};

export function getSeoArticle(locale: HomeLocale): SeoArticleContent | null {
  if (!hasFullEditorial(locale)) return null;
  return ARTICLES[locale];
}

type FallbackCopy = {
  title: string;
  body: string;
  indexedLinksLabel: string;
};

/** Locales with UI only — no full guide yet (noindex). */
export const EDITORIAL_FALLBACK: Partial<Record<HomeLocale, FallbackCopy>> = {
  zh: {
    title: "中文介面",
    body: "翻譯工具支援中文操作；完整說明文章請見其他已收录語言版本（英文、泰文、越南文等）。",
    indexedLinksLabel: "完整指南："
  },
  ar: {
    title: "واجهة عربية",
    body: "المترجم متاح بالعربية؛ الدليل التفصيلي متوفر بلغات أخرى مفهرسة مثل الإنجليزية والتايلاندية والفيتنامية.",
    indexedLinksLabel: "أدلة كاملة:"
  },
  de: {
    title: "Deutsche Oberfläche",
    body: "Das Tool ist auf Deutsch nutzbar; ausführliche Ratgeber gibt es auf den indexierten Sprachseiten (z. B. Englisch, Thai, Vietnamesisch).",
    indexedLinksLabel: "Vollständige Guides:"
  },
  cs: {
    title: "České rozhraní",
    body: "Překladač je v češtině; podrobné články jsou na indexovaných jazykových verzích.",
    indexedLinksLabel: "Úplné průvodce:"
  },
  tr: {
    title: "Türkçe arayüz",
    body: "Çevirici Türkçe kullanılabilir; ayrıntılı rehberler dizine eklenmiş dil sayfalarında yer alır.",
    indexedLinksLabel: "Tam rehberler:"
  },
  pl: {
    title: "Interfejs po polsku",
    body: "Tłumacz działa po polsku; pełne artykuły są na zindeksowanych wersjach językowych.",
    indexedLinksLabel: "Pełne przewodniki:"
  },
  nl: {
    title: "Nederlandse interface",
    body: "De vertaler is in het Nederlands; uitgebreide gidsen staan op geïndexeerde taalpagina's.",
    indexedLinksLabel: "Volledige gidsen:"
  },
  hi: {
    title: "हिंदी इंटरफ़ेस",
    body: "अनुवादक हिंदी में उपलब्ध है; विस्तृत लेख अनुक्रमित भाषा पृष्ठों पर हैं।",
    indexedLinksLabel: "पूर्ण गाइड:"
  },
  uk: {
    title: "Український інтерфейс",
    body: "Перекладач доступний українською; детальні статті — на проіндексованих мовних версіях.",
    indexedLinksLabel: "Повні посібники:"
  }
};

export const INDEXED_GUIDE_LINKS: { href: string; hrefLang: string; label: string }[] = [
  { href: "/", hrefLang: "en", label: "English" },
  { href: "/th", hrefLang: "th", label: "ไทย" },
  { href: "/vi", hrefLang: "vi", label: "Tiếng Việt" },
  { href: "/id", hrefLang: "id", label: "Indonesia" },
  { href: "/ko", hrefLang: "ko", label: "한국어" },
  { href: "/ru", hrefLang: "ru", label: "Русский" },
  { href: "/it", hrefLang: "it", label: "Italiano" },
  { href: "/pt", hrefLang: "pt", label: "Português" },
  { href: "/es", hrefLang: "es", label: "Español" },
  { href: "/ja", hrefLang: "ja", label: "日本語" },
  { href: "/fr", hrefLang: "fr", label: "Français" }
];

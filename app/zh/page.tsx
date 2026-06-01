import type { Metadata } from "next";
import Link from "next/link";
import { SeoArticle } from "@/components/SeoArticle";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "摩斯電碼翻譯器 - 線上摩斯電碼轉文字";

const PAGE_DESCRIPTION = "使用摩斯電碼翻譯器，快速將摩斯電碼轉成文字，也可把文字轉為摩斯電碼。免費、即時、跨裝置。";

const WEB_APP_SCHEMA_ZH = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "摩斯電碼翻譯器",
  url: "https://morsecodeworld.org/zh",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "zh-Hant",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
};

const FAQ_SCHEMA_ZH = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "zh-Hant",
  mainEntity: [
    {
      "@type": "Question",
      name: "摩斯電碼翻譯器是免費的嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "是，完全免費，無需註冊即可使用。"
      }
    },
    {
      "@type": "Question",
      name: "可以同時支援文字轉摩斯與摩斯轉文字嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可以，兩種模式都支援。"
      }
    },
    {
      "@type": "Question",
      name: "手機上也能使用嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可以，支援手機與桌面瀏覽器。"
      }
    }
  ]
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Morse Code Translator",
  url: "https://morsecodeworld.org/",
  logo: "https://morsecodeworld.org/favicon/android-chrome-512x512.png",
  image: "https://morsecodeworld.org/favicon/android-chrome-512x512.png",
  email: "contact@morsecodeworld.org"
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/zh",
    languages: {
      en: "/", es: "/es", ko: "/ko", zh: "/zh", pt: "/pt", ar: "/ar",
      ja: "/ja", ru: "/ru", de: "/de", cs: "/cs", fr: "/fr", it: "/it",
      tr: "/tr", pl: "/pl", nl: "/nl", hi: "/hi", id: "/id", vi: "/vi",
      th: "/th", uk: "/uk", "x-default": "/"
    }
  },
  keywords: ["摩斯電碼翻譯器", "摩斯電碼轉文字", "文字轉摩斯電碼", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/zh",
    title: "摩斯電碼翻譯器",
    locale: "zh_TW",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE", "cs_CZ", "fr_FR", "it_IT", "tr_TR", "pl_PL", "nl_NL", "hi_IN", "id_ID", "vi_VN", "th_TH", "uk_UA"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "摩斯電碼翻譯器",
    description: PAGE_DESCRIPTION
  },
  other: { "Content-Language": "zh" }
};

const BREADCRUMB_SCHEMA_ZH = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "摩斯電碼翻譯器", item: "https://morsecodeworld.org/zh" }
  ]
};

export default function ChineseHomePage() {
  const faqItems = [
    { q: "摩斯電碼翻譯器是免費的嗎？", a: "是，免費且可直接在瀏覽器使用。" },
    { q: "支援雙向轉換嗎？", a: "支援，包含文字轉摩斯與摩斯轉文字。" },
    { q: "手機也可以使用嗎？", a: "可以，支援多數現代行動與桌面瀏覽器。" }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="zh"
        articleSlot={<SeoArticle locale="zh" />}
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">常見問題</h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300">
                English:
                <Link href="/" hrefLang="en" className="underline underline-offset-2 hover:no-underline">
                  Morse Code Translator
                </Link>
                <span className="opacity-50">|</span>
                Espanol:
                <Link href="/es" hrefLang="es" className="underline underline-offset-2 hover:no-underline">
                  Traductor de codigo morse
                </Link>
                <span className="opacity-50">|</span>
                Korean:
                <Link href="/ko" hrefLang="ko" className="underline underline-offset-2 hover:no-underline">
                  모스 부호 번역기
                </Link>
                <span className="opacity-50">|</span>
                Portuguese:
                <Link href="/pt" hrefLang="pt" className="underline underline-offset-2 hover:no-underline">
                  Tradutor de código Morse
                </Link>
                <span className="opacity-50">|</span>
                Arabic:
                <Link href="/ar" hrefLang="ar" className="underline underline-offset-2 hover:no-underline">
                  مترجم شفرة مورس
                </Link>
                <span className="opacity-50">|</span>
                Japanese:
                <Link href="/ja" hrefLang="ja" className="underline underline-offset-2 hover:no-underline">
                  モールス信号翻訳機
                </Link>
                <span className="opacity-50">|</span>
                Russian:
                <Link href="/ru" hrefLang="ru" className="underline underline-offset-2 hover:no-underline">
                  переводчик азбуки Морзе
                </Link>
                <span className="opacity-50">|</span>
                German:
                <Link href="/de" hrefLang="de" className="underline underline-offset-2 hover:no-underline">
                  Morsecode-Übersetzer
                </Link>
                <span className="opacity-50">|</span>
                Czech:
                <Link href="/cs" hrefLang="cs" className="underline underline-offset-2 hover:no-underline">
                  překladač morseovky
                </Link>
                <span className="opacity-50">|</span>
                French:
                <Link href="/fr" hrefLang="fr" className="underline underline-offset-2 hover:no-underline">
                  Traducteur de code Morse
                </Link>
                <span className="opacity-50">|</span>
                Italian:
                <Link href="/it" hrefLang="it" className="underline underline-offset-2 hover:no-underline">
                  Traduttore codice Morse
                </Link>
                <span className="opacity-50">|</span>
                Turkish:
                <Link href="/tr" hrefLang="tr" className="underline underline-offset-2 hover:no-underline">
                  Mors kodu çevirici
                </Link>
                <span className="opacity-50">|</span>
                Polish:
                <Link href="/pl" hrefLang="pl" className="underline underline-offset-2 hover:no-underline">
                  Tłumacz kodu Morse
                </Link>
                <span className="opacity-50">|</span>
                Dutch:
                <Link href="/nl" hrefLang="nl" className="underline underline-offset-2 hover:no-underline">
                  Morse code vertaler
                </Link>
                <span className="opacity-50">|</span>
                Hindi:
                <Link href="/hi" hrefLang="hi" className="underline underline-offset-2 hover:no-underline">
                  मोर्स कोड ट्रांसलेटर
                </Link>
                <span className="opacity-50">|</span>
                Indonesian:
                <Link href="/id" hrefLang="id" className="underline underline-offset-2 hover:no-underline">
                  Penerjemah kode Morse
                </Link>
                <span className="opacity-50">|</span>
                Vietnamese:
                <Link href="/vi" hrefLang="vi" className="underline underline-offset-2 hover:no-underline">
                  Máy dịch mã Morse
                </Link>
                <span className="opacity-50">|</span>
                Thai:
                <Link href="/th" hrefLang="th" className="underline underline-offset-2 hover:no-underline">
                  เครื่องแปลรหัสมอร์ส
                </Link>
                <span className="opacity-50">|</span>
                Ukrainian:
                <Link href="/uk" hrefLang="uk" className="underline underline-offset-2 hover:no-underline">
                  Перекладач коду Морзе
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.q}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-outline-variant/25 dark:bg-surface-container-high/50"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-neutral-900 marker:content-none dark:text-on-surface">
                      {item.q}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        }
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA_ZH) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_ZH) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_ZH) }} />
    </>
  );
}


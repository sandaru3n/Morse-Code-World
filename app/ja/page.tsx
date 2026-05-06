import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "モールス信号翻訳機 - モールス信号をテキストに変換";
const PAGE_DESCRIPTION =
  "モールス信号翻訳機で、モールス信号からテキストへ、テキストからモールス信号へ素早く変換できます。無料のオンラインツールです。";

const WEB_APP_SCHEMA_JA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "モールス信号翻訳機",
  url: "https://morsecodeworld.org/ja",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "ja",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "297531"
  }
};

const FAQ_SCHEMA_JA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ja",
  mainEntity: [
    {
      "@type": "Question",
      name: "モールス信号翻訳機は無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。登録不要で無料で利用できます。"
      }
    },
    {
      "@type": "Question",
      name: "テキストからモールス、モールスからテキストの両方に対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。同じページで双方向の変換ができます。"
      }
    },
    {
      "@type": "Question",
      name: "スマートフォンでも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。スマートフォンとPCの主要ブラウザで利用できます。"
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
    canonical: "/ja",
    languages: {
      en: "/",
      es: "/es",
      ko: "/ko",
      zh: "/zh",
      pt: "/pt",
      ar: "/ar",
      ja: "/ja",
      "x-default": "/"
    }
  },
  keywords: ["モールス信号翻訳機", "モールス信号をテキストに変換", "テキストをモールス信号に変換", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/ja",
    title: "モールス信号翻訳機",
    locale: "ja_JP",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "モールス信号翻訳機",
    description: PAGE_DESCRIPTION
  }
};

export default function JapaneseHomePage() {
  const faqItems = [
    { q: "モールス信号翻訳機は無料ですか？", a: "はい。ブラウザですぐに無料で使えます。" },
    { q: "双方向の変換に対応していますか？", a: "はい。テキスト↔モールス信号の両方に対応しています。" },
    { q: "スマホでも利用できますか？", a: "はい。主要なモバイル/デスクトップブラウザで利用できます。" }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="ja"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                よくある質問
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-700 dark:border-pink-900/50 dark:bg-pink-950/30 dark:text-pink-300">
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
                Chinese:
                <Link href="/zh" hrefLang="zh" className="underline underline-offset-2 hover:no-underline">
                  摩斯電碼翻譯器
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA_JA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_JA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
    </>
  );
}

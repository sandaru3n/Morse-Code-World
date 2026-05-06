import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "překladač morseovky - převod morseovky na text online";
const PAGE_DESCRIPTION = "Použij překladač morseovky pro rychlý převod morseovky na text i textu na morseovku přímo v prohlížeči.";

const WEB_APP_SCHEMA_CS = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "překladač morseovky",
  url: "https://morsecodeworld.org/cs",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "cs",
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

const FAQ_SCHEMA_CS = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "cs",
  mainEntity: [
    {
      "@type": "Question",
      name: "Je překladač morseovky zdarma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ano. Nástroj je úplně zdarma a funguje bez registrace."
      }
    },
    {
      "@type": "Question",
      name: "Lze převádět v obou směrech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ano. Na stejné stránce můžeš převádět text do Morseovky i Morseovku do textu."
      }
    },
    {
      "@type": "Question",
      name: "Funguje to i na mobilu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ano. Funguje v moderních mobilních i desktopových prohlížečích."
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
    canonical: "/cs",
    languages: {
      en: "/",
      es: "/es",
      ko: "/ko",
      zh: "/zh",
      pt: "/pt",
      ar: "/ar",
      ja: "/ja",
      ru: "/ru",
      de: "/de",
      cs: "/cs",
      "x-default": "/"
    }
  },
  keywords: ["překladač morseovky", "morseovka na text", "text na morseovku", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/cs",
    title: "překladač morseovky",
    locale: "cs_CZ",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "překladač morseovky",
    description: PAGE_DESCRIPTION
  }
};

export default function CzechHomePage() {
  const faqItems = [
    { q: "Je překladač morseovky zdarma?", a: "Ano. Můžeš ho používat zdarma přímo v prohlížeči." },
    { q: "Podporuje převod oběma směry?", a: "Ano. Text ↔ Morseovka je plně podporován." },
    { q: "Mohu ho používat na telefonu?", a: "Ano. Funguje ve většině moderních prohlížečů." }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="cs"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                Časté dotazy
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-900/50 dark:bg-teal-950/30 dark:text-teal-300">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA_CS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_CS) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
    </>
  );
}

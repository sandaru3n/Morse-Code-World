import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "переводчик азбуки Морзе - перевод Морзе в текст онлайн";
const PAGE_DESCRIPTION =
  "Используйте переводчик азбуки Морзе, чтобы быстро переводить Морзе в текст и текст в Морзе прямо в браузере.";

const WEB_APP_SCHEMA_RU = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "переводчик азбуки Морзе",
  url: "https://morsecodeworld.org/ru",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "ru",
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

const FAQ_SCHEMA_RU = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ru",
  mainEntity: [
    {
      "@type": "Question",
      name: "Переводчик азбуки Морзе бесплатный?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Инструмент полностью бесплатный и работает в браузере без регистрации."
      }
    },
    {
      "@type": "Question",
      name: "Можно переводить в обе стороны?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Доступен перевод текста в Морзе и Морзе в текст на одной странице."
      }
    },
    {
      "@type": "Question",
      name: "Работает на телефоне?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да. Работает на современных мобильных и настольных браузерах."
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
    canonical: "/ru",
    languages: {
      en: "/",
      es: "/es",
      ko: "/ko",
      zh: "/zh",
      pt: "/pt",
      ar: "/ar",
      ja: "/ja",
      ru: "/ru",
      "x-default": "/"
    }
  },
  keywords: ["переводчик азбуки Морзе", "азбука Морзе в текст", "текст в азбуку Морзе", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/ru",
    title: "переводчик азбуки Морзе",
    locale: "ru_RU",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA", "ja_JP"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "переводчик азбуки Морзе",
    description: PAGE_DESCRIPTION
  }
};

export default function RussianHomePage() {
  const faqItems = [
    { q: "Переводчик азбуки Морзе бесплатный?", a: "Да. Вы можете использовать его бесплатно прямо в браузере." },
    { q: "Есть двусторонний перевод?", a: "Да. Поддерживается текст ↔ Морзе." },
    { q: "Можно использовать на телефоне?", a: "Да. Работает в популярных мобильных и настольных браузерах." }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="ru"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                Частые вопросы
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-300">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA_RU) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_RU) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
    </>
  );
}

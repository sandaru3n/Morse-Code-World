import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "مترجم شفرة مورس - تحويل مورس الى نص اونلاين";
const PAGE_DESCRIPTION = "استخدم مترجم شفرة مورس لتحويل مورس الى نص وتحويل النص الى مورس بسرعة ودقة عبر المتصفح.";

const WEB_APP_SCHEMA_AR = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "مترجم شفرة مورس",
  url: "https://morsecodeworld.org/ar",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "ar",
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

const FAQ_SCHEMA_AR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ar",
  mainEntity: [
    {
      "@type": "Question",
      name: "هل مترجم شفرة مورس مجاني؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، المترجم مجاني بالكامل ويعمل مباشرة في المتصفح بدون تسجيل."
      }
    },
    {
      "@type": "Question",
      name: "هل يمكن التحويل من النص الى مورس ومن مورس الى نص؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، يمكنك استخدام التحويل في الاتجاهين من نفس الصفحة."
      }
    },
    {
      "@type": "Question",
      name: "هل يعمل على الهاتف؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، يعمل على متصفحات الهاتف والكمبيوتر الحديثة."
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
    canonical: "/ar",
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
  keywords: ["مترجم شفرة مورس", "تحويل مورس الى نص", "تحويل النص الى مورس", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/ar",
    title: "مترجم شفرة مورس",
    locale: "ar_SA",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ja_JP", "ru_RU", "de_DE", "cs_CZ"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "مترجم شفرة مورس",
    description: PAGE_DESCRIPTION
  }
};

export default function ArabicHomePage() {
  const faqItems = [
    { q: "هل مترجم شفرة مورس مجاني؟", a: "نعم، يمكنك استخدامه مجانا مباشرة من المتصفح." },
    { q: "هل يدعم التحويل في الاتجاهين؟", a: "نعم، من النص الى مورس ومن مورس الى نص." },
    { q: "هل يمكن استخدامه على الجوال؟", a: "نعم، يعمل على اغلب المتصفحات الحديثة." }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="ar"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                الاسئلة الشائعة
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 dark:border-cyan-900/50 dark:bg-cyan-950/30 dark:text-cyan-300">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA_AR) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_AR) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
    </>
  );
}

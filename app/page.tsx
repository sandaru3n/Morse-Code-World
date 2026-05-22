import type { Metadata } from "next";
import Link from "next/link";
import { AiSummaryBlock } from "@/components/AiSummaryBlock";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { createSpeakableSchema, createWebAppSchema } from "@/lib/seo/schemas";

const PAGE_TITLE = "Morse Code Translator - Convert Morse Code to Text Online";

const PAGE_DESCRIPTION =
  "Easily translate Morse code to text with our online Morse code translator. Decode or encode messages quickly and accurately.";

const WEB_APP_SCHEMA = createWebAppSchema({
  name: "Morse Code Translator",
  url: absoluteUrl("/"),
  description: PAGE_DESCRIPTION,
  inLanguage: "en"
});

const SPEAKABLE_SCHEMA = createSpeakableSchema(["#site-summary", "#seo-article-heading"]);


const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this Morse Code Translator free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Morse Code Translator is completely free to use on desktop and mobile browsers, with no account required."
      }
    },
    {
      "@type": "Question",
      name: "Can I convert both Morse to text and text to Morse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can decode Morse code into readable text and also encode plain text into Morse code using the same translator."
      }
    },
    {
      "@type": "Question",
      name: "Do I need to install any extension or app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The translator runs fully in your browser, so you can use it instantly without installing extensions or apps."
      }
    },
    {
      "@type": "Question",
      name: "Does the translator work on phones and tablets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Morse Code Translator works on modern mobile browsers including Chrome, Safari, Firefox, and Edge."
      }
    },
    {
      "@type": "Question",
      name: "What should I do if my Morse output looks incorrect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check dot and dash spacing first. Small spacing mistakes can change decoded letters, so correcting separators usually fixes the result."
      }
    },
    {
      "@type": "Question",
      name: "What is Morse Code World?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Morse Code World (morsecodeworld.org) is a free website with a Morse code translator, audio decoder, and picture translator. It uses International Morse Code and works in your browser without an account."
      }
    },
    {
      "@type": "Question",
      name: "What is International Morse Code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "International Morse Code maps letters and numbers to dot and dash patterns. A dot is a short signal, a dash is a long signal, and spaces separate letters and words. It is the standard used by amateur radio operators today."
      }
    }
  ]
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Morse Code Translator",
      item: "https://morsecodeworld.org/"
    }
  ]
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/",
    languages: {
      en: "/", es: "/es", ko: "/ko", zh: "/zh", pt: "/pt", ar: "/ar",
      ja: "/ja", ru: "/ru", de: "/de", cs: "/cs", fr: "/fr", it: "/it",
      tr: "/tr", pl: "/pl", nl: "/nl", hi: "/hi", id: "/id", vi: "/vi",
      th: "/th", uk: "/uk", "x-default": "/"
    }
  },
  keywords: [
    "Morse Code Translator",
    "morse code translator",
    "مترجم شفرة مورس",
    "モールス信号翻訳機",
    "переводчик азбуки Морзе",
    "Morsecode-Übersetzer",
    "překladač morseovky",
    "Traducteur de code Morse",
    "Traduttore codice Morse",
    SITE_NAME
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: "Morse Code Translator",
    locale: "en_US",
    alternateLocale: ["es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE", "cs_CZ", "fr_FR", "it_IT", "tr_TR", "pl_PL", "nl_NL", "hi_IN", "id_ID", "vi_VN", "th_TH", "uk_UA"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION
  },
  other: { "Content-Language": "en" }
};

export default function Page() {
  const faqItems = [
    {
      q: "Is this Morse Code Translator free to use?",
      a: "Yes. The tool is completely free and works in modern browsers without registration."
    },
    {
      q: "Can I convert both Morse to text and text to Morse?",
      a: "Yes. You can decode Morse into plain text and encode text into Morse from the same page."
    },
    {
      q: "Do I need to install any extension or app?",
      a: "No. Everything runs directly in your browser."
    },
    {
      q: "Does it work on phones and tablets?",
      a: "Yes. It supports mobile and desktop browsers including Chrome, Safari, Firefox, and Edge."
    },
    {
      q: "What if my decoded output looks wrong?",
      a: "Double-check the dot, dash, and spacing separators. Small spacing errors can change decoded letters."
    },
    {
      q: "What is Morse Code World?",
      a: "Morse Code World (morsecodeworld.org) is a free website with a Morse code translator, audio decoder, and picture translator. It uses International Morse Code and works in your browser without an account."
    },
    {
      q: "What is International Morse Code?",
      a: "International Morse Code maps letters and numbers to dot and dash patterns. A dot is a short signal, a dash is a long signal, and spaces separate letters and words. It is the standard used by amateur radio operators today."
    }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="en"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <AiSummaryBlock />
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
                Spanish: <Link href="/es" hrefLang="es" className="underline underline-offset-2 hover:no-underline">Traductor de codigo morse</Link>
                <span className="opacity-50">|</span> Korean: <Link href="/ko" hrefLang="ko" className="underline underline-offset-2 hover:no-underline">모스 부호 번역기</Link>
                <span className="opacity-50">|</span> Chinese: <Link href="/zh" hrefLang="zh" className="underline underline-offset-2 hover:no-underline">摩斯電碼翻譯器</Link>
                <span className="opacity-50">|</span> Portuguese: <Link href="/pt" hrefLang="pt" className="underline underline-offset-2 hover:no-underline">Tradutor de código Morse</Link>
                <span className="opacity-50">|</span> Arabic: <Link href="/ar" hrefLang="ar" className="underline underline-offset-2 hover:no-underline">مترجم شفرة مورس</Link>
                <span className="opacity-50">|</span> Japanese: <Link href="/ja" hrefLang="ja" className="underline underline-offset-2 hover:no-underline">モールス信号翻訳機</Link>
                <span className="opacity-50">|</span> Russian: <Link href="/ru" hrefLang="ru" className="underline underline-offset-2 hover:no-underline">переводчик азбуки Морзе</Link>
                <span className="opacity-50">|</span> German: <Link href="/de" hrefLang="de" className="underline underline-offset-2 hover:no-underline">Morsecode-Übersetzer</Link>
                <span className="opacity-50">|</span> Czech: <Link href="/cs" hrefLang="cs" className="underline underline-offset-2 hover:no-underline">překladač morseovky</Link>
                <span className="opacity-50">|</span> French: <Link href="/fr" hrefLang="fr" className="underline underline-offset-2 hover:no-underline">Traducteur de code Morse</Link>
                <span className="opacity-50">|</span> Italian: <Link href="/it" hrefLang="it" className="underline underline-offset-2 hover:no-underline">Traduttore codice Morse</Link>
                <span className="opacity-50">|</span> Turkish: <Link href="/tr" hrefLang="tr" className="underline underline-offset-2 hover:no-underline">Mors kodu çevirici</Link>
                <span className="opacity-50">|</span> Polish: <Link href="/pl" hrefLang="pl" className="underline underline-offset-2 hover:no-underline">Tłumacz kodu Morse</Link>
                <span className="opacity-50">|</span> Dutch: <Link href="/nl" hrefLang="nl" className="underline underline-offset-2 hover:no-underline">Morse code vertaler</Link>
                <span className="opacity-50">|</span> Hindi: <Link href="/hi" hrefLang="hi" className="underline underline-offset-2 hover:no-underline">मोर्स कोड ट्रांसलेटर</Link>
                <span className="opacity-50">|</span> Indonesian: <Link href="/id" hrefLang="id" className="underline underline-offset-2 hover:no-underline">Penerjemah kode Morse</Link>
                <span className="opacity-50">|</span> Vietnamese: <Link href="/vi" hrefLang="vi" className="underline underline-offset-2 hover:no-underline">Máy dịch mã Morse</Link>
                <span className="opacity-50">|</span> Thai: <Link href="/th" hrefLang="th" className="underline underline-offset-2 hover:no-underline">เครื่องแปลรหัสมอร์ส</Link>
                <span className="opacity-50">|</span> Ukrainian: <Link href="/uk" hrefLang="uk" className="underline underline-offset-2 hover:no-underline">Перекладач коду Морзе</Link>
              </div>
              <div className="mt-4 space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-outline-variant/25 dark:bg-surface-container-high/50"
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA) }} />
    </>
  );
}

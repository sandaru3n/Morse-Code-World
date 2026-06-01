import type { Metadata } from "next";
import Link from "next/link";
import { SeoArticle } from "@/components/SeoArticle";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "모스 부호 번역기 - 모스 부호를 텍스트로 변환";

const PAGE_DESCRIPTION =
  "모스 부호 번역기로 모스 부호를 텍스트로, 텍스트를 모스 부호로 빠르고 정확하게 변환하세요. 무료 온라인 도구입니다.";

const WEB_APP_SCHEMA_KO = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "모스 부호 번역기",
  url: "https://morsecodeworld.org/ko",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "ko",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  }
};

const FAQ_SCHEMA_KO = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ko",
  mainEntity: [
    {
      "@type": "Question",
      name: "모스 부호 번역기는 무료인가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 회원가입 없이 무료로 사용할 수 있습니다."
      }
    },
    {
      "@type": "Question",
      name: "텍스트를 모스로, 모스를 텍스트로 모두 변환할 수 있나요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "네. 한 페이지에서 두 가지 변환을 모두 지원합니다."
      }
    },
    {
      "@type": "Question",
      name: "앱이나 확장 프로그램 설치가 필요한가요?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "아니요. 브라우저에서 바로 사용할 수 있습니다."
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
    canonical: "/ko",
    languages: {
      en: "/", es: "/es", ko: "/ko", zh: "/zh", pt: "/pt", ar: "/ar",
      ja: "/ja", ru: "/ru", de: "/de", cs: "/cs", fr: "/fr", it: "/it",
      tr: "/tr", pl: "/pl", nl: "/nl", hi: "/hi", id: "/id", vi: "/vi",
      th: "/th", uk: "/uk", "x-default": "/"
    }
  },
  keywords: ["모스 부호 번역기", "모스 부호 해독", "모스 코드 번역", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/ko",
    title: "모스 부호 번역기",
    locale: "ko_KR",
    alternateLocale: ["en_US", "es_ES", "zh_TW", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE", "cs_CZ", "fr_FR", "it_IT", "tr_TR", "pl_PL", "nl_NL", "hi_IN", "id_ID", "vi_VN", "th_TH", "uk_UA"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "모스 부호 번역기",
    description: PAGE_DESCRIPTION
  },
  other: { "Content-Language": "ko" }
};

const BREADCRUMB_SCHEMA_KO = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "모스 부호 번역기", item: "https://morsecodeworld.org/ko" }
  ]
};

export default function KoreanHomePage() {
  const faqItems = [
    {
      q: "모스 부호 번역기는 무료인가요?",
      a: "네. 브라우저에서 무료로 바로 사용할 수 있습니다."
    },
    {
      q: "텍스트와 모스 부호를 서로 변환할 수 있나요?",
      a: "네. 텍스트 → 모스, 모스 → 텍스트를 모두 지원합니다."
    },
    {
      q: "휴대폰에서도 사용할 수 있나요?",
      a: "네. 모바일과 데스크톱 브라우저에서 모두 작동합니다."
    }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="ko"
        articleSlot={<SeoArticle locale="ko" />}
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">자주 묻는 질문</h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-900/50 dark:bg-violet-950/30 dark:text-violet-300">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA_KO) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_KO) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_KO) }} />
    </>
  );
}


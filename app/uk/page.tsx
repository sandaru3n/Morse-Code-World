import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "Перекладач коду Морзе - Конвертувати код Морзе в текст онлайн";

const PAGE_DESCRIPTION =
  "Безкоштовний перекладач коду Морзе для конвертації коду Морзе в текст і тексту в код Морзе онлайн, швидко з будь-якого пристрою.";

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Перекладач коду Морзе",
  url: "https://morsecodeworld.org/uk",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "uk",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "uk",
  mainEntity: [
    {
      "@type": "Question",
      name: "Перекладач коду Морзе безкоштовний?",
      acceptedAnswer: { "@type": "Answer", text: "Так. Цей перекладач повністю безкоштовний і працює в сучасних браузерах без реєстрації." }
    },
    {
      "@type": "Question",
      name: "Чи можу я конвертувати текст у Морзе та Морзе у текст?",
      acceptedAnswer: { "@type": "Answer", text: "Так. Ви можете кодувати текст у код Морзе та декодувати код Морзе у текст з тієї ж сторінки." }
    },
    {
      "@type": "Question",
      name: "Чи потрібно встановлювати додаток або розширення?",
      acceptedAnswer: { "@type": "Answer", text: "Ні. Все працює безпосередньо в браузері, без встановлення додатків чи розширень." }
    },
    {
      "@type": "Question",
      name: "Чи працює на телефоні та планшеті?",
      acceptedAnswer: { "@type": "Answer", text: "Так. Сумісний з Chrome, Safari, Firefox та Edge на телефоні, планшеті та комп'ютері." }
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
    canonical: "/uk",
    languages: {
      en: "/", es: "/es", ko: "/ko", zh: "/zh", pt: "/pt", ar: "/ar",
      ja: "/ja", ru: "/ru", de: "/de", cs: "/cs", fr: "/fr", it: "/it",
      tr: "/tr", pl: "/pl", nl: "/nl", hi: "/hi", id: "/id", vi: "/vi",
      th: "/th", uk: "/uk", "x-default": "/"
    }
  },
  keywords: ["перекладач коду морзе", "код морзе українська", "morse code ukrainian", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/uk",
    title: "Перекладач коду Морзе",
    locale: "uk_UA",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE", "cs_CZ", "fr_FR", "it_IT", "tr_TR", "pl_PL", "nl_NL", "hi_IN", "id_ID", "vi_VN", "th_TH"],
    description: PAGE_DESCRIPTION
  },
  twitter: { card: "summary", title: "Перекладач коду Морзе", description: PAGE_DESCRIPTION },
  other: { "Content-Language": "uk" }
};

const BREADCRUMB_SCHEMA_UK = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "Перекладач коду Морзе", item: "https://morsecodeworld.org/uk" }
  ]
};

export default function UkrainianHomePage() {
  const faqItems = [
    { q: "Перекладач коду Морзе безкоштовний?", a: "Так. Безкоштовний, можна використовувати відразу з браузера." },
    { q: "Чи можу я конвертувати текст у Морзе та Морзе у текст?", a: "Так. Той самий перекладач підтримує обидва режими конвертації." },
    { q: "Чи потрібно встановлювати додаток або розширення?", a: "Ні. Не потрібно нічого встановлювати для використання цього інструменту." },
    { q: "Чи працює на телефоні та планшеті?", a: "Так. Працює в найпопулярніших сучасних браузерах." }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="uk"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                Часті питання
              </h2>
              <div className="mt-3 inline-flex flex-wrap items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-900/50 dark:bg-sky-950/30 dark:text-sky-300">
                English: <Link href="/" hrefLang="en" className="underline underline-offset-2 hover:no-underline">Morse Code Translator</Link>
                <span className="opacity-50">|</span> Spanish: <Link href="/es" hrefLang="es" className="underline underline-offset-2 hover:no-underline">Traductor de codigo morse</Link>
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
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                Короткий посібник з використання перекладача коду Морзе українською мовою.
              </p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_UK) }} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "เครื่องแปลรหัสมอร์ส - แปลงรหัสมอร์สเป็นข้อความออนไลน์";

const PAGE_DESCRIPTION =
  "เครื่องแปลรหัสมอร์สฟรี แปลงรหัสมอร์สเป็นข้อความและข้อความเป็นรหัสมอร์สออนไลน์ได้อย่างรวดเร็วจากทุกอุปกรณ์";

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "เครื่องแปลรหัสมอร์ส",
  url: "https://morsecodeworld.org/th",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "th",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "297531" }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "th",
  mainEntity: [
    {
      "@type": "Question",
      name: "เครื่องแปลรหัสมอร์สใช้ฟรีหรือไม่?",
      acceptedAnswer: { "@type": "Answer", text: "ใช่ เครื่องแปลนี้ใช้งานได้ฟรีอย่างสมบูรณ์และทำงานในเบราว์เซอร์ทันสมัยโดยไม่ต้องลงทะเบียน" }
    },
    {
      "@type": "Question",
      name: "ฉันสามารถแปลงข้อความเป็นมอร์สและมอร์สเป็นข้อความได้หรือไม่?",
      acceptedAnswer: { "@type": "Answer", text: "ได้ คุณสามารถเข้ารหัสข้อความเป็นมอร์สและถอดรหัสมอร์สเป็นข้อความจากหน้าเดียวกัน" }
    },
    {
      "@type": "Question",
      name: "ฉันต้องติดตั้งแอปหรือส่วนขยายหรือไม่?",
      acceptedAnswer: { "@type": "Answer", text: "ไม่ ทุกอย่างทำงานโดยตรงในเบราว์เซอร์ ไม่จำเป็นต้องติดตั้งแอปหรือส่วนขยาย" }
    },
    {
      "@type": "Question",
      name: "ใช้งานได้บนโทรศัพท์และแท็บเล็ตหรือไม่?",
      acceptedAnswer: { "@type": "Answer", text: "ใช่ รองรับ Chrome, Safari, Firefox และ Edge บนโทรศัพท์ แท็บเล็ต และคอมพิวเตอร์" }
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
    canonical: "/th",
    languages: {
      en: "/", es: "/es", ko: "/ko", zh: "/zh", pt: "/pt", ar: "/ar",
      ja: "/ja", ru: "/ru", de: "/de", cs: "/cs", fr: "/fr", it: "/it",
      tr: "/tr", pl: "/pl", nl: "/nl", hi: "/hi", id: "/id", vi: "/vi",
      th: "/th", uk: "/uk", "x-default": "/"
    }
  },
  keywords: ["เครื่องแปลรหัสมอร์ส", "รหัสมอร์สภาษาไทย", "morse code thai", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/th",
    title: "เครื่องแปลรหัสมอร์ส",
    locale: "th_TH",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE", "cs_CZ", "fr_FR", "it_IT", "tr_TR", "pl_PL", "nl_NL", "hi_IN", "id_ID", "vi_VN", "uk_UA"],
    description: PAGE_DESCRIPTION
  },
  twitter: { card: "summary", title: "เครื่องแปลรหัสมอร์ส", description: PAGE_DESCRIPTION },
  other: { "Content-Language": "th" }
};

const BREADCRUMB_SCHEMA_TH = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "เครื่องแปลรหัสมอร์ส", item: "https://morsecodeworld.org/th" }
  ]
};

export default function ThaiHomePage() {
  const faqItems = [
    { q: "เครื่องแปลรหัสมอร์สใช้ฟรีหรือไม่?", a: "ใช่ ใช้งานได้ฟรีจากเบราว์เซอร์ได้ทันที" },
    { q: "ฉันสามารถแปลงข้อความเป็นมอร์สและมอร์สเป็นข้อความได้หรือไม่?", a: "ได้ เครื่องแปลตัวเดียวกันรองรับทั้งสองโหมดการแปลง" },
    { q: "ฉันต้องติดตั้งแอปหรือส่วนขยายหรือไม่?", a: "ไม่ ไม่จำเป็นต้องติดตั้งอะไรเพื่อใช้เครื่องมือนี้" },
    { q: "ใช้งานได้บนโทรศัพท์และแท็บเล็ตหรือไม่?", a: "ใช่ ทำงานได้บนเบราว์เซอร์ทันสมัยที่ใช้งานมากที่สุด" }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="th"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                คำถามที่พบบ่อย
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
                <span className="opacity-50">|</span> Ukrainian: <Link href="/uk" hrefLang="uk" className="underline underline-offset-2 hover:no-underline">Перекладач коду Морзе</Link>
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                คู่มือการใช้งานเบื้องต้นสำหรับเครื่องแปลรหัสมอร์สภาษาไทย
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_TH) }} />
    </>
  );
}

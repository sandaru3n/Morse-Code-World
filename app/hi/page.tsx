import type { Metadata } from "next";
import Link from "next/link";
import { SeoArticle } from "@/components/SeoArticle";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "मोर्स कोड ट्रांसलेटर - मोर्स कोड को टेक्स्ट में बदलें ऑनलाइन";

const PAGE_DESCRIPTION =
  "मुफ्त मोर्स कोड ट्रांसलेटर से मोर्स कोड को टेक्स्ट में और टेक्स्ट को मोर्स कोड में बदलें, किसी भी डिवाइस से आसानी से।";

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "मोर्स कोड ट्रांसलेटर",
  url: "https://morsecodeworld.org/hi",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "hi",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "hi",
  mainEntity: [
    {
      "@type": "Question",
      name: "क्या मोर्स कोड ट्रांसलेटर मुफ्त है?",
      acceptedAnswer: { "@type": "Answer", text: "हाँ। यह ट्रांसलेटर बिल्कुल मुफ्त है और बिना किसी रजिस्ट्रेशन के आधुनिक ब्राउज़र में काम करता है।" }
    },
    {
      "@type": "Question",
      name: "क्या मैं टेक्स्ट को मोर्स में और मोर्स को टेक्स्ट में बदल सकता हूँ?",
      acceptedAnswer: { "@type": "Answer", text: "हाँ। आप उसी पेज से टेक्स्ट को मोर्स कोड में एन्कोड और मोर्स कोड को टेक्स्ट में डीकोड कर सकते हैं।" }
    },
    {
      "@type": "Question",
      name: "क्या मुझे कोई ऐप या एक्सटेंशन इंस्टॉल करना होगा?",
      acceptedAnswer: { "@type": "Answer", text: "नहीं। सब कुछ सीधे ब्राउज़र में काम करता है, कोई ऐप या एक्सटेंशन इंस्टॉल करने की जरूरत नहीं।" }
    },
    {
      "@type": "Question",
      name: "क्या यह मोबाइल और टैबलेट पर काम करता है?",
      acceptedAnswer: { "@type": "Answer", text: "हाँ। Chrome, Safari, Firefox और Edge के साथ फोन, टैबलेट और कंप्यूटर पर काम करता है।" }
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
    canonical: "/hi",
    languages: {
      en: "/", es: "/es", ko: "/ko", zh: "/zh", pt: "/pt", ar: "/ar",
      ja: "/ja", ru: "/ru", de: "/de", cs: "/cs", fr: "/fr", it: "/it",
      tr: "/tr", pl: "/pl", nl: "/nl", hi: "/hi", id: "/id", vi: "/vi",
      th: "/th", uk: "/uk", "x-default": "/"
    }
  },
  keywords: ["मोर्स कोड ट्रांसलेटर", "मोर्स कोड हिंदी", "morse code hindi", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/hi",
    title: "मोर्स कोड ट्रांसलेटर",
    locale: "hi_IN",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE", "cs_CZ", "fr_FR", "it_IT", "tr_TR", "pl_PL", "nl_NL", "id_ID", "vi_VN", "th_TH", "uk_UA"],
    description: PAGE_DESCRIPTION
  },
  twitter: { card: "summary", title: "मोर्स कोड ट्रांसलेटर", description: PAGE_DESCRIPTION },
  other: { "Content-Language": "hi" }
};

const BREADCRUMB_SCHEMA_HI = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "मोर्स कोड ट्रांसलेटर", item: "https://morsecodeworld.org/hi" }
  ]
};

export default function HindiHomePage() {
  const faqItems = [
    { q: "क्या मोर्स कोड ट्रांसलेटर मुफ्त है?", a: "हाँ। मुफ्त है और ब्राउज़र से तुरंत उपयोग किया जा सकता है।" },
    { q: "क्या मैं टेक्स्ट को मोर्स में और मोर्स को टेक्स्ट में बदल सकता हूँ?", a: "हाँ। एक ही ट्रांसलेटर से दोनों रूपांतरण मोड काम करते हैं।" },
    { q: "क्या मुझे कोई ऐप या एक्सटेंशन इंस्टॉल करना होगा?", a: "नहीं। इस टूल का उपयोग करने के लिए कुछ भी इंस्टॉल करने की जरूरत नहीं।" },
    { q: "क्या यह मोबाइल और टैबलेट पर काम करता है?", a: "हाँ। सबसे लोकप्रिय आधुनिक ब्राउज़र में काम करता है।" }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="hi"
        articleSlot={<SeoArticle locale="hi" />}
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                अक्सर पूछे जाने वाले प्रश्न
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
                <span className="opacity-50">|</span> Indonesian: <Link href="/id" hrefLang="id" className="underline underline-offset-2 hover:no-underline">Penerjemah kode Morse</Link>
                <span className="opacity-50">|</span> Vietnamese: <Link href="/vi" hrefLang="vi" className="underline underline-offset-2 hover:no-underline">Máy dịch mã Morse</Link>
                <span className="opacity-50">|</span> Thai: <Link href="/th" hrefLang="th" className="underline underline-offset-2 hover:no-underline">เครื่องแปลรหัสมอร์ส</Link>
                <span className="opacity-50">|</span> Ukrainian: <Link href="/uk" hrefLang="uk" className="underline underline-offset-2 hover:no-underline">Перекладач коду Морзе</Link>
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                हिंदी में मोर्स कोड ट्रांसलेटर के लिए त्वरित उपयोग मार्गदर्शिका।
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_HI) }} />
    </>
  );
}

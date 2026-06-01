import type { Metadata } from "next";
import Link from "next/link";
import { SeoArticle } from "@/components/SeoArticle";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "Máy dịch mã Morse - Chuyển đổi mã Morse sang văn bản trực tuyến";

const PAGE_DESCRIPTION =
  "Máy dịch mã Morse miễn phí để chuyển đổi mã Morse sang văn bản và văn bản sang mã Morse trực tuyến, nhanh chóng từ mọi thiết bị.";

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Máy dịch mã Morse",
  url: "https://morsecodeworld.org/vi",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "vi",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "vi",
  mainEntity: [
    {
      "@type": "Question",
      name: "Máy dịch mã Morse có miễn phí không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Máy dịch này hoàn toàn miễn phí và hoạt động trên các trình duyệt hiện đại mà không cần đăng ký." }
    },
    {
      "@type": "Question",
      name: "Tôi có thể chuyển đổi cả văn bản sang Morse và Morse sang văn bản không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Bạn có thể mã hóa văn bản sang Morse và giải mã Morse sang văn bản từ cùng một trang." }
    },
    {
      "@type": "Question",
      name: "Tôi có cần cài đặt ứng dụng hoặc tiện ích mở rộng không?",
      acceptedAnswer: { "@type": "Answer", text: "Không. Mọi thứ hoạt động trực tiếp trên trình duyệt, không cần cài đặt ứng dụng hay tiện ích mở rộng." }
    },
    {
      "@type": "Question",
      name: "Có hoạt động trên điện thoại và máy tính bảng không?",
      acceptedAnswer: { "@type": "Answer", text: "Có. Tương thích với Chrome, Safari, Firefox và Edge trên điện thoại, máy tính bảng và máy tính." }
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
    canonical: "/vi",
    languages: {
      en: "/", es: "/es", ko: "/ko", zh: "/zh", pt: "/pt", ar: "/ar",
      ja: "/ja", ru: "/ru", de: "/de", cs: "/cs", fr: "/fr", it: "/it",
      tr: "/tr", pl: "/pl", nl: "/nl", hi: "/hi", id: "/id", vi: "/vi",
      th: "/th", uk: "/uk", "x-default": "/"
    }
  },
  keywords: ["máy dịch mã morse", "mã morse sang văn bản", "dịch morse tiếng việt", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/vi",
    title: "Máy dịch mã Morse",
    locale: "vi_VN",
    alternateLocale: ["en_US", "es_ES", "ko_KR", "zh_TW", "pt_BR", "ar_SA", "ja_JP", "ru_RU", "de_DE", "cs_CZ", "fr_FR", "it_IT", "tr_TR", "pl_PL", "nl_NL", "hi_IN", "id_ID", "th_TH", "uk_UA"],
    description: PAGE_DESCRIPTION
  },
  twitter: { card: "summary", title: "Máy dịch mã Morse", description: PAGE_DESCRIPTION },
  other: { "Content-Language": "vi" }
};

const BREADCRUMB_SCHEMA_VI = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code Translator", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "Máy dịch mã Morse", item: "https://morsecodeworld.org/vi" }
  ]
};

export default function VietnameseHomePage() {
  const faqItems = [
    { q: "Máy dịch mã Morse có miễn phí không?", a: "Có. Miễn phí và có thể sử dụng ngay từ trình duyệt của bạn." },
    { q: "Tôi có thể chuyển đổi cả văn bản sang Morse và Morse sang văn bản không?", a: "Có. Cùng một máy dịch hỗ trợ cả hai chế độ chuyển đổi." },
    { q: "Tôi có cần cài đặt ứng dụng hoặc tiện ích mở rộng không?", a: "Không. Không cần cài đặt gì để sử dụng công cụ này." },
    { q: "Có hoạt động trên điện thoại và máy tính bảng không?", a: "Có. Hoạt động trên các trình duyệt hiện đại phổ biến nhất." }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="vi"
        articleSlot={<SeoArticle locale="vi" />}
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                Câu hỏi thường gặp
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
                <span className="opacity-50">|</span> Thai: <Link href="/th" hrefLang="th" className="underline underline-offset-2 hover:no-underline">เครื่องแปลรหัสมอร์ส</Link>
                <span className="opacity-50">|</span> Ukrainian: <Link href="/uk" hrefLang="uk" className="underline underline-offset-2 hover:no-underline">Перекладач коду Морзе</Link>
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                Hướng dẫn sử dụng nhanh máy dịch mã Morse bằng tiếng Việt.
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_VI) }} />
    </>
  );
}

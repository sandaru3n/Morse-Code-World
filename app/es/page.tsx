import type { Metadata } from "next";
import Link from "next/link";
import TranslatorShell from "@/components/TranslatorShell";
import { SITE_NAME } from "@/lib/site";

const PAGE_TITLE = "Traductor de codigo morse - Convertir codigo morse a texto online";

const PAGE_DESCRIPTION =
  "Traductor de codigo morse gratis para convertir codigo morse a texto y texto a morse en linea, rapido y facil desde cualquier dispositivo.";

const WEB_APP_SCHEMA_ES = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Traductor de codigo morse",
  url: "https://morsecodeworld.org/es",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  inLanguage: "es",
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

const FAQ_SCHEMA_ES = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es",
  mainEntity: [
    {
      "@type": "Question",
      name: "El traductor de codigo morse es gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Este traductor de codigo morse es totalmente gratis y funciona en navegadores modernos sin registro."
      }
    },
    {
      "@type": "Question",
      name: "Puedo convertir de texto a morse y de morse a texto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Puedes codificar texto a morse y tambien decodificar morse a texto desde la misma pagina."
      }
    },
    {
      "@type": "Question",
      name: "Necesito instalar una app o extension?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Todo funciona directamente en el navegador, sin instalar aplicaciones ni extensiones."
      }
    },
    {
      "@type": "Question",
      name: "Funciona en movil y tablet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Es compatible con Chrome, Safari, Firefox y Edge en telefono, tablet y computadora."
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
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
      ko: "/ko",
      zh: "/zh",
      "x-default": "/"
    }
  },
  keywords: ["traductor de codigo morse", "codigo morse a texto", "texto a codigo morse", SITE_NAME],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/es",
    title: "Traductor de codigo morse",
    locale: "es_ES",
    alternateLocale: ["en_US", "ko_KR", "zh_TW"],
    description: PAGE_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: "Traductor de codigo morse",
    description: PAGE_DESCRIPTION
  }
};

export default function SpanishHomePage() {
  const faqItems = [
    {
      q: "El traductor de codigo morse es gratis?",
      a: "Si. Es gratis y puedes usarlo al instante desde tu navegador."
    },
    {
      q: "Puedo convertir de texto a morse y de morse a texto?",
      a: "Si. El mismo traductor permite ambos modos de conversion."
    },
    {
      q: "Necesito instalar una app o extension?",
      a: "No. No necesitas instalar nada para usar esta herramienta."
    },
    {
      q: "Funciona en movil y tablet?",
      a: "Si. Funciona en los navegadores modernos mas usados."
    }
  ] as const;

  return (
    <>
      <TranslatorShell
        locale="es"
        bottomContent={
          <section className="mx-auto mt-2 w-full max-w-5xl px-1 pb-2 sm:px-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-outline-variant/35 dark:bg-surface-container sm:p-6">
              <h2 className="font-headline text-xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-2xl">
                Preguntas frecuentes
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-900/50 dark:bg-sky-950/30 dark:text-sky-300">
                English:
                <Link href="/" hrefLang="en" className="underline underline-offset-2 hover:no-underline">
                  Morse Code Translator
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
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                Guia rapida de uso para el traductor de codigo morse en espanol.
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA_ES) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_ES) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
    </>
  );
}

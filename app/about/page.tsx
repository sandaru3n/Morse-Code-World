import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SiteAddress } from "@/components/SiteAddress";
import { SITE_NAME, SITE_OPERATOR_NAME, SITE_POSTAL_ADDRESS_SCHEMA, absoluteUrl } from "@/lib/site";

const DEVELOPER = {
  name: "Sandaru Peiris",
  profileImage: "/profile.jpeg",
  profileImageAlt: "Portrait photo of Sandaru Peiris, founder of Morse Code World",
  linkedIn: "https://www.linkedin.com/in/sandaru-peiris/",
  github: "https://github.com/sandaru3n",
  portfolio: "https://sandaru.vercel.app/"
} as const;

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Morse Code World — Free Online Morse Code Translator",
  description:
    "Morse Code World was built by Sandaru Peiris to help people convert text to Morse code and back — a free tool for students, hobbyists, and radio enthusiasts.",
  keywords: [
    "about morse code world",
    "morse code translator",
    "Sandaru Peiris",
    "International Morse Code"
  ],
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Morse Code World",
    description:
      "Morse Code World was built by Sandaru Peiris to help people convert text to Morse code and back — a free tool for students, hobbyists, and radio enthusiasts.",
    images: [
      {
        url: "/profile.jpeg",
        alt: "Portrait photo of Sandaru Peiris, founder of Morse Code World"
      }
    ]
  },
  other: {
    "Content-Language": "en"
  }
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Morse Code World", item: "https://morsecodeworld.org/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://morsecodeworld.org/about" }
  ]
};

const ABOUT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Morse Code World",
  url: absoluteUrl("/about"),
  description:
    "Morse Code World was built by Sandaru Peiris to help people convert text to Morse code and back.",
  mainEntity: { "@id": `${absoluteUrl("/")}#organization` },
  author: {
    "@type": "Person",
    name: DEVELOPER.name,
    image: absoluteUrl(DEVELOPER.profileImage),
    url: DEVELOPER.portfolio,
    sameAs: [DEVELOPER.linkedIn, DEVELOPER.github, DEVELOPER.portfolio]
  },
  publisher: {
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: SITE_OPERATOR_NAME,
    url: absoluteUrl("/"),
    address: SITE_POSTAL_ADDRESS_SCHEMA,
    founder: {
      "@type": "Person",
      name: DEVELOPER.name,
      image: absoluteUrl(DEVELOPER.profileImage),
      url: DEVELOPER.portfolio
    }
  },
  inLanguage: "en",
  isAccessibleForFree: true
};

const linkClass =
  "text-emerald-600 underline decoration-emerald-600/40 underline-offset-[3px] transition-colors hover:text-emerald-700 hover:decoration-emerald-600 dark:text-primary-container dark:decoration-primary-container/40 dark:hover:text-primary-container/90";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-neutral-100 text-neutral-900 selection:bg-primary-container selection:text-on-primary-container dark:bg-surface-container-lowest dark:text-on-surface">
      <SiteTopBar />

      <div className="flex flex-1 pt-[4.5rem]">
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8">
          <div className="mx-auto max-w-3xl md:py-4">
            <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl">
              About Morse Code World
            </h1>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              The main purpose of Morse Code World is simple: help people easily convert{" "}
              <strong className="text-neutral-800 dark:text-slate-200">text into Morse code</strong> and{" "}
              <strong className="text-neutral-800 dark:text-slate-200">Morse code into text</strong>. It is a
              free tool you can use for education, learning communication methods, and keeping knowledge of Morse
              code alive. Whether you are a student studying signalling, a hobbyist curious about dots and dashes,
              or a radio enthusiast practising CW, this site is built for you.
            </p>

            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              Who Built This
            </h2>
            <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start">
              <Image
                src={DEVELOPER.profileImage}
                alt={DEVELOPER.profileImageAlt}
                width={128}
                height={128}
                priority
                className="h-28 w-28 shrink-0 rounded-full border-2 border-slate-200/80 object-cover shadow-sm dark:border-white/10 sm:h-32 sm:w-32"
              />
              <div className="min-w-0">
                <p className="font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
                  My name is <strong className="text-neutral-800 dark:text-slate-200">{DEVELOPER.name}</strong>. I am
                  a software engineering student at{" "}
                  <strong className="text-neutral-800 dark:text-slate-200">SLIIT</strong> (Sri Lanka Institute of
                  Information Technology), based in Sri Lanka. I build web applications and enjoy working across the
                  full stack — from the interface you see to the logic that runs behind it.
                </p>
                <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
                  I have long been interested in amateur radio and how Morse code still matters in communication
                  history and practice. When I looked for a straightforward online translator - one that sounded right,
                  worked on a phone, and did not need an account - I kept finding tools that were cluttered or hard to
                  use. I built Morse Code World to fill that gap: a clean, fast translator I would actually want to
                  open myself.
                </p>
                <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
                  Everything on this site - the code, the design, and the blog posts - is maintained by me. There is no
                  company behind it, just a personal project I keep improving in my spare time.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={DEVELOPER.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-4 py-2 font-headline text-sm font-bold text-neutral-800 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
              >
                Portfolio
              </a>
              <a
                href={DEVELOPER.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-4 py-2 font-headline text-sm font-bold text-neutral-800 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
              >
                GitHub
              </a>
              <a
                href={DEVELOPER.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-4 py-2 font-headline text-sm font-bold text-neutral-800 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-surface-container dark:text-on-surface dark:hover:bg-surface-bright"
              >
                LinkedIn
              </a>
            </div>

            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              What You Will Find Here
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              The core tool is the{" "}
              <Link href="/" className={linkClass}>
                Morse code translator
              </Link>
              : type text and hear it played back with adjustable speed and pitch, or paste Morse and read the
              decoded message. The site follows{" "}
              <strong className="text-neutral-800 dark:text-slate-200">ITU International Morse Code</strong> — the
              standard used in amateur radio today, not the older American railroad variant.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              There is also an{" "}
              <Link href="/audio-morse-code-decoder" className={linkClass}>
                audio Morse decoder
              </Link>
              , a{" "}
              <Link href="/morse-code-picture-translator" className={linkClass}>
                picture Morse translator
              </Link>
              , and a{" "}
              <Link href="/blog" className={linkClass}>
                learning blog
              </Link>{" "}
              with guides on history, technique, and how Morse is still used.
            </p>

            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              Location
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Morse Code World is operated from Sri Lanka under the domain{" "}
              <span className="font-mono text-xs">morsecodeworld.org</span>.
            </p>
            <SiteAddress variant="card" className="mt-5" />

            <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
              Contact
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
              Questions, bug reports, or suggestions? I read every message and try to reply within a few days.
            </p>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary-container px-6 py-2.5 font-headline text-sm font-bold text-on-primary-container shadow-neon-primary transition-opacity hover:opacity-90 dark:text-on-primary-container"
              >
                Go to Contact Page →
              </Link>
            </div>

            <p className="mt-12 font-label text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">
              <Link href="/" className="text-emerald-600 hover:underline dark:text-primary-container">
                ← Return to translator
              </Link>
            </p>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 {SITE_NAME}</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    </div>
  );
}

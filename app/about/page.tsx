import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Morse Code Translator",
  description:
    "About Morse Code Translator: International Morse practice tools operated from the United States, with contact details and editorial information for visitors and search engines.",
  keywords: [
    "morse code translator",
    "morse code decoder",
    "about morse translator",
    "USA",
    "International Morse Code"
  ]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 dark:bg-surface-container-lowest dark:text-on-surface">
      <header className="border-b border-slate-200/80 bg-neutral-100/90 px-4 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#0A0E17]/90 md:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="font-headline text-sm font-bold text-emerald-600 hover:text-emerald-500 dark:text-primary-container dark:hover:text-primary-fixed sm:text-base"
          >
            ← Morse Code Translator
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
        <h1 className="font-headline text-2xl font-bold tracking-tight text-neutral-900 dark:text-on-surface sm:text-3xl">
          About Morse Code Translator
        </h1>
        <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
          Morse Code Translator is a small, focused web application for learning and practicing{" "}
          <strong className="text-neutral-800 dark:text-slate-200">International Morse Code</strong>—the alphabet commonly
          used on amateur and maritime radio today. We built it so students, hobbyists, and curious visitors could encode
          and decode text, hear realistic timing, and adjust speed and tone without installing desktop software. The
          interface is designed to work on phones and desktops so you can practice during a break or at a desk.
        </p>
        <p className="mt-4 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
          Content and product decisions emphasize clarity and honesty: we describe International Morse explicitly because it
          differs from historical <strong className="text-neutral-800 dark:text-slate-200">American Morse</strong> (railroad
          and landline telegraph) in several characters and timing rules. If your goal is railroad-era transcription, seek
          specialized references; our translator follows the international mapping most radio operators study.
        </p>

        <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
          Location (United States)
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
          Editorial and technical operations for this site are associated with a U.S.-based project. Correspondence and
          business filings may be directed to the mailing address below.{" "}
          <strong className="text-neutral-800 dark:text-slate-200">
            This address is a placeholder for demonstration and contact routing only
          </strong>
          ; verify any legal or official matter through channels published on your invoice or support ticket.
        </p>
        <address className="mt-6 not-italic rounded-2xl border border-slate-200/80 bg-white p-5 font-body text-sm leading-relaxed text-slate-700 shadow-sm dark:border-white/10 dark:bg-surface-container dark:text-slate-300 sm:p-6 sm:text-base">
          <div className="font-headline font-bold text-neutral-900 dark:text-on-surface">Morse Code Translator Media</div>
          <div className="mt-2">Suite 400</div>
          <div>1420 Liberty Avenue</div>
          <div>Pittsburgh, PA 15222</div>
          <div className="mt-2">United States of America</div>
        </address>

        <h2 className="mt-10 font-headline text-lg font-bold text-neutral-900 dark:text-on-surface sm:text-xl">
          Contact
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base sm:leading-7">
          For general questions about the translator, accessibility, or licensing of the output you generate, use the
          contact options you may add later (for example a form or support email). This page exists to help users and search
          engines understand who maintains the tool and where the project is rooted geographically.
        </p>

        <p className="mt-10 font-label text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500">
          <Link href="/" className="text-emerald-600 hover:underline dark:text-primary-container">
            Return to translator
          </Link>
        </p>
      </main>

      <footer className="border-t border-slate-200/80 py-6 text-center dark:border-white/10">
        <p className="font-label text-[10px] text-slate-500 dark:text-slate-600">© 2026 Morse Code Translator</p>
      </footer>
    </div>
  );
}

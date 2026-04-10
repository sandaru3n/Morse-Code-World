"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconAccount, IconSettings } from "@/components/SignalPulseIcons";

const navLink =
  "font-headline text-sm font-bold tracking-tight transition-colors duration-300 hover:text-emerald-400 md:text-base dark:text-[#DFE2EF] dark:hover:text-emerald-300";
const navActive = "border-b-2 border-emerald-400 pb-1 text-emerald-400";

const iconBtn =
  "scale-95 text-neutral-700 transition-colors hover:text-emerald-600 active:scale-90 dark:text-on-surface dark:hover:text-primary-container";

export type SiteTopBarProps = {
  /** When set, gear opens the translator configure modal; otherwise it links home. */
  onConfigureClick?: () => void;
};

export function SiteTopBar({ onConfigureClick }: SiteTopBarProps) {
  const pathname = usePathname() ?? "/";
  const isTranslator = pathname === "/";
  const isAbout = pathname === "/about";
  const isPicture = pathname === "/morse-code-picture-translator";

  return (
    <header className="fixed top-0 z-50 flex h-[4.5rem] w-full items-center justify-between bg-neutral-100/80 px-4 shadow-[0_16px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:bg-[#0A0E17]/80 dark:shadow-[0_16px_32px_rgba(0,0,0,0.38)] md:px-8">
      <div className="flex min-w-0 flex-1 items-center md:flex-none">
        <Link
          href="/"
          className="group flex min-w-0 max-w-full items-center gap-2.5 transition-opacity hover:opacity-95 sm:gap-3"
        >
          <img
            src="/favicon/android-chrome-192x192.png"
            alt=""
            width={40}
            height={40}
            fetchPriority="high"
            decoding="async"
            className="size-8 shrink-0 rounded-lg object-contain ring-1 ring-emerald-500/25 dark:ring-[#50FA7B]/30 sm:size-9"
          />
          <span className="truncate font-headline text-base font-black tracking-tight text-emerald-500 transition-colors group-hover:text-emerald-400 dark:text-[#50FA7B] dark:group-hover:text-emerald-300 sm:text-lg md:text-xl lg:text-2xl">
            morsecodeworld.org
          </span>
        </Link>
      </div>
      <nav className="hidden flex-1 items-center justify-center gap-8 lg:gap-10 md:flex" aria-label="Main">
        <Link className={`${navLink} ${isTranslator ? navActive : ""}`} href="/">
          Translator
        </Link>
        <Link className={`${navLink} ${isAbout ? navActive : ""}`} href="/about">
          About
        </Link>
        <Link
          className={`${navLink} ${isPicture ? navActive : ""}`}
          href="/morse-code-picture-translator"
          title="Morse code picture translator"
        >
          Morse picture
        </Link>
        <a className={navLink} href="#">
          Settings
        </a>
      </nav>
      <div className="flex flex-shrink-0 items-center gap-1 md:gap-3">
        {onConfigureClick ? (
          <button type="button" className={iconBtn} aria-label="Configure" onClick={onConfigureClick}>
            <IconSettings className="h-6 w-6" />
          </button>
        ) : (
          <Link href="/" className={iconBtn} aria-label="Configure (open translator)">
            <IconSettings className="h-6 w-6" />
          </Link>
        )}
        <button type="button" className={iconBtn} aria-label="Account">
          <IconAccount className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

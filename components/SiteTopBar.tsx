"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose, IconMenu } from "@/components/SignalPulseIcons";

const navLink =
  "font-headline text-sm font-bold tracking-tight transition-colors duration-300 hover:text-emerald-400 md:text-base dark:text-[#DFE2EF] dark:hover:text-emerald-300";
const navActive = "border-b-2 border-emerald-400 pb-1 text-emerald-400";

const mobileNavItem =
  "block rounded-xl px-4 py-3.5 font-headline text-base font-bold text-neutral-800 transition-colors hover:bg-emerald-500/10 active:bg-emerald-500/15 dark:text-on-surface dark:hover:bg-primary-container/10";

export function SiteTopBar() {
  const pathname = usePathname() ?? "/";
  const isTranslator = pathname === "/";
  const isAbout = pathname === "/about";
  const isPicture = pathname === "/morse-code-picture-translator";
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButtonId = useId();
  const panelId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const mobileMenu =
    mounted && menuOpen ? (
      <>
        <button
          type="button"
          className="fixed bottom-0 left-0 right-0 top-[4.5rem] z-[70] bg-black/45 backdrop-blur-[2px] md:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${panelId}-title`}
          className="fixed bottom-0 right-0 top-[4.5rem] z-[80] flex w-[min(20rem,100vw)] flex-col border-l border-slate-200/80 bg-neutral-100 shadow-[-8px_0_32px_rgba(0,0,0,0.12)] dark:border-outline-variant/30 dark:bg-[#0A0E17] md:hidden"
        >
          <div className="shrink-0 border-b border-slate-200/80 px-4 py-3 dark:border-outline-variant/30">
            <h2 id={`${panelId}-title`} className="font-headline text-base font-bold text-neutral-900 dark:text-on-surface">
              Menu
            </h2>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Mobile main">
            <Link
              className={`${mobileNavItem} ${isTranslator ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/"
              onClick={closeMenu}
            >
              Translator
            </Link>
            <Link
              className={`${mobileNavItem} ${isAbout ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/about"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              className={`${mobileNavItem} ${isPicture ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/morse-code-picture-translator"
              title="Morse code picture translator"
              onClick={closeMenu}
            >
              Morse picture
            </Link>
            <a
              className={`${mobileNavItem} opacity-80`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
              }}
            >
              Settings
            </a>
          </nav>
        </div>
      </>
    ) : null;

  return (
    <>
      <header
        className={`fixed top-0 flex h-[4.5rem] w-full items-center justify-between gap-3 bg-neutral-100/80 px-4 shadow-[0_16px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:bg-[#0A0E17]/80 dark:shadow-[0_16px_32px_rgba(0,0,0,0.38)] md:px-8 ${menuOpen ? "z-[100]" : "z-50"}`}
      >
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

        <div className="flex shrink-0 items-center md:hidden">
          <button
            id={menuButtonId}
            type="button"
            className="rounded-xl p-2.5 text-neutral-800 transition-colors hover:bg-emerald-500/10 active:scale-95 dark:text-on-surface dark:hover:bg-primary-container/15"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-haspopup="dialog"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <IconClose className="h-7 w-7" /> : <IconMenu className="h-7 w-7" />}
          </button>
        </div>
      </header>
      {mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}

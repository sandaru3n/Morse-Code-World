"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose, IconMenu } from "@/components/SignalPulseIcons";
import type { HomeLocale } from "@/lib/i18n/home";
import { audioDecoderPath, homePath, pictureTranslatorPath, TOOL_SLUGS } from "@/lib/i18n/routes";
import { localeFromPathname } from "@/lib/localeFromPath";

const navLink =
  "font-headline text-sm font-bold tracking-tight transition-colors duration-300 hover:text-emerald-400 md:text-base dark:text-[#DFE2EF] dark:hover:text-emerald-300";
const navActive = "border-b-2 border-emerald-400 pb-1 text-emerald-400";

const mobileNavItem =
  "block rounded-xl px-4 py-3.5 font-headline text-base font-bold text-neutral-800 transition-colors hover:bg-emerald-500/10 active:bg-emerald-500/15 dark:text-on-surface dark:hover:bg-primary-container/10";

type TopBarLocale = HomeLocale;

const COPY: Record<
  TopBarLocale,
  {
    menu: string;
    closeMenu: string;
    openMenu: string;
    mobileMain: string;
    translator: string;
    about: string;
    morsePicture: string;
    audioDecoder: string;
    tools: string;
    blog: string;
    privacy: string;
    terms: string;
    contact: string;
  }
> = {
  en: {
    menu: "Menu",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    mobileMain: "Mobile main",
    translator: "Morse Code Translator",
    about: "About",
    morsePicture: "Morse Code Picture",
    audioDecoder: "Morse Code Audio",
    tools: "Tools",
    blog: "Blog",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact"
  },
  es: {
    menu: "Menu",
    closeMenu: "Cerrar menu",
    openMenu: "Abrir menu",
    mobileMain: "Navegacion movil",
    translator: "Traductor de Morse",
    about: "Acerca de",
    morsePicture: "Morse Imagen",
    audioDecoder: "Morse Audio",
    tools: "Herramientas",
    blog: "Blog",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto"
  },
  ko: {
    menu: "메뉴",
    closeMenu: "메뉴 닫기",
    openMenu: "메뉴 열기",
    mobileMain: "모바일 메인 탐색",
    translator: "모스 번역기",
    about: "소개",
    morsePicture: "모스 이미지",
    audioDecoder: "모스 오디오",
    tools: "도구",
    blog: "블로그",
    privacy: "개인정보",
    terms: "이용약관",
    contact: "문의"
  },
  zh: {
    menu: "選單",
    closeMenu: "關閉選單",
    openMenu: "開啟選單",
    mobileMain: "行動版主選單",
    translator: "摩斯翻譯器",
    about: "關於",
    morsePicture: "摩斯圖片",
    audioDecoder: "摩斯音訊",
    tools: "工具",
    blog: "部落格",
    privacy: "隱私",
    terms: "條款",
    contact: "聯絡"
  },
  pt: {
    menu: "Menu",
    closeMenu: "Fechar menu",
    openMenu: "Abrir menu",
    mobileMain: "Navegacao principal movel",
    translator: "Tradutor Morse",
    about: "Sobre",
    morsePicture: "Morse Imagem",
    audioDecoder: "Morse Áudio",
    tools: "Ferramentas",
    blog: "Blog",
    privacy: "Privacidade",
    terms: "Termos",
    contact: "Contato"
  },
  ar: {
    menu: "القائمة",
    closeMenu: "اغلاق القائمة",
    openMenu: "فتح القائمة",
    mobileMain: "التنقل الرئيسي للجوال",
    translator: "مترجم مورس",
    about: "حول",
    morsePicture: "صورة مورس",
    audioDecoder: "صوت مورس",
    tools: "الأدوات",
    blog: "مدونة",
    privacy: "الخصوصية",
    terms: "الشروط",
    contact: "اتصل"
  },
  ja: {
    menu: "メニュー",
    closeMenu: "メニューを閉じる",
    openMenu: "メニューを開く",
    mobileMain: "モバイルメインナビ",
    translator: "モールス翻訳機",
    about: "概要",
    morsePicture: "モールス画像",
    audioDecoder: "モールス音声",
    tools: "ツール",
    blog: "ブログ",
    privacy: "プライバシー",
    terms: "利用規約",
    contact: "お問い合わせ"
  },
  ru: {
    menu: "Меню",
    closeMenu: "Закрыть меню",
    openMenu: "Открыть меню",
    mobileMain: "Главная мобильная навигация",
    translator: "Переводчик Морзе",
    about: "О проекте",
    morsePicture: "Изображение Морзе",
    audioDecoder: "Аудио Морзе",
    tools: "Инструменты",
    blog: "Блог",
    privacy: "Конфиденц.",
    terms: "Условия",
    contact: "Контакт"
  },
  de: {
    menu: "Menü",
    closeMenu: "Menü schließen",
    openMenu: "Menü öffnen",
    mobileMain: "Mobile Hauptnavigation",
    translator: "Morse-Übersetzer",
    about: "Über",
    morsePicture: "Morse-Bild",
    audioDecoder: "Morse-Audio",
    tools: "Tools",
    blog: "Blog",
    privacy: "Datenschutz",
    terms: "Nutzungsbeding.",
    contact: "Kontakt"
  },
  cs: {
    menu: "Menu",
    closeMenu: "Zavřít menu",
    openMenu: "Otevřít menu",
    mobileMain: "Hlavní mobilní navigace",
    translator: "Morse překladač",
    about: "O projektu",
    morsePicture: "Morse obrázek",
    audioDecoder: "Morse audio",
    tools: "Nástroje",
    blog: "Blog",
    privacy: "Ochrana dat",
    terms: "Podmínky",
    contact: "Kontakt"
  },
  fr: {
    menu: "Menu",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
    mobileMain: "Navigation principale mobile",
    translator: "Traducteur Morse",
    about: "À propos",
    morsePicture: "Image Morse",
    audioDecoder: "Audio Morse",
    tools: "Outils",
    blog: "Blog",
    privacy: "Confidentialité",
    terms: "Conditions",
    contact: "Contact"
  },
  it: {
    menu: "Menu",
    closeMenu: "Chiudi menu",
    openMenu: "Apri menu",
    mobileMain: "Navigazione principale mobile",
    translator: "Traduttore Morse",
    about: "Info",
    morsePicture: "Immagine Morse",
    audioDecoder: "Audio Morse",
    tools: "Strumenti",
    blog: "Blog",
    privacy: "Privacy",
    terms: "Termini",
    contact: "Contatto"
  },
  tr: {
    menu: "Menü",
    closeMenu: "Menüyü kapat",
    openMenu: "Menüyü aç",
    mobileMain: "Mobil ana navigasyon",
    translator: "Mors Çevirici",
    about: "Hakkında",
    morsePicture: "Mors Resmi",
    audioDecoder: "Mors Ses",
    tools: "Araçlar",
    blog: "Blog",
    privacy: "Gizlilik",
    terms: "Koşullar",
    contact: "İletişim"
  },
  pl: {
    menu: "Menu",
    closeMenu: "Zamknij menu",
    openMenu: "Otwórz menu",
    mobileMain: "Mobilna nawigacja główna",
    translator: "Tłumacz Morse",
    about: "O nas",
    morsePicture: "Obraz Morse",
    audioDecoder: "Audio Morse",
    tools: "Narzędzia",
    blog: "Blog",
    privacy: "Prywatność",
    terms: "Warunki",
    contact: "Kontakt"
  },
  nl: {
    menu: "Menu",
    closeMenu: "Menu sluiten",
    openMenu: "Menu openen",
    mobileMain: "Mobiele hoofdnavigatie",
    translator: "Morse Vertaler",
    about: "Over",
    morsePicture: "Morse Afbeelding",
    audioDecoder: "Morse Audio",
    tools: "Tools",
    blog: "Blog",
    privacy: "Privacy",
    terms: "Voorwaarden",
    contact: "Contact"
  },
  hi: {
    menu: "मेनू",
    closeMenu: "मेनू बंद करें",
    openMenu: "मेनू खोलें",
    mobileMain: "मोबाइल मुख्य नेविगेशन",
    translator: "मोर्स अनुवादक",
    about: "के बारे में",
    morsePicture: "मोर्स चित्र",
    audioDecoder: "मोर्स ऑडियो",
    tools: "उपकरण",
    blog: "ब्लॉग",
    privacy: "गोपनीयता",
    terms: "शर्तें",
    contact: "संपर्क"
  },
  id: {
    menu: "Menu",
    closeMenu: "Tutup menu",
    openMenu: "Buka menu",
    mobileMain: "Navigasi utama seluler",
    translator: "Penerjemah Morse",
    about: "Tentang",
    morsePicture: "Gambar Morse",
    audioDecoder: "Audio Morse",
    tools: "Alat",
    blog: "Blog",
    privacy: "Privasi",
    terms: "Syarat",
    contact: "Kontak"
  },
  vi: {
    menu: "Menu",
    closeMenu: "Đóng menu",
    openMenu: "Mở menu",
    mobileMain: "Điều hướng chính di động",
    translator: "Máy dịch Morse",
    about: "Giới thiệu",
    morsePicture: "Ảnh Morse",
    audioDecoder: "Âm thanh Morse",
    tools: "Công cụ",
    blog: "Blog",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
    contact: "Liên hệ"
  },
  th: {
    menu: "เมนู",
    closeMenu: "ปิดเมนู",
    openMenu: "เปิดเมนู",
    mobileMain: "การนำทางหลักบนมือถือ",
    translator: "แปลรหัสมอร์ส",
    about: "เกี่ยวกับ",
    morsePicture: "รูปภาพมอร์ส",
    audioDecoder: "เสียงมอร์ส",
    tools: "เครื่องมือ",
    blog: "บล็อก",
    privacy: "ความเป็นส่วนตัว",
    terms: "ข้อกำหนด",
    contact: "ติดต่อ"
  },
  uk: {
    menu: "Меню",
    closeMenu: "Закрити меню",
    openMenu: "Відкрити меню",
    mobileMain: "Головна мобільна навігація",
    translator: "Перекладач Морзе",
    about: "Про нас",
    morsePicture: "Зображення Морзе",
    audioDecoder: "Аудіо Морзе",
    tools: "Інструменти",
    blog: "Блог",
    privacy: "Конфіденційність",
    terms: "Умови",
    contact: "Контакт"
  }
};

export function SiteTopBar({ locale: localeProp }: { locale?: TopBarLocale }) {
  const pathname = usePathname() ?? "/";
  const locale = localeProp ?? localeFromPathname(pathname);
  const c = COPY[locale];
  const hp = homePath(locale);
  const audioHref = audioDecoderPath(locale);
  const pictureHref = pictureTranslatorPath(locale);
  const isTranslator = pathname === hp;
  const isAbout = pathname === "/about";
  const isPicture = pathname === pictureHref || pathname.endsWith(TOOL_SLUGS.picture);
  const isAudioDecoder = pathname === audioHref || pathname.endsWith(TOOL_SLUGS.audio);
  const isPrivacy = pathname === "/privacy";
  const isTerms = pathname === "/terms";
  const isContact = pathname === "/contact";
  const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");
  const isAnyTool = isTranslator || isPicture || isAudioDecoder;
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuButtonId = useId();
  const panelId = useId();
  const toolsRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeTools = useCallback(() => setToolsOpen(false), []);

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

  useEffect(() => {
    closeTools();
  }, [pathname, closeTools]);

  useEffect(() => {
    if (!toolsOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeTools(); };
    const onClickOutside = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) closeTools();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [toolsOpen, closeTools]);

  const mobileMenu =
    mounted && menuOpen ? (
      <>
        <button
          type="button"
          className="fixed bottom-0 left-0 right-0 top-[4.5rem] z-[70] bg-black/45 backdrop-blur-[2px] md:hidden"
          aria-label={c.closeMenu}
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
              {c.menu}
            </h2>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label={c.mobileMain}>
            {/* Tools group */}
            <div className={`rounded-xl ${isAnyTool ? "bg-emerald-500/8 dark:bg-primary-container/10" : ""}`}>
              <div className="px-4 pb-1 pt-2.5 font-label text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-primary-container">
                {c.tools}
              </div>
              <Link
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 font-headline text-sm font-bold text-neutral-800 transition-colors hover:bg-emerald-500/10 dark:text-on-surface dark:hover:bg-primary-container/10 ${isTranslator ? "text-emerald-700 dark:text-primary-container" : ""}`}
                href={hp}
                onClick={closeMenu}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100 text-base dark:bg-primary-container/20">⠿</span>
                {c.translator}
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 font-headline text-sm font-bold text-neutral-800 transition-colors hover:bg-emerald-500/10 dark:text-on-surface dark:hover:bg-primary-container/10 ${isPicture ? "text-emerald-700 dark:text-primary-container" : ""}`}
                href={pictureHref}
                onClick={closeMenu}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-100 text-base dark:bg-violet-900/30">🖼</span>
                {c.morsePicture}
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-xl px-4 pb-2.5 pt-2.5 font-headline text-sm font-bold text-neutral-800 transition-colors hover:bg-emerald-500/10 dark:text-on-surface dark:hover:bg-primary-container/10 ${isAudioDecoder ? "text-emerald-700 dark:text-primary-container" : ""}`}
                href={audioHref}
                onClick={closeMenu}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-100 text-base dark:bg-sky-900/30">🎧</span>
                {c.audioDecoder}
              </Link>
            </div>
            <Link
              className={`${mobileNavItem} ${isAbout ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/about"
              onClick={closeMenu}
            >
              {c.about}
            </Link>
            <Link
              className={`${mobileNavItem} ${isBlog ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/blog"
              onClick={closeMenu}
            >
              {c.blog}
            </Link>
            <Link
              className={`${mobileNavItem} ${isPrivacy ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/privacy"
              onClick={closeMenu}
            >
              {c.privacy}
            </Link>
            <Link
              className={`${mobileNavItem} ${isTerms ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/terms"
              onClick={closeMenu}
            >
              {c.terms}
            </Link>
            <Link
              className={`${mobileNavItem} ${isContact ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/contact"
              onClick={closeMenu}
            >
              {c.contact}
            </Link>
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
            href={hp}
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
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:gap-8 md:flex" aria-label="Main">
          {/* Tools dropdown */}
          <div ref={toolsRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={toolsOpen}
              onClick={() => setToolsOpen((o) => !o)}
              className={`flex items-center gap-1 ${navLink} ${isAnyTool ? navActive : ""}`}
            >
              {c.tools}
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"
              >
                <path d="M8 10.94 2.53 5.47l1.06-1.06L8 8.81l4.41-4.4 1.06 1.06z" />
              </svg>
            </button>

            {toolsOpen && (
              <div className="absolute left-1/2 top-full z-[200] mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl dark:border-outline-variant/30 dark:bg-surface-container">
                {/* pointer arrow */}
                <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-slate-200/80 bg-white dark:border-outline-variant/30 dark:bg-surface-container" aria-hidden="true" />
                <div className="relative p-1.5">
                  <Link
                    href={hp}
                    onClick={closeTools}
                    className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-emerald-50 dark:hover:bg-primary-container/10 ${isTranslator ? "bg-emerald-50 dark:bg-primary-container/15" : ""}`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-xl dark:bg-primary-container/20">⠿</span>
                    <div>
                      <div className="font-headline text-sm font-bold text-neutral-900 dark:text-on-surface">{c.translator}</div>
                      <div className="mt-0.5 font-label text-[11px] text-slate-500 dark:text-slate-400">Text ↔ Morse · sound · download</div>
                    </div>
                  </Link>
                  <Link
                    href={pictureHref}
                    onClick={closeTools}
                    className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-emerald-50 dark:hover:bg-primary-container/10 ${isPicture ? "bg-emerald-50 dark:bg-primary-container/15" : ""}`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-xl dark:bg-violet-900/30">🖼</span>
                    <div>
                      <div className="font-headline text-sm font-bold text-neutral-900 dark:text-on-surface">{c.morsePicture}</div>
                      <div className="mt-0.5 font-label text-[11px] text-slate-500 dark:text-slate-400">Upload image → decode Morse</div>
                    </div>
                  </Link>
                  <Link
                    href={audioHref}
                    onClick={closeTools}
                    className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-emerald-50 dark:hover:bg-primary-container/10 ${isAudioDecoder ? "bg-emerald-50 dark:bg-primary-container/15" : ""}`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-xl dark:bg-sky-900/30">🎧</span>
                    <div>
                      <div className="font-headline text-sm font-bold text-neutral-900 dark:text-on-surface">{c.audioDecoder}</div>
                      <div className="mt-0.5 font-label text-[11px] text-slate-500 dark:text-slate-400">Upload audio file → decode Morse</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link className={`${navLink} ${isBlog ? navActive : ""}`} href="/blog">
            {c.blog}
          </Link>
          <Link className={`${navLink} ${isAbout ? navActive : ""}`} href="/about">
            {c.about}
          </Link>
          <Link className={`${navLink} ${isPrivacy ? navActive : ""}`} href="/privacy">
            {c.privacy}
          </Link>
          <Link className={`${navLink} ${isTerms ? navActive : ""}`} href="/terms">
            {c.terms}
          </Link>
          <Link className={`${navLink} ${isContact ? navActive : ""}`} href="/contact">
            {c.contact}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center md:hidden">
          <button
            id={menuButtonId}
            type="button"
            className="rounded-xl p-2.5 text-neutral-800 transition-colors hover:bg-emerald-500/10 active:scale-95 dark:text-on-surface dark:hover:bg-primary-container/15"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-haspopup="dialog"
            aria-label={menuOpen ? c.closeMenu : c.openMenu}
            onClick={() => startTransition(() => setMenuOpen((o) => !o))}
          >
            {menuOpen ? <IconClose className="h-7 w-7" /> : <IconMenu className="h-7 w-7" />}
          </button>
        </div>
      </header>
      {mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}

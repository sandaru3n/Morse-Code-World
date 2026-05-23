"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
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
    settings: string;
  }
> = {
  en: {
    menu: "Menu",
    closeMenu: "Close menu",
    openMenu: "Open menu",
    mobileMain: "Mobile main",
    translator: "Translator",
    about: "About",
    morsePicture: "Morse picture",
    audioDecoder: "Audio decoder",
    settings: "Settings"
  },
  es: {
    menu: "Menu",
    closeMenu: "Cerrar menu",
    openMenu: "Abrir menu",
    mobileMain: "Navegacion movil",
    translator: "Traductor",
    about: "Acerca de",
    morsePicture: "Morse imagen",
    audioDecoder: "Decodificador audio",
    settings: "Configuracion"
  },
  ko: {
    menu: "메뉴",
    closeMenu: "메뉴 닫기",
    openMenu: "메뉴 열기",
    mobileMain: "모바일 메인 탐색",
    translator: "번역기",
    about: "소개",
    morsePicture: "모스 이미지",
    audioDecoder: "오디오 디코더",
    settings: "설정"
  },
  zh: {
    menu: "選單",
    closeMenu: "關閉選單",
    openMenu: "開啟選單",
    mobileMain: "行動版主選單",
    translator: "翻譯器",
    about: "關於",
    morsePicture: "摩斯圖片",
    audioDecoder: "音訊解碼",
    settings: "設定"
  },
  pt: {
    menu: "Menu",
    closeMenu: "Fechar menu",
    openMenu: "Abrir menu",
    mobileMain: "Navegacao principal movel",
    translator: "Tradutor",
    about: "Sobre",
    morsePicture: "Morse imagem",
    audioDecoder: "Decodificador de audio",
    settings: "Configuracoes"
  },
  ar: {
    menu: "القائمة",
    closeMenu: "اغلاق القائمة",
    openMenu: "فتح القائمة",
    mobileMain: "التنقل الرئيسي للجوال",
    translator: "المترجم",
    about: "حول",
    morsePicture: "صورة مورس",
    audioDecoder: "فك تشفير الصوت",
    settings: "الاعدادات"
  },
  ja: {
    menu: "メニュー",
    closeMenu: "メニューを閉じる",
    openMenu: "メニューを開く",
    mobileMain: "モバイルメインナビ",
    translator: "翻訳機",
    about: "概要",
    morsePicture: "モールス画像",
    audioDecoder: "音声デコーダー",
    settings: "設定"
  },
  ru: {
    menu: "Меню",
    closeMenu: "Закрыть меню",
    openMenu: "Открыть меню",
    mobileMain: "Главная мобильная навигация",
    translator: "Переводчик",
    about: "О проекте",
    morsePicture: "Изображение Морзе",
    audioDecoder: "Аудиодекодер",
    settings: "Настройки"
  },
  de: {
    menu: "Menü",
    closeMenu: "Menü schließen",
    openMenu: "Menü öffnen",
    mobileMain: "Mobile Hauptnavigation",
    translator: "Übersetzer",
    about: "Über",
    morsePicture: "Morsebild",
    audioDecoder: "Audio-Decoder",
    settings: "Einstellungen"
  },
  cs: {
    menu: "Menu",
    closeMenu: "Zavřít menu",
    openMenu: "Otevřít menu",
    mobileMain: "Hlavní mobilní navigace",
    translator: "Překladač",
    about: "O projektu",
    morsePicture: "Morse obrázek",
    audioDecoder: "Audio dekodér",
    settings: "Nastavení"
  },
  fr: {
    menu: "Menu",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
    mobileMain: "Navigation principale mobile",
    translator: "Traducteur",
    about: "À propos",
    morsePicture: "Image Morse",
    audioDecoder: "Décodeur audio",
    settings: "Paramètres"
  },
  it: {
    menu: "Menu",
    closeMenu: "Chiudi menu",
    openMenu: "Apri menu",
    mobileMain: "Navigazione principale mobile",
    translator: "Traduttore",
    about: "Info",
    morsePicture: "Immagine Morse",
    audioDecoder: "Decodificatore audio",
    settings: "Impostazioni"
  },
  tr: {
    menu: "Menü",
    closeMenu: "Menüyü kapat",
    openMenu: "Menüyü aç",
    mobileMain: "Mobil ana navigasyon",
    translator: "Çevirici",
    about: "Hakkında",
    morsePicture: "Mors resmi",
    audioDecoder: "Ses çözücü",
    settings: "Ayarlar"
  },
  pl: {
    menu: "Menu",
    closeMenu: "Zamknij menu",
    openMenu: "Otwórz menu",
    mobileMain: "Mobilna nawigacja główna",
    translator: "Tłumacz",
    about: "O nas",
    morsePicture: "Obraz Morse",
    audioDecoder: "Dekoder audio",
    settings: "Ustawienia"
  },
  nl: {
    menu: "Menu",
    closeMenu: "Menu sluiten",
    openMenu: "Menu openen",
    mobileMain: "Mobiele hoofdnavigatie",
    translator: "Vertaler",
    about: "Over",
    morsePicture: "Morse afbeelding",
    audioDecoder: "Audio decoder",
    settings: "Instellingen"
  },
  hi: {
    menu: "मेनू",
    closeMenu: "मेनू बंद करें",
    openMenu: "मेनू खोलें",
    mobileMain: "मोबाइल मुख्य नेविगेशन",
    translator: "अनुवादक",
    about: "के बारे में",
    morsePicture: "मोर्स चित्र",
    audioDecoder: "ऑडियो डिकोडर",
    settings: "सेटिंग्स"
  },
  id: {
    menu: "Menu",
    closeMenu: "Tutup menu",
    openMenu: "Buka menu",
    mobileMain: "Navigasi utama seluler",
    translator: "Penerjemah",
    about: "Tentang",
    morsePicture: "Gambar Morse",
    audioDecoder: "Dekoder audio",
    settings: "Pengaturan"
  },
  vi: {
    menu: "Menu",
    closeMenu: "Đóng menu",
    openMenu: "Mở menu",
    mobileMain: "Điều hướng chính di động",
    translator: "Máy dịch",
    about: "Giới thiệu",
    morsePicture: "Ảnh Morse",
    audioDecoder: "Giải mã âm thanh",
    settings: "Cài đặt"
  },
  th: {
    menu: "เมนู",
    closeMenu: "ปิดเมนู",
    openMenu: "เปิดเมนู",
    mobileMain: "การนำทางหลักบนมือถือ",
    translator: "เครื่องแปล",
    about: "เกี่ยวกับ",
    morsePicture: "รูปภาพมอร์ส",
    audioDecoder: "ตัวถอดรหัสเสียง",
    settings: "การตั้งค่า"
  },
  uk: {
    menu: "Меню",
    closeMenu: "Закрити меню",
    openMenu: "Відкрити меню",
    mobileMain: "Головна мобільна навігація",
    translator: "Перекладач",
    about: "Про нас",
    morsePicture: "Зображення Морзе",
    audioDecoder: "Аудіодекодер",
    settings: "Налаштування"
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
            <Link
              className={`${mobileNavItem} ${isTranslator ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href={hp}
              onClick={closeMenu}
            >
              {c.translator}
            </Link>
            <Link
              className={`${mobileNavItem} ${isAbout ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href="/about"
              onClick={closeMenu}
            >
              {c.about}
            </Link>
            <Link
              className={`${mobileNavItem} ${isPicture ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href={pictureHref}
              title="Morse code picture translator"
              onClick={closeMenu}
            >
              {c.morsePicture}
            </Link>
            <Link
              className={`${mobileNavItem} ${isAudioDecoder ? "bg-emerald-500/15 text-emerald-700 dark:bg-primary-container/20 dark:text-primary-container" : ""}`}
              href={audioHref}
              title="Audio Morse code decoder"
              onClick={closeMenu}
            >
              {c.audioDecoder}
            </Link>
            <a
              className={`${mobileNavItem} opacity-80`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
              }}
            >
              {c.settings}
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
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:gap-10 md:flex" aria-label="Main">
          <Link className={`${navLink} ${isTranslator ? navActive : ""}`} href={hp}>
            {c.translator}
          </Link>
          <Link className={`${navLink} ${isAbout ? navActive : ""}`} href="/about">
            {c.about}
          </Link>
          <Link
            className={`${navLink} ${isPicture ? navActive : ""}`}
            href={pictureHref}
            title="Morse code picture translator"
          >
            {c.morsePicture}
          </Link>
          <Link
            className={`${navLink} ${isAudioDecoder ? navActive : ""}`}
            href={audioHref}
            title="Audio Morse code decoder"
          >
            {c.audioDecoder}
          </Link>
          <a className={navLink} href="#">
            {c.settings}
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
            aria-label={menuOpen ? c.closeMenu : c.openMenu}
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

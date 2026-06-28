import type { Metadata, Viewport } from "next";
import { DeferredVercelScripts } from "@/components/DeferredVercelScripts";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { GlobalAiSeoJsonLd } from "@/components/GlobalAiSeoJsonLd";
import type { HomeLocale } from "@/lib/i18n/home";
import { SITE_NAME } from "@/lib/site";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "300 700",
  preload: true,
  fallback: ["system-ui", "sans-serif"]
});

const manrope = localFont({
  src: "./fonts/Manrope-Variable.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
  preload: true,
  fallback: ["system-ui", "sans-serif"]
});

const ADSENSE_CLIENT = "ca-pub-7227917768990151";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  applicationName: SITE_NAME,
  title: "Morse Code Translator - Convert Morse Code to Text Online",
  description:
    "Easily translate Morse code to text with our online Morse code translator. Decode or encode messages quickly and accurately. Try it now!",
  keywords: [
    "morse code translator",
    "convert morse code to text online",
    "morse code to text",
    "morse code decoder",
    "american morse code translator",
    "convert morse code to english",
    "morse alphabet translator",
    "morse translator",
    "text to morse",
    "morse to text",
    "morse code encoder"
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "Morse Code Translator - Convert Morse Code to Text Online",
    description:
      "Easily translate Morse code to text with our online Morse code translator. Decode or encode messages quickly and accurately. Try it now!"
  },
  twitter: {
    card: "summary",
    title: "Morse Code Translator - Convert Morse Code to Text Online",
    description:
      "Easily translate Morse code to text with our online Morse code translator. Decode or encode messages quickly and accurately. Try it now!"
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.webp", sizes: "192x192", type: "image/webp" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico"
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  other: {
    "ai-content-declaration": "human-authored, tool-generated-output-in-browser",
    "google-adsense-account": ADSENSE_CLIENT
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e17" }
  ]
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = (headersList.get("x-locale") ?? "en") as HomeLocale;
  const dir = (headersList.get("x-html-dir") ?? "ltr") as "ltr" | "rtl";

  return (
    <html lang={locale} dir={dir} className={`dark ${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className={`min-h-screen font-body ${manrope.className}`}>
        <GlobalAiSeoJsonLd />
        {children}
        <DeferredVercelScripts />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SITE_NAME } from "@/lib/site";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: "/"
  },
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
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico"
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e17" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className={`min-h-screen font-body ${manrope.className}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

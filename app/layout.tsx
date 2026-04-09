import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope, Space_Grotesk } from "next/font/google";
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
  applicationName: "morsecodeworld.org",
  title: "Morse Code Translator — Encode, Decode & Audio",
  description:
    "Free morse code translator and morse code decoder: convert Morse code to English and back, learn the international alphabet, and compare American Morse history with modern practice. Instant audio, WPM control, and waveform view in your browser.",
  keywords: [
    "morse code translator",
    "morse code decoder",
    "american morse code translator",
    "convert morse code to english",
    "morse alphabet translator",
    "morse translator",
    "text to morse",
    "morse to text",
    "morse code encoder"
  ],
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
    title: "morsecodeworld.org",
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
        <SpeedInsights />
      </body>
    </html>
  );
}

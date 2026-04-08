import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope, Space_Grotesk } from "next/font/google";
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

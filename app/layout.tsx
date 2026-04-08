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
  title: "Morse Code Translator — Encode, Decode & Audio | morsecodeworld.org",
  description:
    "Free morse code translator online: turn text into Morse and decode dots and dashes with instant playback, speed and pitch controls, and waveform view. Practice and share signals in your browser at morsecodeworld.org.",
  keywords: [
    "morse code translator",
    "morse translator",
    "text to morse",
    "morse to text",
    "morse code decoder",
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

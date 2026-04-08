import type { Metadata } from "next";
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
  title: "morsecodeworld.org | Morse Code Terminal",
  description: "Translate text to Morse and back with audio, waveform, and terminal-grade controls."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className={`min-h-screen font-body ${manrope.className}`}>{children}</body>
    </html>
  );
}

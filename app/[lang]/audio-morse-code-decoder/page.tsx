import { notFound } from "next/navigation";
import { AudioMorseDecoderPageView } from "@/components/pages/AudioMorseDecoderPageView";
import type { HomeLocale } from "@/lib/i18n/home";
import { NON_EN_LOCALES, isNonEnLocale } from "@/lib/i18n/routes";
import { buildAudioMetadata } from "@/lib/seo/toolMetadata";

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return NON_EN_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) return {};
  return buildAudioMetadata(lang);
}

export default async function LocalizedAudioMorseDecoderPage({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) notFound();
  return <AudioMorseDecoderPageView locale={lang as HomeLocale} />;
}

import { notFound } from "next/navigation";
import { PictureMorseTranslatorPageView } from "@/components/pages/PictureMorseTranslatorPageView";
import type { HomeLocale } from "@/lib/i18n/home";
import { NON_EN_LOCALES, isNonEnLocale } from "@/lib/i18n/routes";
import { buildPictureMetadata } from "@/lib/seo/toolMetadata";

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return NON_EN_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) return {};
  return buildPictureMetadata(lang);
}

export default async function LocalizedPictureMorseTranslatorPage({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) notFound();
  return <PictureMorseTranslatorPageView locale={lang as HomeLocale} />;
}

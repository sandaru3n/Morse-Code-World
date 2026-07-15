import { notFound } from "next/navigation";
import { Mp3CutterPageView } from "@/components/pages/Mp3CutterPageView";
import type { HomeLocale } from "@/lib/i18n/home";
import { NON_EN_LOCALES, isNonEnLocale } from "@/lib/i18n/routes";
import { buildMp3CutterMetadata } from "@/lib/seo/toolMetadata";

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return NON_EN_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) return {};
  return buildMp3CutterMetadata(lang);
}

export default async function LocalizedMp3CutterPage({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) notFound();
  return <Mp3CutterPageView locale={lang as HomeLocale} />;
}

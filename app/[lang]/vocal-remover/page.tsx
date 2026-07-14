import { notFound } from "next/navigation";
import { VocalRemoverPageView } from "@/components/pages/VocalRemoverPageView";
import type { HomeLocale } from "@/lib/i18n/home";
import { NON_EN_LOCALES, isNonEnLocale } from "@/lib/i18n/routes";
import { buildVocalRemoverMetadata } from "@/lib/seo/toolMetadata";

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return NON_EN_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) return {};
  return buildVocalRemoverMetadata(lang);
}

export default async function LocalizedVocalRemoverPage({ params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) notFound();
  return <VocalRemoverPageView locale={lang as HomeLocale} />;
}

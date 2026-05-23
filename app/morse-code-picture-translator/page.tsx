import { PictureMorseTranslatorPageView } from "@/components/pages/PictureMorseTranslatorPageView";
import { buildPictureMetadata } from "@/lib/seo/toolMetadata";

export const metadata = buildPictureMetadata("en");

export default function MorseCodePictureTranslatorPage() {
  return <PictureMorseTranslatorPageView locale="en" />;
}

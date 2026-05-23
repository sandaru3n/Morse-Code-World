import { AudioMorseDecoderPageView } from "@/components/pages/AudioMorseDecoderPageView";
import { buildAudioMetadata } from "@/lib/seo/toolMetadata";

export const metadata = buildAudioMetadata("en");

export default function AudioMorseCodeDecoderPage() {
  return <AudioMorseDecoderPageView locale="en" />;
}

import { Mp3CutterPageView } from "@/components/pages/Mp3CutterPageView";
import { buildMp3CutterMetadata } from "@/lib/seo/toolMetadata";

export const metadata = buildMp3CutterMetadata("en");

export default function Mp3CutterPage() {
  return <Mp3CutterPageView locale="en" />;
}

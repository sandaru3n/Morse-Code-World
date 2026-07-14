import { VocalRemoverPageView } from "@/components/pages/VocalRemoverPageView";
import { buildVocalRemoverMetadata } from "@/lib/seo/toolMetadata";

export const metadata = buildVocalRemoverMetadata("en");

export default function VocalRemoverPage() {
  return <VocalRemoverPageView locale="en" />;
}

import PracticeAreaTemplate from "@/components/templates/PracticeAreaTemplate";
import { practiceAreas } from "@/lib/constants/practice-areas";

export default function BusinessLawPage() {
  const practiceArea = practiceAreas.find(area => area.slug === "business-law")!;
  return <PracticeAreaTemplate practiceArea={practiceArea} />;
}
import PracticeAreaTemplate from "@/components/templates/PracticeAreaTemplate";
import { practiceAreas } from "@/lib/constants/practice-areas";

export default function FamilyLawPage() {
  const practiceArea = practiceAreas.find(area => area.slug === "family-law")!;
  return <PracticeAreaTemplate practiceArea={practiceArea} />;
}
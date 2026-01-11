import PracticeAreaTemplate from "@/components/templates/PracticeAreaTemplate";
import { practiceAreas } from "@/lib/constants/practice-areas";

export default function PersonalInjuryPage() {
  const practiceArea = practiceAreas.find(area => area.slug === "personal-injury")!;
  return <PracticeAreaTemplate practiceArea={practiceArea} />;
}
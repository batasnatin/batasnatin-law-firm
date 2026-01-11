import PracticeAreaTemplate from "@/components/templates/PracticeAreaTemplate";
import { practiceAreas } from "@/lib/constants/practice-areas";

export default function EstatePlanningPage() {
  const practiceArea = practiceAreas.find(area => area.slug === "estate-planning")!;
  return <PracticeAreaTemplate practiceArea={practiceArea} />;
}
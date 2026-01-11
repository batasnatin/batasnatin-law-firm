import PracticeAreaTemplate from "@/components/templates/PracticeAreaTemplate";
import { practiceAreas } from "@/lib/constants/practice-areas";

export default function CriminalDefensePage() {
  const practiceArea = practiceAreas.find(area => area.slug === "criminal-defense")!;
  return <PracticeAreaTemplate practiceArea={practiceArea} />;
}
import PracticeAreaTemplate from "@/components/templates/PracticeAreaTemplate";
import { practiceAreas } from "@/lib/constants/practice-areas";

export default function RealEstatePage() {
  const practiceArea = practiceAreas.find(area => area.slug === "real-estate")!;
  return <PracticeAreaTemplate practiceArea={practiceArea} />;
}
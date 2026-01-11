import { 
  Car, 
  Users, 
  Shield, 
  Briefcase, 
  Home, 
  FileText,
  AlertTriangle,
  Heart,
  Gavel,
  Building,
  Key,
  ScrollText,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Car,
  Users,
  Shield,
  Briefcase,
  Home,
  FileText,
  AlertTriangle,
  Heart,
  Gavel,
  Building,
  Key,
  ScrollText
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || FileText;
}
export interface NavItem {
  title: string;
  href: string;
  subItems?: NavItem[];
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  education: string[];
  barAdmissions: string[];
  practiceAreas: string[];
  email: string;
  phone: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  practiceArea?: string;
}

export interface Appointment {
  id?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  attorneyId?: string;
  practiceArea: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: 'in-person' | 'virtual' | 'phone';
  message?: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
  createdAt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featuredImage: string;
}

export interface CaseResult {
  id: string;
  title: string;
  amount?: string;
  practiceArea: string;
  description: string;
  outcome: string;
  date: string;
}
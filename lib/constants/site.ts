export const siteConfig = {
  name: "BATASnatin Law Firm",
  shortName: "BATASnatin",
  description: "Premier legal services with decades of experience. Trusted by thousands of clients nationwide.",
  tagline: "Justice. Integrity. Excellence.",
  url: "https://firm.batasnatin.com",
  ogImage: "/images/logo.png",
  
  contact: {
    phone: "+1 (555) 123-4567",
    emergencyPhone: "+1 (555) 987-6543",
    email: "info@batasnatin.com",
    address: {
      street: "123 Justice Boulevard",
      suite: "Suite 1000",
      city: "Manila",
      state: "Metro Manila",
      zip: "1000",
      country: "Philippines"
    },
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: 10:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
      holidays: "Closed on Public Holidays"
    }
  },
  
  social: {
    facebook: "https://facebook.com/batasnatin",
    twitter: "https://twitter.com/batasnatin",
    linkedin: "https://linkedin.com/company/batasnatin",
    instagram: "https://instagram.com/batasnatin",
    youtube: "https://youtube.com/@batasnatin"
  },
  
  legal: {
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms-of-service",
    disclaimer: "/legal-disclaimer",
    cookiePolicy: "/cookie-policy"
  }
};

export const navigationLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
    subItems: [
      { title: "Our Firm", href: "/about" },
      { title: "Our Team", href: "/attorneys" },
      { title: "Mission & Values", href: "/about#mission" },
      { title: "Awards & Recognition", href: "/about#awards" },
    ]
  },
  {
    title: "Practice Areas",
    href: "/practice-areas",
    subItems: [
      { title: "Personal Injury", href: "/practice-areas/personal-injury" },
      { title: "Family Law", href: "/practice-areas/family-law" },
      { title: "Criminal Defense", href: "/practice-areas/criminal-defense" },
      { title: "Business Law", href: "/practice-areas/business-law" },
      { title: "Real Estate", href: "/practice-areas/real-estate" },
      { title: "Estate Planning", href: "/practice-areas/estate-planning" },
    ]
  },
  {
    title: "Attorneys",
    href: "/attorneys",
  },
  {
    title: "Resources",
    href: "/resources",
    subItems: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Legal Guides", href: "/resources/guides" },
      { title: "FAQs", href: "/resources/faqs" },
      { title: "Legal Calculators", href: "/resources/calculators" },
    ]
  },
  {
    title: "Contact",
    href: "/contact",
  }
];

export const practiceAreas = [
  {
    id: "personal-injury",
    title: "Personal Injury",
    description: "Comprehensive legal representation for accident victims seeking compensation for injuries and damages.",
    icon: "Shield",
    features: [
      "Car Accidents",
      "Slip and Fall",
      "Medical Malpractice",
      "Workplace Injuries",
      "Product Liability",
      "Wrongful Death"
    ],
    image: "/images/practice-areas/personal-injury.jpg"
  },
  {
    id: "family-law",
    title: "Family Law",
    description: "Compassionate guidance through divorce, custody, adoption, and other family legal matters.",
    icon: "Users",
    features: [
      "Divorce & Separation",
      "Child Custody",
      "Child Support",
      "Adoption",
      "Prenuptial Agreements",
      "Domestic Violence"
    ],
    image: "/images/practice-areas/family-law.jpg"
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    description: "Strong defense representation for individuals facing criminal charges at all levels.",
    icon: "Gavel",
    features: [
      "DUI/DWI Defense",
      "Drug Crimes",
      "Assault & Battery",
      "Theft Crimes",
      "White Collar Crimes",
      "Federal Crimes"
    ],
    image: "/images/practice-areas/criminal-defense.jpg"
  },
  {
    id: "business-law",
    title: "Business Law",
    description: "Strategic legal counsel for businesses from formation through dissolution and everything in between.",
    icon: "Briefcase",
    features: [
      "Business Formation",
      "Contract Drafting",
      "Mergers & Acquisitions",
      "Employment Law",
      "Intellectual Property",
      "Business Litigation"
    ],
    image: "/images/practice-areas/business-law.jpg"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Expert guidance in residential and commercial real estate transactions and disputes.",
    icon: "Home",
    features: [
      "Property Purchase/Sale",
      "Lease Agreements",
      "Title Issues",
      "Zoning & Land Use",
      "Construction Law",
      "Foreclosure Defense"
    ],
    image: "/images/practice-areas/real-estate.jpg"
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    description: "Protect your legacy with comprehensive estate planning and probate services.",
    icon: "FileText",
    features: [
      "Wills & Trusts",
      "Estate Administration",
      "Probate",
      "Power of Attorney",
      "Healthcare Directives",
      "Asset Protection"
    ],
    image: "/images/practice-areas/estate-planning.jpg"
  }
];

export const teamMembers = [
  {
    id: "juan-dela-cruz",
    name: "Juan Dela Cruz",
    position: "Managing Partner",
    bio: "With over 25 years of experience in litigation and corporate law, Juan leads our firm with unwavering dedication to client success.",
    education: [
      "J.D., University of the Philippines College of Law",
      "B.A. Political Science, Ateneo de Manila University"
    ],
    barAdmissions: ["Philippines Bar, 1998", "New York Bar, 2005"],
    practiceAreas: ["Business Law", "Real Estate", "Estate Planning"],
    email: "juan.delacruz@batasnatin.com",
    phone: "+1 (555) 123-4568",
    image: "/images/attorneys/juan-dela-cruz.jpg"
  },
  {
    id: "maria-santos",
    name: "Maria Santos",
    position: "Senior Partner",
    bio: "Maria specializes in family law and has helped thousands of families navigate complex legal challenges with compassion and expertise.",
    education: [
      "J.D., Harvard Law School",
      "B.A. Sociology, University of Santo Tomas"
    ],
    barAdmissions: ["Philippines Bar, 2003", "California Bar, 2008"],
    practiceAreas: ["Family Law", "Estate Planning"],
    email: "maria.santos@batasnatin.com",
    phone: "+1 (555) 123-4569",
    image: "/images/attorneys/maria-santos.jpg"
  },
  {
    id: "roberto-garcia",
    name: "Roberto Garcia",
    position: "Partner",
    bio: "Roberto is a fierce advocate for injury victims and has secured millions in compensation for his clients.",
    education: [
      "J.D., Yale Law School",
      "B.S. Engineering, MIT"
    ],
    barAdmissions: ["Philippines Bar, 2005", "Texas Bar, 2010"],
    practiceAreas: ["Personal Injury", "Criminal Defense"],
    email: "roberto.garcia@batasnatin.com",
    phone: "+1 (555) 123-4570",
    image: "/images/attorneys/roberto-garcia.jpg"
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "BATASnatin Law Firm provided exceptional service during our company merger. Their expertise and attention to detail made all the difference.",
    rating: 5,
    image: "/images/testimonials/sarah-johnson.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Real Estate Developer",
    content: "The team's knowledge of real estate law is unmatched. They helped us navigate complex zoning issues with ease.",
    rating: 5,
    image: "/images/testimonials/michael-chen.jpg"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Family Client",
    content: "During my divorce, the attorneys showed genuine care and compassion while fighting for my rights. I couldn't have asked for better representation.",
    rating: 5,
    image: "/images/testimonials/emily-rodriguez.jpg"
  }
];

export const faqs = [
  {
    question: "How much does a consultation cost?",
    answer: "We offer free initial consultations for most practice areas. This allows us to understand your case and provide you with options before you commit to our services."
  },
  {
    question: "How long will my case take?",
    answer: "The duration varies depending on the complexity of your case. During your consultation, we'll provide a realistic timeline based on similar cases we've handled."
  },
  {
    question: "What documents should I bring to my first meeting?",
    answer: "Bring any relevant documents related to your case, including contracts, correspondence, court documents, police reports, medical records, and identification."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options including contingency fees for personal injury cases and payment plans for other practice areas."
  },
  {
    question: "Can I handle my legal matter without an attorney?",
    answer: "While you have the right to represent yourself, legal matters can be complex. Having experienced legal counsel ensures your rights are protected and increases your chances of a favorable outcome."
  }
];
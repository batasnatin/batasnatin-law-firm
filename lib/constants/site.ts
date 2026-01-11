export const siteConfig = {
  name: "BATASnatin Law Firm",
  shortName: "BATASnatin",
  description: "Excellence is our Standard. Top-notch legal services from the Philippines, handling cases from filing to Supreme Court.",
  tagline: "Excellence is our Standard",
  url: "https://firm.batasnatin.com",
  ogImage: "/images/logo.png",

  contact: {
    phone: "+63 915 954 6080",
    emergencyPhone: "+63 2 359 4203",
    email: "info@batasnatin.com",
    address: {
      street: "31 General Luna Street",
      suite: "2nd Floor, LC Building (Above Goldilocks)",
      city: "Taguig City",
      state: "Metro Manila",
      zip: "1630",
      country: "Philippines",
      landmark: "Fronting Taguig City Hall"
    },
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
      saturday: "Saturday: By Appointment",
      sunday: "Sunday: By Appointment",
      holidays: "Weekends and holidays by appointment. Contact us to schedule."
    }
  },

  social: {
    facebook: "https://facebook.com/BATASnatin",
    twitter: "https://twitter.com/batasnatin",
    linkedin: "https://linkedin.com/company/batasnatin",
    instagram: "https://instagram.com/batasnatin",
    youtube: "https://youtube.com/channel/UCVyNJy0q_Q2XB873gEkmgjQ"
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
      { title: "Our Story", href: "/about#story" },
    ]
  },
  {
    title: "Practice Areas",
    href: "/practice-areas",
    subItems: [
      { title: "Labor Law", href: "/practice-areas/labor-law", badge: "Pro Bono Available" },
      { title: "Family Law", href: "/practice-areas/family-law" },
      { title: "Civil Law", href: "/practice-areas/civil-law" },
      { title: "Criminal Defense", href: "/practice-areas/criminal-defense" },
      { title: "Real Estate", href: "/practice-areas/real-estate" },
      { title: "Environmental Law", href: "/practice-areas/environmental-law" },
      { title: "Corporation Law", href: "/practice-areas/corporation-law" },
      { title: "Notarization", href: "/practice-areas/notarization" },
    ]
  },
  {
    title: "Free Services",
    href: "/free-services",
    badge: "Free",
    subItems: [
      { title: "BATASnatin LIVE", href: "/batasnatin-live", description: "Free daily legal advice at 8PM" },
      { title: "Pro Bono (Laborers)", href: "/pro-bono", description: "Free representation from filing to Supreme Court" },
      { title: "Free Legal Advice", href: "/free-legal-advice", description: "Ask questions, get answers" },
      { title: "FAQs", href: "/faqs" },
    ]
  },
  {
    title: "Attorneys",
    href: "/attorneys",
  },
  {
    title: "Contact",
    href: "/contact",
  }
];

export const practiceAreas = [
  {
    id: "labor-law",
    title: "Labor Law",
    description: "Expert representation in labor disputes from DOLE to Supreme Court. Pro bono services available for qualified laborers.",
    icon: "Briefcase",
    badge: "Pro Bono Available",
    features: [
      "Illegal Dismissal",
      "Constructive Dismissal",
      "Non-payment of Wages",
      "NLRC Representation",
      "Labor Standards",
      "SSS/PhilHealth Issues"
    ],
    image: "/images/practice-areas/labor-law.jpg"
  },
  {
    id: "family-law",
    title: "Family Law",
    description: "Compassionate guidance through annulment, custody, adoption, and other family legal matters under Philippine law.",
    icon: "Users",
    features: [
      "Annulment of Marriage",
      "Legal Separation",
      "Child Custody & Support",
      "Adoption (Domestic & International)",
      "VAWC Cases",
      "Paternity Cases"
    ],
    image: "/images/practice-areas/family-law.jpg"
  },
  {
    id: "civil-law",
    title: "Civil Law & Litigation",
    description: "Comprehensive civil litigation services handling all types of civil cases in Philippine courts.",
    icon: "Scale",
    features: [
      "Collection of Debts",
      "Unlawful Detainer",
      "Forcible Entry",
      "Recovery of Property",
      "Damages (Actual, Moral, Exemplary)",
      "Breach of Contract"
    ],
    image: "/images/practice-areas/civil-law.jpg"
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    description: "Strong defense representation for individuals facing criminal charges under the Revised Penal Code and special laws.",
    icon: "Shield",
    features: [
      "BP 22 (Bouncing Checks)",
      "RA 9165 (Drug Cases)",
      "Robbery & Theft",
      "Estafa & Fraud",
      "Physical Injuries",
      "Homicide & Murder"
    ],
    image: "/images/practice-areas/criminal-defense.jpg"
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    description: "Expert guidance in property transactions, title disputes, and land registration under Philippine law.",
    icon: "Home",
    features: [
      "Annulment of TCT",
      "Reconveyance",
      "Quieting of Title",
      "Land Registration (LRA)",
      "Ejectment Cases",
      "Boundary Disputes"
    ],
    image: "/images/practice-areas/real-estate.jpg"
  },
  {
    id: "environmental-law",
    title: "Environmental Law",
    description: "Protection of environmental rights through Writ of Kalikasan and DENR proceedings.",
    icon: "Leaf",
    features: [
      "Writ of Kalikasan",
      "ECC Applications",
      "DENR Cases",
      "Mining Disputes",
      "Pollution Cases",
      "Protected Areas"
    ],
    image: "/images/practice-areas/environmental-law.jpg"
  },
  {
    id: "corporation-law",
    title: "Corporation Law",
    description: "Strategic legal counsel for businesses from SEC registration to intra-corporate disputes.",
    icon: "Building",
    features: [
      "SEC Registration",
      "Corporate Litigation",
      "Intra-Corporate Disputes",
      "Partnership Formation",
      "BIR Compliance",
      "Business Contracts"
    ],
    image: "/images/practice-areas/corporation-law.jpg"
  },
  {
    id: "notarization",
    title: "Notarization & Document Services",
    description: "Professional notarization of all legal documents and preparation of various legal instruments.",
    icon: "FileText",
    features: [
      "Affidavits",
      "Contracts & Agreements",
      "Deeds of Sale",
      "Special Power of Attorney",
      "Acknowledgements",
      "Certified True Copies"
    ],
    image: "/images/practice-areas/notarization.jpg"
  }
];

export const teamMembers = [
  {
    id: "ranny-libayan",
    name: "Atty. Ranny Randolf B. Libayan",
    position: "Founder & Managing Partner",
    bio: "Public-schooled from elementary through college, Atty. Libayan founded BATASnatin Law Firm driven by the belief that justice should be affordable to everyone. As a working student who never owned more than 10 law books, he built the Philippines' first comprehensive online legal resource (BATASnatin.com) and began handling cases even before passing the bar. He litigated 30+ cases in his first year alone. His success is measured not by awards or prestigious schools, but by the testimony of clients served and his continuing pursuit to keep the legal profession noble.",
    education: [
      "Juris Doctor, University of Baguio",
      "Bachelor of Environmental Science, Benguet State University"
    ],
    barAdmissions: ["Philippines Bar"],
    practiceAreas: ["Labor Law", "Litigation", "Environmental Law", "Pro Bono Services"],
    specialties: "Founder of BATASnatin.com, Pro Bono Advocate, Expert Litigator handling cases from filing to Supreme Court",
    email: "atty.libayan@batasnatin.com",
    phone: "+63 915 954 6080",
    image: "/images/attorneys/atty-libayan.jpg"
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
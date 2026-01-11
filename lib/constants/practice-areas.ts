export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  services: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  caseTypes: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "personal-injury",
    title: "Personal Injury",
    slug: "personal-injury",
    iconName: "Car",
    shortDescription: "Fighting for victims of accidents and negligence to secure fair compensation",
    fullDescription: "When you've been injured due to someone else's negligence, you need experienced legal representation to protect your rights and secure the compensation you deserve. Our personal injury attorneys have recovered millions for clients across a wide range of injury cases.",
    services: [
      "Car & Truck Accidents",
      "Motorcycle Accidents",
      "Slip and Fall Injuries",
      "Medical Malpractice",
      "Product Liability",
      "Wrongful Death",
      "Workplace Injuries",
      "Dog Bites",
      "Pedestrian Accidents",
      "Brain & Spinal Injuries"
    ],
    process: [
      {
        step: 1,
        title: "Free Case Evaluation",
        description: "We review your case details and determine the best legal strategy"
      },
      {
        step: 2,
        title: "Investigation",
        description: "Gather evidence, interview witnesses, and build your case"
      },
      {
        step: 3,
        title: "Negotiation",
        description: "Work with insurance companies to secure fair compensation"
      },
      {
        step: 4,
        title: "Litigation if Needed",
        description: "Take your case to trial if a fair settlement cannot be reached"
      }
    ],
    faqs: [
      {
        question: "How much is my personal injury case worth?",
        answer: "Case value depends on factors including medical expenses, lost wages, pain and suffering, and the severity of your injuries. We provide a free consultation to evaluate your specific situation."
      },
      {
        question: "How long do I have to file a personal injury claim?",
        answer: "The statute of limitations varies by state, typically ranging from 1-3 years. It's crucial to consult with an attorney as soon as possible to protect your rights."
      },
      {
        question: "Do I need to pay upfront for legal representation?",
        answer: "No. We work on a contingency fee basis, meaning you pay nothing unless we win your case. Our fee is a percentage of the settlement or verdict."
      }
    ],
    caseTypes: [
      "Auto Accidents",
      "Premises Liability",
      "Medical Negligence",
      "Product Defects",
      "Workplace Injuries"
    ]
  },
  {
    id: "family-law",
    title: "Family Law",
    slug: "family-law",
    iconName: "Users",
    shortDescription: "Compassionate guidance through divorce, custody, and family legal matters",
    fullDescription: "Family legal matters require both legal expertise and emotional understanding. Our family law attorneys provide compassionate yet strong advocacy to protect your interests and those of your children during challenging times.",
    services: [
      "Divorce & Legal Separation",
      "Child Custody & Visitation",
      "Child Support",
      "Spousal Support/Alimony",
      "Property Division",
      "Prenuptial Agreements",
      "Postnuptial Agreements",
      "Adoption",
      "Paternity",
      "Domestic Violence Protection"
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "Discuss your situation and understand your legal options"
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Create a customized legal strategy for your specific needs"
      },
      {
        step: 3,
        title: "Negotiation/Mediation",
        description: "Work toward amicable resolutions when possible"
      },
      {
        step: 4,
        title: "Court Representation",
        description: "Advocate for your rights in court proceedings when necessary"
      }
    ],
    faqs: [
      {
        question: "How long does a divorce take?",
        answer: "The timeline varies depending on whether it's contested or uncontested. Uncontested divorces may take 2-3 months, while contested cases can take a year or more."
      },
      {
        question: "How is child custody determined?",
        answer: "Courts consider the best interests of the child, including factors like parental fitness, stability, the child's wishes (if age-appropriate), and maintaining continuity."
      },
      {
        question: "What's the difference between legal and physical custody?",
        answer: "Legal custody involves decision-making rights about the child's upbringing, while physical custody determines where the child lives. Both can be sole or joint."
      }
    ],
    caseTypes: [
      "Contested Divorce",
      "Uncontested Divorce",
      "High-Asset Divorce",
      "Custody Disputes",
      "Support Modifications"
    ]
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    slug: "criminal-defense",
    iconName: "Shield",
    shortDescription: "Aggressive defense protecting your rights and freedom in criminal cases",
    fullDescription: "Facing criminal charges can be overwhelming and life-changing. Our criminal defense attorneys provide aggressive representation to protect your rights, freedom, and future. We handle cases from minor misdemeanors to serious felonies.",
    services: [
      "DUI/DWI Defense",
      "Drug Crimes",
      "Assault & Battery",
      "Theft Crimes",
      "White Collar Crimes",
      "Domestic Violence",
      "Federal Crimes",
      "Juvenile Crimes",
      "Sex Crimes",
      "Expungements"
    ],
    process: [
      {
        step: 1,
        title: "Case Review",
        description: "Analyze charges and evidence to identify defense strategies"
      },
      {
        step: 2,
        title: "Investigation",
        description: "Conduct thorough investigation and gather exculpatory evidence"
      },
      {
        step: 3,
        title: "Pre-Trial Motions",
        description: "File motions to suppress evidence or dismiss charges"
      },
      {
        step: 4,
        title: "Trial or Plea",
        description: "Negotiate favorable pleas or provide strong trial defense"
      }
    ],
    faqs: [
      {
        question: "Should I talk to the police without a lawyer?",
        answer: "No. You have the right to remain silent and the right to an attorney. Always exercise these rights and contact a lawyer before speaking with law enforcement."
      },
      {
        question: "What's the difference between a misdemeanor and felony?",
        answer: "Misdemeanors are less serious crimes typically punishable by up to one year in jail. Felonies are more serious offenses that can result in prison sentences exceeding one year."
      },
      {
        question: "Can my criminal record be expunged?",
        answer: "Eligibility for expungement varies by state and the nature of the offense. Many first-time offenders and those with minor convictions may qualify for record sealing or expungement."
      }
    ],
    caseTypes: [
      "Misdemeanors",
      "Felonies",
      "Federal Crimes",
      "Appeals",
      "Post-Conviction Relief"
    ]
  },
  {
    id: "business-law",
    title: "Business Law",
    slug: "business-law",
    iconName: "Briefcase",
    shortDescription: "Comprehensive legal services for businesses of all sizes",
    fullDescription: "From startups to established corporations, businesses need reliable legal counsel to navigate complex regulations and protect their interests. Our business law team provides comprehensive services to help your business thrive.",
    services: [
      "Business Formation (LLC, Corporation)",
      "Contract Drafting & Review",
      "Commercial Litigation",
      "Employment Law",
      "Intellectual Property",
      "Mergers & Acquisitions",
      "Partnership Agreements",
      "Business Succession Planning",
      "Regulatory Compliance",
      "Commercial Real Estate"
    ],
    process: [
      {
        step: 1,
        title: "Business Assessment",
        description: "Evaluate your business needs and legal requirements"
      },
      {
        step: 2,
        title: "Strategic Planning",
        description: "Develop legal strategies aligned with business goals"
      },
      {
        step: 3,
        title: "Implementation",
        description: "Execute legal documents and ensure compliance"
      },
      {
        step: 4,
        title: "Ongoing Support",
        description: "Provide continuous legal counsel as your business grows"
      }
    ],
    faqs: [
      {
        question: "Should I form an LLC or Corporation?",
        answer: "The choice depends on factors like tax implications, management structure, and liability protection needs. An LLC offers flexibility, while a corporation may be better for raising capital."
      },
      {
        question: "Do I need a lawyer to draft contracts?",
        answer: "While not always required, having a lawyer draft or review contracts ensures your interests are protected and the agreements are legally enforceable."
      },
      {
        question: "How can I protect my business from lawsuits?",
        answer: "Proper entity formation, comprehensive insurance, well-drafted contracts, and compliance with regulations are key strategies for minimizing lawsuit risks."
      }
    ],
    caseTypes: [
      "Entity Formation",
      "Contract Disputes",
      "Employment Issues",
      "Business Transactions",
      "Regulatory Matters"
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate Law",
    slug: "real-estate",
    iconName: "Home",
    shortDescription: "Expert guidance for all residential and commercial real estate matters",
    fullDescription: "Real estate transactions involve significant financial investments and complex legal requirements. Our real estate attorneys ensure smooth transactions and protect your interests in all property matters.",
    services: [
      "Residential Purchases & Sales",
      "Commercial Transactions",
      "Title Review & Insurance",
      "Contract Negotiation",
      "Lease Agreements",
      "Property Disputes",
      "Foreclosure Defense",
      "Land Use & Zoning",
      "Construction Law",
      "Landlord-Tenant Issues"
    ],
    process: [
      {
        step: 1,
        title: "Contract Review",
        description: "Examine purchase agreements and identify potential issues"
      },
      {
        step: 2,
        title: "Due Diligence",
        description: "Conduct title searches and property inspections"
      },
      {
        step: 3,
        title: "Negotiation",
        description: "Negotiate terms and resolve any disputes"
      },
      {
        step: 4,
        title: "Closing",
        description: "Oversee closing process and ensure proper documentation"
      }
    ],
    faqs: [
      {
        question: "Do I need a real estate attorney for buying a home?",
        answer: "While not required in all states, a real estate attorney can protect your interests, review contracts, and handle complex issues that may arise during the transaction."
      },
      {
        question: "What is title insurance and do I need it?",
        answer: "Title insurance protects against claims on property ownership. Lenders typically require it, and owner's title insurance is highly recommended to protect your investment."
      },
      {
        question: "What should I do if I'm facing foreclosure?",
        answer: "Contact an attorney immediately. Options may include loan modification, short sale, deed in lieu of foreclosure, or bankruptcy. Early intervention provides more options."
      }
    ],
    caseTypes: [
      "Residential Sales",
      "Commercial Deals",
      "Lease Negotiations",
      "Property Disputes",
      "Foreclosure Cases"
    ]
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    slug: "estate-planning",
    iconName: "FileText",
    shortDescription: "Protect your legacy with comprehensive estate planning services",
    fullDescription: "Estate planning ensures your assets are protected and distributed according to your wishes. Our estate planning attorneys help you create comprehensive plans that provide peace of mind for you and your loved ones.",
    services: [
      "Wills & Trusts",
      "Living Trusts",
      "Powers of Attorney",
      "Healthcare Directives",
      "Estate Administration",
      "Probate",
      "Asset Protection",
      "Tax Planning",
      "Special Needs Planning",
      "Charitable Giving"
    ],
    process: [
      {
        step: 1,
        title: "Asset Review",
        description: "Inventory assets and understand your estate planning needs"
      },
      {
        step: 2,
        title: "Plan Design",
        description: "Create customized estate plan based on your goals"
      },
      {
        step: 3,
        title: "Document Preparation",
        description: "Draft wills, trusts, and other essential documents"
      },
      {
        step: 4,
        title: "Regular Updates",
        description: "Review and update plans as circumstances change"
      }
    ],
    faqs: [
      {
        question: "What's the difference between a will and a trust?",
        answer: "A will takes effect after death and goes through probate. A trust can take effect during your lifetime, may avoid probate, and offers more privacy and control over asset distribution."
      },
      {
        question: "When should I update my estate plan?",
        answer: "Review your estate plan after major life events like marriage, divorce, births, deaths, or significant changes in assets. Generally, review every 3-5 years."
      },
      {
        question: "What happens if I die without a will?",
        answer: "State intestacy laws determine asset distribution, which may not align with your wishes. The court appoints an administrator, and the process can be lengthy and costly."
      }
    ],
    caseTypes: [
      "Simple Wills",
      "Complex Trusts",
      "Probate Administration",
      "Estate Litigation",
      "Tax Planning"
    ]
  }
];
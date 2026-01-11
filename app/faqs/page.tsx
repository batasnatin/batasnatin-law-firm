import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, HelpCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | BATASnatin Law Firm",
  description: "Get answers to common legal questions about our services, consultation fees, pro bono program, and Philippine legal procedures.",
};

const faqCategories = [
  {
    category: "General Legal Questions",
    questions: [
      {
        question: "When do I need a lawyer?",
        answer: "You need a lawyer when facing legal issues such as contracts, disputes, court cases, or when your rights are threatened. For labor issues like illegal dismissal or unpaid wages, contact us immediately. For criminal cases, it's crucial to have legal representation from the start. Even for preventive legal advice on business matters or personal issues, consulting a lawyer can save you from future complications."
      },
      {
        question: "How long will my case take?",
        answer: "The duration varies depending on the complexity and type of case. Simple cases like notarization take days, while litigation can take months to years. Labor cases typically go through SENA mediation (30 days), then NLRC proceedings (3-6 months), with possible appeals. Civil cases depend on court schedules and can range from 6 months to several years. During your consultation, we'll provide a realistic timeline based on similar cases we've handled."
      },
      {
        question: "What documents should I bring to my first meeting?",
        answer: "Bring any documents relevant to your case: contracts, correspondence, court documents, police reports, medical records, employment documents, ID, and any evidence (photos, receipts, etc.). For labor cases: employment contract, payslips, termination letter, company ID. For property cases: land titles, tax declarations, deeds. Don't worry if you don't have everything - we'll guide you on what else is needed."
      }
    ]
  },
  {
    category: "Consultation & Fees",
    questions: [
      {
        question: "How much does a consultation cost?",
        answer: "Initial consultation is ₱2,500. This allows us to understand your case, review documents, and provide legal advice on your options. For qualified pro bono cases (laborers), this fee is waived after assessment. The consultation fee gives you direct access to Atty. Libayan's expertise and a clear understanding of your legal situation."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, bank transfer, and GCash for consultation and legal fees. Payment terms for representation depend on the case type. For labor cases with merit, we may offer contingency arrangements. For pro bono cases, there are no legal fees - only minimal costs for printing and photocopying."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, for cases requiring representation, we offer flexible payment arrangements depending on the case. For labor cases, we may work on contingency (payment from settlement/award). For pro bono qualified cases, legal fees are completely waived. Discuss payment options during your consultation."
      }
    ]
  },
  {
    category: "Pro Bono Program",
    questions: [
      {
        question: "How do I qualify for pro bono services?",
        answer: "Pro bono services are available for laborers with legitimate cases involving: illegal dismissal, constructive dismissal, underpayment/non-payment of wages, illegal suspension, or any labor oppression. Schedule an initial consultation (₱2,500), and if you qualify after case assessment, the consultation fee is waived and you receive free legal representation from filing to Supreme Court."
      },
      {
        question: "What's covered under pro bono services?",
        answer: "Covered: Acceptance fees, legal representation at all levels (DOLE, NLRC, Court of Appeals, Supreme Court), document preparation, court appearances, legal advice, and case management. Not covered: Printing and photocopying costs (minimal). You pay nothing for professional legal services - only small administrative costs."
      },
      {
        question: "Is the pro bono service really free?",
        answer: "Yes, really! With our commitment to social justice, we provide completely free legal representation for qualified laborers. The legal fees that are waived (which normally cost hundreds of thousands of pesos) far outweigh the minimal printing/photocopying costs. This is our way of ensuring justice is accessible to everyone."
      }
    ]
  },
  {
    category: "Court Procedures",
    questions: [
      {
        question: "What courts do you handle cases in?",
        answer: "We handle cases at all levels: Municipal Trial Courts (MTC), Regional Trial Courts (RTC), Court of Appeals (CA), and Supreme Court (SC). We also appear before administrative bodies like DOLE, NLRC, SEC, COMELEC, and other quasi-judicial agencies. Our expertise spans from initial filing to final Supreme Court resolution."
      },
      {
        question: "Do I need to appear in court?",
        answer: "It depends on the case. For labor cases, personal appearance is often required at hearings. For civil cases, your lawyer can represent you in most proceedings, but your testimony may be needed. For criminal cases, the accused must be present. We'll inform you when your presence is required and prepare you for court appearances."
      },
      {
        question: "Can I appeal if I lose my case?",
        answer: "Yes, most decisions can be appealed within specific periods (usually 15 days for labor cases, 15 days for RTC decisions to CA). Appeals must have valid grounds - errors in law or procedure, or new evidence. We handle appeals at all levels and will advise if an appeal is worthwhile based on the merits."
      }
    ]
  },
  {
    category: "Specific Legal Issues",
    questions: [
      {
        question: "How do I get a divorce in the Philippines?",
        answer: "Divorce is not available in the Philippines except for Muslims under the Code of Muslim Personal Laws. For non-Muslims, options are: Annulment (declaring marriage void from the beginning due to psychological incapacity, fraud, lack of consent, etc.) or Legal Separation (separation without dissolving marriage). We handle annulment cases which typically take 2-3 years. Foreign nationals may get divorced abroad and have it recognized here through court proceedings."
      },
      {
        question: "What is the process for land title issues?",
        answer: "For TCT annulment or quieting of title: file a case in RTC, present evidence of ownership, attend hearings (can take 1-3 years). For land registration: file with LRA, publish notices, attend hearings, get title issued. For boundary disputes: attempt barangay conciliation first, then file civil case if unresolved. We handle all property cases including reconveyance, partition, and cadastral proceedings."
      },
      {
        question: "Who is a Notary Public and why do I need one?",
        answer: "A Notary Public is a lawyer authorized to notarize documents, making them admissible as evidence in court without further proof. Notarization is required for: Deeds of Sale, Special Power of Attorney, Affidavits, Contracts for large amounts, and documents for foreign use (Apostille). Atty. Libayan is a commissioned Notary Public and can notarize your documents."
      }
    ]
  },
  {
    category: "BATASnatin LIVE",
    questions: [
      {
        question: "How can I get free legal advice?",
        answer: "Join BATASnatin LIVE every day at 8:00 PM Philippine Time on YouTube. Atty. Libayan answers legal questions live during the show. Subscribe to our YouTube channel (UCVyNJy0q_Q2XB873gEkmgjQ) and turn on notifications. You can ask questions in the live chat, and Atty. Libayan will provide free legal advice on air. You can also post questions in our online forum."
      },
      {
        question: "Can I ask my question on BATASnatin LIVE?",
        answer: "Yes! During the live show at 8PM, type your legal question in the YouTube chat. Atty. Libayan reads and answers questions from viewers. For privacy, you can ask generally without revealing personal details. For confidential matters requiring detailed consultation, book an appointment instead."
      }
    ]
  }
];

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Get quick answers to common legal questions about our services and Philippine law
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-5xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-3xl font-bold font-serif mb-8 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="border-l-4 border-l-primary">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <Card className="max-w-3xl mx-auto text-center border-2 border-primary/20">
            <CardContent className="pt-12 pb-12">
              <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold font-serif mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Can&apos;t find the answer you&apos;re looking for? Contact us directly or join our daily live Q&A.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/batasnatin-live">
                    BATASnatin LIVE (8PM Daily)
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">
            Explore More
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3">Pro Bono Services</h3>
                <p className="text-sm text-white/80 mb-4">
                  Free legal representation for qualified laborers
                </p>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/pro-bono">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3">Practice Areas</h3>
                <p className="text-sm text-white/80 mb-4">
                  See all legal services we offer
                </p>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/practice-areas">View All Areas</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-bold mb-3">Free Legal Advice</h3>
                <p className="text-sm text-white/80 mb-4">
                  Join us daily at 8PM on YouTube
                </p>
                <Button asChild variant="secondary" size="sm">
                  <Link href="/batasnatin-live">Watch LIVE</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

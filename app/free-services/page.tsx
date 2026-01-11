import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Heart,
  Youtube,
  MessageSquare,
  HelpCircle,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Calendar,
  Scale
} from "lucide-react";

export const metadata = {
  title: "Free Legal Services - BATASnatin LIVE, Pro Bono & Free Advice | BATASnatin Law Firm",
  description: "Access free legal services: Daily BATASnatin LIVE at 8PM, pro bono representation for laborers, free legal advice forum, and comprehensive FAQs.",
};

const freeServices = [
  {
    id: "batasnatin-live",
    icon: Youtube,
    title: "BATASnatin LIVE",
    badge: "Daily at 8PM",
    tagline: "Free Legal Advice on YouTube",
    description: "Join Atty. Libayan every day at 8:00 PM (Philippine Time) for live legal advice. Ask questions in real-time, learn from other viewers, and watch past episodes anytime.",
    features: [
      "Daily live show at 8:00 PM PHT",
      "Ask questions in YouTube chat",
      "Learn from real cases and scenarios",
      "Access to past episode archives",
      "Interactive Q&A sessions",
      "No registration required"
    ],
    link: "/batasnatin-live",
    buttonText: "Watch BATASnatin LIVE",
    color: "primary"
  },
  {
    id: "pro-bono",
    icon: Heart,
    title: "Pro Bono Services",
    badge: "For Laborers",
    tagline: "Free Legal Representation",
    description: "Completely free legal services from filing to the Supreme Court for qualified laborers. We provide full representation at no cost for cases involving illegal dismissal, wage violations, and labor oppression.",
    features: [
      "100% free legal representation",
      "All court levels (DOLE to Supreme Court)",
      "For laborers with legitimate cases",
      "Illegal dismissal and wage cases",
      "Consultation fee waived after qualifying",
      "Only minimal printing costs apply"
    ],
    link: "/pro-bono",
    buttonText: "Check Eligibility",
    color: "secondary"
  },
  {
    id: "free-advice",
    icon: MessageSquare,
    title: "Free Legal Advice Forum",
    badge: "24-48 Hour Response",
    tagline: "Post Questions, Get Answers",
    description: "Post your legal questions online and receive detailed answers from our attorneys within 24-48 hours. Browse previous questions and answers to find solutions to common legal issues.",
    features: [
      "Post detailed questions anytime",
      "Get thorough written responses",
      "Browse previous Q&A archives",
      "Search for specific legal topics",
      "No appointment needed",
      "General advice for information only"
    ],
    link: "/free-legal-advice",
    buttonText: "Ask a Question",
    color: "primary"
  },
  {
    id: "faqs",
    icon: HelpCircle,
    title: "FAQs",
    badge: "Instant Answers",
    tagline: "Common Legal Questions",
    description: "Get instant answers to frequently asked questions about Philippine law, our services, consultation fees, pro bono program, court procedures, and specific legal issues.",
    features: [
      "General legal questions answered",
      "Consultation and fee information",
      "Pro bono program details",
      "Court procedures explained",
      "Specific legal issues covered",
      "BATASnatin LIVE information"
    ],
    link: "/faqs",
    buttonText: "Browse FAQs",
    color: "secondary"
  }
];

export default function FreeServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Free Legal Services
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Justice should be affordable to everyone. Access free legal advice, pro bono representation, and educational resources.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Excellence is our Standard
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="space-y-12">
            {freeServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <Card
                  key={service.id}
                  className={`border-2 ${
                    service.color === "primary" ? "border-primary/20" : "border-secondary/20"
                  } hover:shadow-xl transition-all`}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 ${isEven ? "" : "lg:grid-flow-dense"}`}>
                    {/* Icon & Title Side */}
                    <div className={`p-8 ${isEven ? "" : "lg:col-start-2"}`}>
                      <div className={`w-20 h-20 ${
                        service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
                      } rounded-full flex items-center justify-center mb-6`}>
                        <Icon className={`w-10 h-10 ${
                          service.color === "primary" ? "text-primary" : "text-secondary"
                        }`} />
                      </div>

                      <Badge
                        variant={service.color === "primary" ? "default" : "secondary"}
                        className="mb-3"
                      >
                        {service.badge}
                      </Badge>

                      <h2 className="text-3xl font-bold font-serif mb-2">
                        {service.title}
                      </h2>

                      <p className={`text-xl font-semibold mb-4 ${
                        service.color === "primary" ? "text-primary" : "text-secondary"
                      }`}>
                        {service.tagline}
                      </p>

                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      <Button
                        asChild
                        size="lg"
                        variant={service.color === "primary" ? "default" : "secondary"}
                        className="w-full sm:w-auto"
                      >
                        <Link href={service.link}>
                          {service.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>

                    {/* Features Side */}
                    <div className={`p-8 bg-muted/30 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                      <h3 className="text-lg font-semibold mb-4">What You Get:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              service.color === "primary" ? "text-primary" : "text-secondary"
                            }`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Which Free Service Is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the option that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Need Immediate Advice?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join BATASnatin LIVE daily at 8PM
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/batasnatin-live">Watch LIVE</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Need Free Representation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Check if you qualify for pro bono
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/pro-bono">Check Eligibility</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Have a Specific Question?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Post in our free advice forum
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/free-legal-advice">Ask Question</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <HelpCircle className="w-12 h-12 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Looking for Quick Answers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our comprehensive FAQs
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/faqs">View FAQs</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Important Information</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">Free Advice vs. Representation:</strong> Free legal advice through BATASnatin LIVE and our online forum is general in nature and does not create an attorney-client relationship. For formal representation, schedule a consultation.
                      </p>
                      <p>
                        <strong className="text-foreground">Pro Bono Services:</strong> Pro bono representation is available only for qualified laborers with legitimate cases. An initial consultation (₱2,500) is required for assessment, which will be waived if you qualify.
                      </p>
                      <p>
                        <strong className="text-foreground">Confidentiality:</strong> Avoid sharing sensitive personal information (full names, addresses, IDs) in public forums or live chats. For confidential matters, book a private consultation.
                      </p>
                      <p className="font-semibold text-foreground">
                        For specific legal representation or if your case requires detailed analysis and documentation, please book a formal consultation (₱2,500) or check if you qualify for our pro bono services.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Need More Than Free Advice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Book a formal consultation for personalized legal representation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation (₱2,500)
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white text-white"
            >
              <Link href="/practice-areas">
                <Users className="mr-2 h-5 w-5" />
                View Practice Areas
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

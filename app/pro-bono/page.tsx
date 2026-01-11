"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, Mail, AlertCircle, Heart, Scale, Users } from "lucide-react";
import Link from "next/link";
import ProBonoChecker from "@/components/forms/ProBonoChecker";

export default function ProBonoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">100% FREE Legal Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Pro Bono Legal Services for Laborers
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-bold text-secondary">
              No Really, It&apos;s Free!
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              With the firm&apos;s strong commitment to protect labor and promote social justice,
              we offer free legal services from filing up to the Supreme Court for laborers who are oppressed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="#contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                <Link href="#eligibility">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Check Eligibility
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mt-4 mb-6">
              Complete Legal Representation at Zero Cost
            </h2>
            <p className="text-lg text-muted-foreground">
              Justice should be affordable to everyone. That&apos;s why we provide comprehensive legal services
              to qualified laborers without any professional fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-2 border-primary/20">
              <CardHeader>
                <Scale className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Full Representation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From initial filing through all court levels up to the Supreme Court
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-secondary/20">
              <CardHeader>
                <Users className="w-12 h-12 text-secondary mx-auto mb-2" />
                <CardTitle>Expert Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experienced lawyers dedicated to protecting your rights and interests
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-2" />
                <CardTitle>Social Justice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Committed to leveling the playing field for oppressed workers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Qualifying Cases */}
      <section id="eligibility" className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                Qualifying Cases
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide pro bono services for the following labor-related cases:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Illegal Dismissal",
                "Constructive Dismissal",
                "Demotion without just cause",
                "Illegal Suspension",
                "Underpayment or Non-payment of Wages",
                "Unpaid Salaries and Benefits",
                "SSS, PhilHealth, Pag-IBIG Issues",
                "Labor Standards Violations",
                "Unfair Labor Practice",
                "Any form of labor oppression"
              ].map((caseType, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{caseType}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Eligibility Checker */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                Quick Check
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mt-4 mb-6">
                Check Your Eligibility Now
              </h2>
              <p className="text-lg text-muted-foreground">
                Answer a few quick questions to see if you qualify for our free legal services.
                This takes less than 2 minutes.
              </p>
            </div>

            <ProBonoChecker />

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="text-sm text-blue-900">
                  <strong>Please Note:</strong> This eligibility checker provides a preliminary assessment only.
                  Final qualification will be determined during your consultation where we'll review your
                  complete documentation and circumstances. All information is confidential.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                How to Avail of This Service
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple steps to get free legal representation
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "Contact us to arrange an initial consultation. The consultation fee is ₱2,500, but this will be waived once you qualify for our pro bono program.",
                  color: "primary"
                },
                {
                  step: "2",
                  title: "Case Assessment",
                  description: "We will evaluate your case to determine if it has legitimate grounds and if you qualify for our pro bono services.",
                  color: "secondary"
                },
                {
                  step: "3",
                  title: "Qualification Approval",
                  description: "If your case qualifies, we will inform you that you have been granted pro bono representation. Your consultation fee will be refunded or waived.",
                  color: "primary"
                },
                {
                  step: "4",
                  title: "Free Legal Representation",
                  description: "We will represent you completely free of charge from filing your case through all levels of court, up to the Supreme Court if necessary.",
                  color: "secondary"
                }
              ].map((process, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className={`w-12 h-12 bg-${process.color} text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                        {process.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                        <p className="text-muted-foreground">{process.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-12">
              What&apos;s Included (and What&apos;s Not)
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CheckCircle className="w-6 h-6" />
                    Completely FREE
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Acceptance fee",
                      "Legal representation at all levels",
                      "Document preparation and drafting",
                      "Court appearances and hearings",
                      "Legal advice and consultations",
                      "Case strategy and management"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-muted-foreground">
                    <AlertCircle className="w-6 h-6" />
                    Minimal Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Printing and photocopying:</strong> You will need to cover the minimal costs for printing and photocopying documents required for your case.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm">
                      <strong>Note:</strong> These are truly minimal costs. The legal fees that are waived (which can cost hundreds of thousands of pesos) far outweigh these small expenses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Important Notice</h3>
                    <p className="text-lg mb-4">
                      The pro bono legal service is <strong>only available for cases within the Philippines</strong>.
                    </p>
                    <p className="text-muted-foreground">
                      We are committed to serving laborers in the Philippines who need legal assistance but cannot afford the high costs of legal representation. This service reflects our mission that justice should be accessible to everyone.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            If you are a laborer facing oppression or injustice, contact us today. We are here to help you fight for your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="tel:+639159546080">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0915 954 6080
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
              <Link href="tel:+6323594203">
                <Phone className="mr-2 h-5 w-5" />
                Call: (02) 359-4203
              </Link>
            </Button>
          </div>
          <p className="text-white/80">
            <Mail className="inline-block w-4 h-4 mr-2" />
            Email: <Link href="mailto:info@batasnatin.com" className="underline hover:text-secondary">info@batasnatin.com</Link>
          </p>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70 max-w-2xl mx-auto">
              Office Hours: Monday - Friday: 9:00 AM - 5:00 PM | Weekends by Appointment<br />
              2nd Floor, LC Building, 31 General Luna Street, Taguig City (Above Goldilocks, fronting Taguig City Hall)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

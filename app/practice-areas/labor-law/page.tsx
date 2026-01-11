"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Briefcase,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  FileText,
  Scale,
  Clock,
  Phone,
  Heart,
  AlertCircle,
  Building
} from "lucide-react";

const laborServices = [
  {
    title: "Illegal Dismissal",
    description: "Representation for employees terminated without just or authorized cause",
    icon: Shield
  },
  {
    title: "Constructive Dismissal",
    description: "Cases where working conditions force resignation (demotion, harassment, unsafe conditions)",
    icon: AlertCircle
  },
  {
    title: "Non-payment of Wages",
    description: "Recovery of unpaid salaries, overtime pay, holiday pay, and other benefits",
    icon: FileText
  },
  {
    title: "Illegal Suspension",
    description: "Defense against unjust preventive or disciplinary suspension",
    icon: Scale
  },
  {
    title: "Labor Standards Violations",
    description: "13th month pay, service incentive leave, maternity/paternity benefits, minimum wage",
    icon: CheckCircle
  },
  {
    title: "SSS/PhilHealth/Pag-IBIG Issues",
    description: "Non-remittance of contributions, benefit claims, compliance issues",
    icon: Building
  }
];

const processSteps = [
  {
    step: "1",
    title: "SENA Mediation",
    description: "Single Entry Approach (SENA) - mandatory 30-day conciliation at DOLE. We represent you in settlement negotiations.",
    duration: "30 days"
  },
  {
    step: "2",
    title: "NLRC Filing",
    description: "If SENA fails, we file your case with the National Labor Relations Commission (NLRC). We prepare all pleadings and evidence.",
    duration: "Case dependent"
  },
  {
    step: "3",
    title: "Labor Arbiter Hearing",
    description: "Mandatory conciliation and mediation, followed by formal hearings. Position papers, evidence presentation, and arguments.",
    duration: "3-6 months"
  },
  {
    step: "4",
    title: "Decision & Appeals",
    description: "Labor Arbiter decision can be appealed to NLRC Commission, then Court of Appeals, and finally Supreme Court. We handle all levels.",
    duration: "Varies by level"
  }
];

const caseTypes = [
  "Termination Cases (Just Cause: serious misconduct, willful disobedience, gross neglect)",
  "Termination Cases (Authorized Cause: retrenchment, redundancy, closure)",
  "Money Claims (unpaid wages, separation pay, backwages)",
  "Regularization Issues (end of contract, project-based to regular)",
  "Unfair Labor Practice (union busting, interference with rights)",
  "CBA Disputes (collective bargaining agreement violations)",
  "Labor-Only Contracting (illegal outsourcing arrangements)",
  "Occupational Safety Violations (unsafe working conditions)"
];

const proBonoEligibility = [
  "You are a laborer (not managerial or supervisory position)",
  "You have a legitimate labor case with merit",
  "Cases involving illegal dismissal, constructive dismissal, or wage violations",
  "Cases involving labor oppression or abuse",
  "You cannot afford regular legal representation"
];

export default function LaborLawPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              Pro Bono Available
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Labor Law
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Expert representation for laborers from DOLE to Supreme Court - with pro bono services for qualified cases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/pro-bono">
                  <Heart className="mr-2 h-5 w-5" />
                  Check Pro Bono Eligibility
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                <Link href="/contact">
                  Schedule Consultation (₱2,500)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pro Bono Highlight */}
      <section className="py-12 bg-secondary text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-serif mb-4">
              Free Legal Representation for Qualified Laborers
            </h2>
            <p className="text-xl mb-6 text-white/90">
              With our strong commitment to protect labor and promote social justice, we provide completely free legal services from filing to the Supreme Court for laborers who are oppressed.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
              <Link href="/pro-bono">
                Learn More About Pro Bono Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Labor Law Services */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              Labor Law Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive representation for all types of labor disputes under Philippine law
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laborServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              Labor Case Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the Philippine labor dispute resolution process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Cases */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
                Types of Labor Cases We Handle
              </h2>
              <p className="text-lg text-muted-foreground">
                Experienced representation across all labor law matters
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {caseTypes.map((caseType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-4 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{caseType}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Bono Eligibility */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Do You Qualify for Free Legal Services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Our pro bono program provides completely free legal representation for qualified laborers. You may qualify if:
                  </p>
                  <div className="space-y-3 mb-6">
                    {proBonoEligibility.map((criteria, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <p>{criteria}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg mb-6">
                    <p className="font-semibold mb-2">What&apos;s Covered (100% Free):</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Initial consultation fee (₱2,500 waived after qualification)</li>
                      <li>• Acceptance fees</li>
                      <li>• Legal representation at all levels (DOLE, NLRC, CA, SC)</li>
                      <li>• Document preparation and filing</li>
                      <li>• Court appearances and hearings</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-3">
                      *Only minimal printing and photocopying costs apply
                    </p>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link href="/pro-bono">
                      Learn More About Pro Bono Program
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              Need Help with a Labor Case?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you qualify for pro bono or need paid representation, we&apos;re here to fight for your rights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              >
                <Link href="/free-legal-advice">
                  Get Free Legal Advice
                </Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70">
                Questions? Join <Link href="/batasnatin-live" className="underline hover:text-secondary">BATASnatin LIVE</Link> daily at 8PM for free legal advice, or check our <Link href="/faqs" className="underline hover:text-secondary">FAQs</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

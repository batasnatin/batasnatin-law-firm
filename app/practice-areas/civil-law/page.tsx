"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Scale,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Building,
  Home,
  Heart,
  UserCheck,
  Briefcase,
  AlertTriangle
} from "lucide-react";

const civilServices = [
  {
    title: "Collection of Sum of Money",
    description: "Recovery of debts, loans, and unpaid obligations through demand letters and court actions",
    icon: FileText
  },
  {
    title: "Breach of Contract",
    description: "Enforcement of contracts, damages for non-performance, and specific performance actions",
    icon: Shield
  },
  {
    title: "Damages & Torts",
    description: "Personal injury claims, property damage, libel/slander, and quasi-delict cases",
    icon: AlertTriangle
  },
  {
    title: "Property Disputes",
    description: "Boundary disputes, land ownership, easement rights, and partition of property",
    icon: Home
  },
  {
    title: "Civil Aspect of Criminal Cases",
    description: "Recovery of damages arising from criminal acts (estafa, BP 22 checks, etc.)",
    icon: Scale
  },
  {
    title: "Injunction & Restraining Orders",
    description: "Temporary and permanent injunctions to prevent irreparable harm",
    icon: Building
  }
];

const processSteps = [
  {
    step: "1",
    title: "Demand Letter",
    description: "Formal written demand for compliance or payment. This is required before filing most civil cases under Philippine law.",
    duration: "5-15 days"
  },
  {
    step: "2",
    title: "Filing of Complaint",
    description: "If demand is ignored, we file a verified complaint with the appropriate court (MTC/RTC depending on amount in controversy).",
    duration: "1-2 weeks"
  },
  {
    step: "3",
    title: "Summons & Answer",
    description: "Court issues summons to defendant who must file an Answer within 15-30 days. Pre-trial conference follows.",
    duration: "1-3 months"
  },
  {
    step: "4",
    title: "Trial & Decision",
    description: "Presentation of evidence, witness testimony, and arguments. Court decision can be appealed to Court of Appeals and Supreme Court.",
    duration: "6 months - 3 years"
  }
];

const caseTypes = [
  "Collection Cases (Small Claims up to ₱400,000)",
  "Contract Disputes (Sales, Lease, Services, Partnership)",
  "Quasi-Delict (Negligence, Reckless Imprudence, Vicarious Liability)",
  "Damages (Moral, Actual, Exemplary, Nominal, Temperate)",
  "Specific Performance (Enforcement of Obligations)",
  "Rescission of Contracts (Mutual Restitution)",
  "Quieting of Title (Remove Clouds on Title)",
  "Accion Publiciana (Recovery of Right to Possess)",
  "Forcible Entry/Unlawful Detainer (Ejectment Cases)",
  "BP 22 Cases (Bouncing Checks - Civil Aspect)",
  "Estafa Cases (Civil Aspect for Restitution)",
  "Interpleader (Competing Claims to Property)"
];

const smallClaimsInfo = [
  "Cases up to ₱400,000 (as of 2024)",
  "No need for lawyers (but we can assist in preparation)",
  "Simplified procedure, no formal court rules",
  "Faster resolution (usually 1 hearing)",
  "No appeals allowed (except certiorari for grave abuse)",
  "Available at Metropolitan/Municipal Trial Courts"
];

const keyPrinciples = [
  {
    title: "Jurisdiction",
    description: "MTC: ₱0-₱400,000 | RTC: Above ₱400,000 (Metro Manila) or ₱300,000 (provinces). Always check jurisdictional amounts."
  },
  {
    title: "Prescription Periods",
    description: "Written contracts: 10 years | Oral contracts: 6 years | Quasi-delict: 4 years | Injury to rights: 4 years. File within the period!"
  },
  {
    title: "Preponderance of Evidence",
    description: "Civil cases require only preponderance (more likely than not), not proof beyond reasonable doubt like criminal cases."
  },
  {
    title: "Attorney's Fees",
    description: "Generally, each party pays their own attorney's fees unless contract/law provides otherwise or bad faith is proven."
  }
];

export default function CivilLawPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Badge className="mb-4 bg-amber-500 text-slate-900 hover:bg-amber-400">
              Civil Litigation
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Civil Law Practice
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Protecting Your Rights in Civil Disputes Across the Philippines
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              From simple collection cases to complex civil litigation, we represent individuals and businesses
              in all types of civil disputes under Philippine law. We handle cases from demand letters through
              Supreme Court appeals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Get Free Legal Advice
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Civil Law Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Civil Law Services We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive civil litigation services under the Philippine Civil Code and Rules of Court
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              The Civil Litigation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the Philippine court system: From demand letter to Supreme Court
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <Card className="overflow-hidden border-l-4 border-l-amber-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-xl">{step.title}</h3>
                          <Badge variant="outline" className="ml-2">{step.duration}</Badge>
                        </div>
                        <p className="text-slate-600">{step.description}</p>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Types of Civil Cases We Handle
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced in all aspects of Philippine civil litigation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseTypes.map((caseType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{caseType}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Claims Court */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-amber-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Scale className="h-8 w-8" />
                  Small Claims Court Procedure
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  For cases up to ₱400,000, the Philippines has a simplified Small Claims procedure
                  designed for faster resolution without the need for lawyers (though we can help prepare).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {smallClaimsInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{info}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-900">
                    <strong>Note:</strong> Even though lawyers are not required in Small Claims cases,
                    proper preparation is crucial. We can assist in preparing your Statement of Claim and evidence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Important Philippine Civil Law Principles
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What you need to know before filing a civil case
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-600">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready to Pursue Your Civil Case?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let us evaluate your case and guide you through the legal process.
              Schedule a consultation today for ₱2,500 (waived if you retain our services).
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask a Legal Question (Free)
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
              Excellence is our standard. From demand letters to Supreme Court appeals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

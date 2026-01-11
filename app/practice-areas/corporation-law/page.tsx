"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Building,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Briefcase,
  TrendingUp,
  Scale,
  BookOpen,
  AlertCircle,
  UserPlus
} from "lucide-react";

const corporationServices = [
  {
    title: "Corporation Registration",
    description: "Complete SEC registration for stock and non-stock corporations, including name reservation and Articles of Incorporation",
    icon: Building
  },
  {
    title: "Corporate Governance",
    description: "Board resolutions, bylaws amendments, stockholders' meetings, and corporate compliance",
    icon: Scale
  },
  {
    title: "Business Permits & Licenses",
    description: "Mayor's permit, BIR registration, DTI/SEC certificates, and industry-specific licenses",
    icon: FileText
  },
  {
    title: "Mergers & Acquisitions",
    description: "Due diligence, share purchase agreements, asset sales, and corporate restructuring",
    icon: TrendingUp
  },
  {
    title: "SEC Compliance",
    description: "Annual GIS filing, financial statements submission, amendments, and reportorial requirements",
    icon: BookOpen
  },
  {
    title: "Corporate Dissolution",
    description: "Voluntary dissolution, liquidation proceedings, and winding up of corporate affairs",
    icon: AlertCircle
  }
];

const registrationSteps = [
  {
    step: "1",
    title: "Name Verification & Reservation",
    description: "Check name availability with SEC and reserve your corporate name for 30 days.",
    duration: "1-3 days"
  },
  {
    step: "2",
    title: "Preparation of Documents",
    description: "Draft Articles of Incorporation, By-Laws, Treasurer's Affidavit, and other incorporation documents.",
    duration: "3-5 days"
  },
  {
    step: "3",
    title: "SEC Registration",
    description: "Submit documents to SEC for approval. Receive Certificate of Incorporation and TIN.",
    duration: "7-15 days"
  },
  {
    step: "4",
    title: "Post-Registration Requirements",
    description: "Barangay clearance, Mayor's permit, BIR registration (COR, books of accounts), SSS/PhilHealth/Pag-IBIG registration.",
    duration: "2-4 weeks"
  }
];

const corporateDocuments = [
  "Articles of Incorporation (Stock/Non-Stock)",
  "Corporate By-Laws",
  "Board Resolutions (all types)",
  "Secretary's Certificates",
  "Stockholders' Agreement",
  "Subscription Agreement",
  "Transfer of Shares (Deed of Assignment)",
  "Corporate Amendment Filings",
  "General Information Sheet (GIS)",
  "Financial Statements (Audited)",
  "Joint Venture Agreements",
  "Shareholders' Voting Trusts"
];

const businessStructures = [
  {
    type: "Sole Proprietorship",
    description: "Single owner, unlimited liability",
    requirements: "DTI registration, Mayor's permit, BIR",
    capital: "No minimum",
    pros: "Simple, complete control",
    cons: "Unlimited personal liability"
  },
  {
    type: "Partnership",
    description: "2+ partners, shared liability",
    requirements: "SEC/DTI registration (depending on type)",
    capital: "₱3,000 minimum for SEC",
    pros: "Shared resources and expertise",
    cons: "Joint and several liability"
  },
  {
    type: "Corporation",
    description: "Separate legal entity, limited liability",
    requirements: "SEC registration, minimum 5 incorporators",
    capital: "No minimum (Revised Corporation Code)",
    pros: "Limited liability, perpetual existence",
    cons: "Complex compliance requirements"
  },
  {
    type: "One Person Corporation (OPC)",
    description: "Single stockholder corporation",
    requirements: "SEC registration, natural person only",
    capital: "No minimum",
    pros: "Limited liability + sole control",
    cons: "Cannot be owned by another corporation"
  }
];

const complianceRequirements = [
  "Annual General Information Sheet (GIS) - due every January 31",
  "Audited Financial Statements (AFS) - within 120 days after fiscal year",
  "Annual Corporate Tax Return (ITR) - within 4 months after fiscal year",
  "Quarterly Tax Returns (1702Q/1701Q)",
  "Monthly Withholding Tax Returns (BIR Forms 1601C/1601E/1601F)",
  "Social Security System (SSS) contributions",
  "PhilHealth and Pag-IBIG contributions",
  "Mayor's Permit renewal (annual)",
  "Fire Safety Inspection Certificate (FSIC)",
  "Sanitary Permit (if applicable)"
];

export default function CorporationLawPage() {
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
              Business Law
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Corporation Law Practice
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Building Businesses Under Philippine Corporation Law
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              From SEC registration to corporate governance, we guide startups and established businesses
              through every aspect of Philippine corporation law. We handle registration, compliance,
              contracts, and corporate restructuring under the Revised Corporation Code.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Start Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask About Business Formation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporation Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Corporation Law Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive business and corporate legal services under the Revised Corporation Code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporationServices.map((service, index) => (
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

      {/* Registration Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              SEC Corporation Registration Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Step-by-step guide to registering your corporation in the Philippines
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {registrationSteps.map((step, index) => (
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

      {/* Business Structures */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Choosing Your Business Structure
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compare different business structures under Philippine law
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessStructures.map((structure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-amber-500 transition-colors">
                  <CardHeader className="bg-slate-50">
                    <CardTitle className="text-xl text-amber-600">{structure.type}</CardTitle>
                    <p className="text-sm text-slate-600">{structure.description}</p>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <div>
                      <strong className="text-sm text-slate-700">Requirements:</strong>
                      <p className="text-sm text-slate-600">{structure.requirements}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-slate-700">Minimum Capital:</strong>
                      <p className="text-sm text-slate-600">{structure.capital}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-green-700">Advantages:</strong>
                      <p className="text-sm text-slate-600">{structure.pros}</p>
                    </div>
                    <div>
                      <strong className="text-sm text-red-700">Disadvantages:</strong>
                      <p className="text-sm text-slate-600">{structure.cons}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Documents */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Corporate Documents We Prepare
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional drafting of all corporate legal documents
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {corporateDocuments.map((document, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-amber-500 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{document}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-20 bg-slate-50">
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
                  <BookOpen className="h-8 w-8" />
                  Annual Compliance Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Every Philippine corporation must comply with these regular filing requirements.
                  We help ensure your business stays compliant and avoids penalties.
                </p>
                <div className="space-y-3">
                  {complianceRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-900">
                    <strong>Penalty for Non-Compliance:</strong> Failure to file GIS and AFS may result in
                    revocation of certificate of incorporation by SEC. BIR penalties and surcharges also apply.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Ready to Start or Grow Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let us handle the legal complexities so you can focus on building your business.
              Schedule a consultation today for ₱2,500 (waived if you proceed with incorporation).
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Start Your Corporation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask About Business Formation
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-slate-400 text-sm">
              Excellence is our standard. From startup to stock corporation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

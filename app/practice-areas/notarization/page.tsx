"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Stamp,
  FileSignature,
  Home,
  Users,
  Briefcase,
  Globe,
  Shield,
  AlertCircle
} from "lucide-react";

const notarialServices = [
  {
    title: "Affidavits",
    description: "Affidavit of Loss, Discrepancy, Guardianship, Support, Undertaking, and all types of sworn statements",
    icon: FileText,
    price: "₱200-₱500"
  },
  {
    title: "Contracts & Agreements",
    description: "Sale, lease, loan, employment, partnership, and other contractual documents",
    icon: FileSignature,
    price: "₱500-₱2,000"
  },
  {
    title: "Deeds of Sale",
    description: "Absolute Sale, Conditional Sale, Extrajudicial Settlement with Sale",
    icon: Home,
    price: "₱1,500-₱5,000"
  },
  {
    title: "Special Power of Attorney",
    description: "General SPA, specific SPA for property, banking, vehicle registration, etc.",
    icon: Users,
    price: "₱500-₱1,500"
  },
  {
    title: "Corporate Documents",
    description: "Secretary's Certificates, Board Resolutions, Articles of Incorporation amendments",
    icon: Briefcase,
    price: "₱500-₱2,000"
  },
  {
    title: "Certified True Copies",
    description: "Certification of documents for submission to government offices or courts",
    icon: Stamp,
    price: "₱100-₱300"
  }
];

const commonDocuments = [
  "Affidavit of Loss (ID, documents, property)",
  "Affidavit of Discrepancy (name, birthdate, address)",
  "Affidavit of Support (immigration, student visa)",
  "Deed of Absolute Sale (land, vehicle, personal property)",
  "Deed of Donation (property transfer as gift)",
  "Extrajudicial Settlement (estate distribution)",
  "Special Power of Attorney (property, banking, legal)",
  "General Power of Attorney (broad authority)",
  "Contract of Lease (residential, commercial)",
  "Deed of Undertaking (commitment, promise)",
  "Waiver of Rights (inheritance, claims)",
  "Joint Affidavit (multiple affiants)",
  "Acknowledgement (signature verification)",
  "Jurat (oath administration)",
  "Secretary's Certificate (corporate actions)",
  "Board Resolution (corporate decisions)"
];

const requirements = [
  {
    category: "For Individuals",
    items: [
      "Valid government-issued ID (original + photocopy)",
      "Draft or final document to be notarized",
      "Community Tax Certificate (Cedula) if required",
      "Residence Certificate if applicable",
      "Personal appearance required (no representatives)"
    ]
  },
  {
    category: "For Corporations/Businesses",
    items: [
      "SEC Registration Certificate",
      "Board Resolution authorizing signatory",
      "Secretary's Certificate of corporate action",
      "Valid ID of corporate representative",
      "Corporate documents (Articles, By-Laws if needed)"
    ]
  },
  {
    category: "For Property Documents",
    items: [
      "Transfer Certificate of Title (TCT) or Tax Declaration",
      "Real Property Tax clearance",
      "BIR Certificate Authorizing Registration (CAR) for Deed of Sale",
      "Valid IDs of all parties (buyer and seller)",
      "Community Tax Certificates (Cedula)"
    ]
  }
];

const notarialActs = [
  {
    type: "Acknowledgement",
    description: "Verification that person freely signed the document and acknowledges it as their voluntary act",
    example: "Contracts, Deeds of Sale, Mortgage Agreements"
  },
  {
    type: "Jurat",
    description: "Sworn statement where person swears or affirms truth of document's contents under oath",
    example: "Affidavits, Sworn Declarations, Verification of Pleadings"
  },
  {
    type: "Oath/Affirmation",
    description: "Administration of oath for public officers, witnesses, or specific purposes",
    example: "Oath of Office, Witness Affirmation, Promissory Oath"
  },
  {
    type: "Copy Certification",
    description: "Certification that copy is true and faithful reproduction of original document",
    example: "Certified True Copies of contracts, IDs, certificates"
  }
];

const fees = [
  {
    service: "Acknowledgement (per signature)",
    fee: "₱50 - ₱100",
    notes: "Basic notarial fee per Notarial Rules"
  },
  {
    service: "Jurat/Oath (per affiant)",
    fee: "₱50 - ₱100",
    notes: "For affidavits and sworn statements"
  },
  {
    service: "Copy Certification (per page)",
    fee: "₱20 - ₱50",
    notes: "Plus ₱50-₱100 certification fee"
  },
  {
    service: "Document Preparation",
    fee: "₱200 - ₱5,000",
    notes: "Depends on document complexity"
  },
  {
    service: "Community Tax (Cedula)",
    fee: "₱5 - ₱50",
    notes: "Required for some documents"
  },
  {
    service: "Documentary Stamp Tax",
    fee: "Varies",
    notes: "BIR requirement for certain contracts"
  }
];

export default function NotarizationPage() {
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
              Notarial Services
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Notarization & Document Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Professional Notarization of All Legal Documents
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
              Fast, affordable, and reliable notarial services for individuals and businesses.
              We notarize affidavits, contracts, deeds, powers of attorney, and all types of legal documents
              in compliance with the 2004 Rules on Notarial Practice.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Get Document Notarized
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask About Notarization
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notarial Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Notarial Services We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional notarization services with transparent pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notarialServices.map((service, index) => (
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
                    <Badge className="mt-2 w-fit bg-green-100 text-green-700 hover:bg-green-100">
                      {service.price}
                    </Badge>
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

      {/* Common Documents */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Documents We Notarize
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive notarial services for all types of legal documents
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonDocuments.map((document, index) => (
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

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Requirements for Notarization
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What to bring when getting your documents notarized
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-amber-200">
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-lg text-amber-700">{req.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notarial Acts */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Types of Notarial Acts
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the different types of notarization under Philippine law
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {notarialActs.map((act, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-600">{act.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-600">{act.description}</p>
                    <div className="pt-3 border-t border-slate-200">
                      <strong className="text-sm text-slate-700">Common Examples:</strong>
                      <p className="text-sm text-slate-600 mt-1">{act.example}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Notarial Fees
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Transparent pricing in compliance with Supreme Court rules
              </p>
            </div>

            <Card className="border-2 border-amber-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Stamp className="h-8 w-8" />
                  Fee Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-amber-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Service</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Fee Range</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-amber-900">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {fees.map((fee, index) => (
                        <tr key={index} className="hover:bg-amber-50/50">
                          <td className="px-6 py-4 text-sm text-slate-700">{fee.service}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-green-700">{fee.fee}</td>
                          <td className="px-6 py-4 text-sm text-slate-600">{fee.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-amber-50 border-t border-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-amber-900">
                      <strong>Important Notes:</strong>
                      <ul className="mt-2 space-y-1 list-disc list-inside">
                        <li>Fees are based on 2004 Rules on Notarial Practice and IBP Guidelines</li>
                        <li>Complex documents may require higher preparation fees</li>
                        <li>Personal appearance of signatory/affiant is REQUIRED</li>
                        <li>BIR Documentary Stamp Tax applies to certain contracts (separate from notarial fee)</li>
                        <li>Rush processing available for additional fee</li>
                      </ul>
                    </div>
                  </div>
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
              Need Your Documents Notarized?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Visit our office or schedule an appointment for fast and professional notarial services.
              Same-day notarization available for most documents.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                  Schedule Notarization
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask About Documents
                </Button>
              </Link>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-slate-400 text-sm">
                📍 2nd Floor, LC Building, 31 General Luna St, Taguig City
              </p>
              <p className="text-slate-400 text-sm">
                📞 +63 915 954 6080 | ✉️ info@batasnatin.com
              </p>
              <p className="text-slate-400 text-sm">
                🕒 Monday-Friday 9AM-5PM, Weekends by appointment
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

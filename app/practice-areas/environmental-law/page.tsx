"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Leaf,
  FileText,
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Building,
  Droplet,
  Trees,
  Scale,
  Factory,
  Wind
} from "lucide-react";

const environmentalServices = [
  {
    title: "ECC & EIS Preparation",
    description: "Environmental Compliance Certificate and Environmental Impact Statement preparation and filing with DENR",
    icon: FileText
  },
  {
    title: "Environmental Permits",
    description: "Discharge permits, hazardous waste permits, EMB clearances, and wildlife permits",
    icon: Shield
  },
  {
    title: "Environmental Litigation",
    description: "Cases under RA 8749 (Clean Air Act), RA 9003 (Ecological Solid Waste Management), and other environmental laws",
    icon: Scale
  },
  {
    title: "Mining & Quarrying Law",
    description: "MPSA, FTAA applications, small-scale mining permits, and compliance with Philippine Mining Act",
    icon: Building
  },
  {
    title: "Water Rights & Pollution",
    description: "Water permits, pollution control, RA 9275 (Clean Water Act) compliance",
    icon: Droplet
  },
  {
    title: "Forest & Wildlife Protection",
    description: "Illegal logging cases, wildlife protection, biodiversity law, and protected areas compliance",
    icon: Trees
  }
];

const environmentalLaws = [
  {
    law: "RA 8749 - Clean Air Act",
    description: "Air quality management, emission standards, vehicular emissions, smokebelchers",
    penalties: "₱1,000 - ₱100,000/day + imprisonment"
  },
  {
    law: "RA 9003 - Ecological Solid Waste Management",
    description: "Waste segregation, recycling, composting, sanitary landfills, prohibited acts",
    penalties: "₱1,000 - ₱1,000,000 + imprisonment"
  },
  {
    law: "RA 9275 - Clean Water Act",
    description: "Water quality standards, wastewater discharge permits, water pollution control",
    penalties: "₱10,000 - ₱200,000/day + imprisonment"
  },
  {
    law: "RA 7942 - Philippine Mining Act",
    description: "Mineral production sharing agreements, small-scale mining, quarry permits",
    penalties: "₱100,000 - ₱1,000,000 + cancellation"
  },
  {
    law: "RA 9147 - Wildlife Resources Conservation",
    description: "Protection of endangered species, wildlife trafficking, habitat conservation",
    penalties: "₱50,000 - ₱5,000,000 + 2-20 years"
  },
  {
    law: "PD 705 - Revised Forestry Code",
    description: "Illegal logging, kaingin, forest land conversion, timber licensing",
    penalties: "₱500 - ₱100,000 + 5-20 years"
  }
];

const eccProcess = [
  {
    step: "1",
    title: "Project Description",
    description: "Prepare detailed project description, site location, environmental setting baseline study",
    duration: "1-2 weeks"
  },
  {
    step: "2",
    title: "EIA Study",
    description: "Conduct Environmental Impact Assessment (EIA) or Initial Environmental Examination (IEE) depending on project classification",
    duration: "1-3 months"
  },
  {
    step: "3",
    title: "Public Consultation",
    description: "Mandatory public hearing/scoping for Category A and B projects. Document stakeholder concerns",
    duration: "1 month"
  },
  {
    step: "4",
    title: "ECC Application",
    description: "Submit EIS/IEE Report to DENR-EMB. Review by technical committee and issuance of ECC",
    duration: "2-6 months"
  }
];

const projectCategories = [
  {
    category: "Category A - EIS Required",
    description: "Projects with significant environmental impact",
    examples: "Mining, large infrastructure, power plants, industrial estates, resorts in protected areas"
  },
  {
    category: "Category B - IEE Required",
    description: "Projects with moderate environmental impact",
    examples: "Medium-scale industrial projects, commercial buildings, subdivisions, fishponds"
  },
  {
    category: "Category C - Exempt",
    description: "Projects with minimal environmental impact",
    examples: "Small commercial establishments, residential houses, minor agricultural projects"
  }
];

const environmentalRights = [
  "Right to a balanced and healthful ecology (Section 16, Article II, 1987 Constitution)",
  "Standing to file environmental cases (no need to prove direct injury in public interest cases)",
  "Writ of Kalikasan (for environmental damage of constitutional magnitude)",
  "Writ of Continuing Mandamus (for government inaction on environmental protection)",
  "Citizen suits against environmental violators (under environmental laws)",
  "Access to environmental information (DENR must provide data)",
  "Right to participate in environmental decision-making (public consultations)"
];

export default function EnvironmentalLawPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-900 opacity-95" />
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Badge className="mb-4 bg-green-500 text-white hover:bg-green-400">
              Environmental Protection
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Environmental Law Practice
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Protecting Our Environment Through Legal Excellence
            </p>
            <p className="text-lg text-green-200 max-w-3xl mx-auto mb-8">
              As a graduate of Environmental Science and a lawyer, Atty. Libayan brings unique expertise
              to environmental law. We handle ECC applications, environmental permits, environmental litigation,
              and advocacy for the constitutional right to a balanced and healthful ecology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  Environmental Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ask Environmental Question
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Environmental Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Environmental Law Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive environmental legal services under Philippine environmental laws
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environmentalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-green-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-green-600" />
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

      {/* ECC Process */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Environmental Compliance Certificate Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Step-by-step guide to obtaining ECC from DENR-EMB
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {eccProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <Card className="overflow-hidden border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
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

      {/* Project Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              DENR Project Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding which environmental clearance your project requires
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-lg text-green-700">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <p className="text-sm text-slate-600">{category.description}</p>
                    <div>
                      <strong className="text-sm text-slate-700">Examples:</strong>
                      <p className="text-sm text-slate-600">{category.examples}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Laws */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Philippine Environmental Laws
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Major environmental protection statutes and their penalties
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {environmentalLaws.map((law, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-green-200 hover:border-green-500 transition-colors">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-lg text-green-700">{law.law}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <p className="text-sm text-slate-600">{law.description}</p>
                    <div className="pt-3 border-t border-green-100">
                      <strong className="text-sm text-red-700">Penalties:</strong>
                      <p className="text-sm text-slate-600">{law.penalties}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Rights */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                Your Constitutional Environmental Rights
              </h2>
              <p className="text-lg text-green-100 max-w-2xl mx-auto">
                The 1987 Philippine Constitution guarantees every Filipino the right to a balanced and healthful ecology
              </p>
            </div>

            <div className="space-y-4">
              {environmentalRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/10 rounded-lg border border-white/20"
                >
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-green-50">{right}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
              <p className="text-green-100">
                <strong className="text-white">Writ of Kalikasan & Continuing Mandamus:</strong> The Rules of Procedure
                for Environmental Cases (A.M. No. 09-6-8-SC) provide special remedies for environmental protection.
                We can help you file these special civil actions for environmental justice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Need Environmental Legal Assistance?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Whether you need an ECC, environmental permit, or representation in an environmental case,
              we combine legal expertise with environmental science knowledge.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Environmental Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/free-legal-advice">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Ask Environmental Question
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-slate-500 text-sm">
              Excellence is our standard. Protecting the environment, one case at a time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

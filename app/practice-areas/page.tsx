"use client";

import { motion } from "framer-motion";
import { practiceAreas } from "@/lib/constants/practice-areas";
import { getIcon } from "@/lib/utils/icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold font-serif mb-6">
              Our Practice Areas
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive legal services tailored to your unique needs. 
              With expertise across multiple practice areas, we&apos;re equipped to handle any legal challenge.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#areas">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Chat
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section id="areas" className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = getIcon(area.iconName);
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-serif">{area.title}</CardTitle>
                      <CardDescription className="text-base">
                        {area.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-t pt-4">
                          <p className="font-semibold mb-2">Key Services:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {area.services.slice(0, 4).map((service, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-secondary mr-2">•</span>
                                {service}
                              </li>
                            ))}
                            {area.services.length > 4 && (
                              <li className="text-secondary font-medium">
                                +{area.services.length - 4} more services
                              </li>
                            )}
                          </ul>
                        </div>
                        <Button asChild className="w-full group">
                          <Link href={`/practice-areas/${area.slug}`}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Legal Representation */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
                Why Choose Our Firm?
              </h2>
              <p className="text-lg text-muted-foreground">
                When you need legal representation, experience and dedication matter
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">40+ Years of Experience</h3>
                    <p className="text-muted-foreground">
                      Our attorneys bring decades of combined experience and a proven track record of success.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Attention</h3>
                    <p className="text-muted-foreground">
                      Every case receives individualized attention and a customized legal strategy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">No Fee Unless We Win</h3>
                    <p className="text-muted-foreground">
                      For personal injury cases, we work on contingency - you pay nothing unless we recover compensation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Available 24/7</h3>
                    <p className="text-muted-foreground">
                      Legal emergencies don&apos;t wait for business hours. We&apos;re here when you need us most.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">$500M+ Recovered</h3>
                    <p className="text-muted-foreground">
                      We&apos;ve secured over half a billion dollars in settlements and verdicts for our clients.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
                    <p className="text-muted-foreground">
                      We serve diverse communities with attorneys and staff who speak multiple languages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              Need Legal Help? We&apos;re Here for You
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don&apos;t wait to get the legal representation you deserve. 
              Contact us today for a free, no-obligation consultation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <a href="tel:1-800-LAW-FIRM">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 1-800-LAW-FIRM
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Available 24/7 • Free Consultation • No Fee Unless We Win
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { PracticeArea } from "@/lib/constants/practice-areas";
import { getIcon } from "@/lib/utils/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle, 
  Users, 
  Award,
  Clock,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { teamMembers } from "@/lib/constants/site";

interface PracticeAreaTemplateProps {
  practiceArea: PracticeArea;
}

export default function PracticeAreaTemplate({ practiceArea }: PracticeAreaTemplateProps) {
  const Icon = getIcon(practiceArea.iconName);
  
  // Get attorneys for this practice area (mock - would be filtered in real app)
  const relatedAttorneys = teamMembers.slice(0, 3);

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
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold font-serif mb-6">
              {practiceArea.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {practiceArea.fullDescription}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:1-800-LAW-FIRM">
                  Call Now: 1-800-LAW-FIRM
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4 text-center">
              Our {practiceArea.title} Services
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Comprehensive legal representation across all aspects of {practiceArea.title.toLowerCase()}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {practiceArea.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4 text-center">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              A proven approach to achieving the best possible outcome for your case
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {practiceArea.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < practiceArea.process.length - 1 && (
                    <div className="hidden lg:block absolute left-[24px] mt-12 w-0.5 h-16 bg-gradient-to-b from-primary/30 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4 text-center">
              Why Choose Us for {practiceArea.title}?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track record of successful outcomes and satisfied clients
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Specialized attorneys with deep expertise in {practiceArea.title.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle>24/7 Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We&apos;re here when you need us, day or night
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <MessageSquare className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Clear Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regular updates and transparent communication throughout
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Common questions about {practiceArea.title.toLowerCase()} cases
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {practiceArea.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                      <ChevronRight className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground ml-9">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Attorneys */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4 text-center">
              {practiceArea.title} Attorneys
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Meet the experienced attorneys who handle {practiceArea.title.toLowerCase()} cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedAttorneys.map((attorney, index) => (
              <motion.div
                key={attorney.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                      {attorney.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-1">{attorney.name}</h3>
                    <p className="text-secondary mb-3">{attorney.position}</p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {attorney.bio}
                    </p>
                    <Button asChild variant="link" className="p-0">
                      <Link href={`/attorneys/${attorney.id}`}>
                        View Profile
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/attorneys">
                View All Attorneys
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
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
              Get Started with Your {practiceArea.title} Case Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don&apos;t wait to get the legal help you need. Contact us now for a free consultation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              >
                <a href="tel:1-800-LAW-FIRM">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 1-800-LAW-FIRM
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Free Consultation • No Obligation • Available 24/7
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
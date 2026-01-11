"use client";

import { motion } from "framer-motion";
import { Award, Target, Heart, Users, Calendar, Building, Trophy, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const milestones = [
  { year: "Law School", title: "BATASnatin.com Founded", description: "Created Philippines' first comprehensive online law resource out of necessity" },
  { year: "Pre-Bar", title: "Cases Begin", description: "Started handling cases even before passing the bar exam" },
  { year: "Year One", title: "30+ Cases", description: "Litigated over 30 cases in first year as a lawyer" },
  { year: "Early Years", title: "Pro Bono Commitment", description: "Established free legal services for laborers - justice for all" },
  { year: "Innovation", title: "BATASnatin LIVE", description: "Launched daily 8PM YouTube show for free legal advice" },
  { year: "Today", title: "All Court Levels", description: "Handling cases from filing to Supreme Court with excellence" }
];

const values = [
  {
    icon: Trophy,
    title: "Excellence is our Standard",
    description: "Not just a tagline - it's our commitment. Top-notch legal services are our baseline."
  },
  {
    icon: Heart,
    title: "Justice Should Be Affordable",
    description: "We believe everyone deserves access to quality legal representation, regardless of means."
  },
  {
    icon: Users,
    title: "Social Justice",
    description: "Pro bono services for laborers and free legal education through BATASnatin LIVE."
  },
  {
    icon: Target,
    title: "Integrity",
    description: "Success measured not by awards, but by clients served and the nobility of our profession."
  }
];

const achievements = [
  "Founded BATASnatin.com - Philippines' first comprehensive online law resource",
  "Pro Bono Legal Services - Free representation for qualified laborers from filing to Supreme Court",
  "BATASnatin LIVE - Daily free legal advice at 8PM on YouTube",
  "30+ Cases in First Year - Demonstrating dedication and work ethic from the start",
  "All Court Levels - Handled cases from MTC, RTC, Court of Appeals, to Supreme Court",
  "Public School Success Story - Proving excellence comes from dedication, not privilege"
];

export default function AboutPage() {
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
              About BATASnatin
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Excellence is our Standard - A story of dedication, innovation, and justice for all
            </p>
          </motion.div>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6" id="story">
                Our Story: From 10 Law Books to Supreme Court
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BATASnatin Law Firm was founded by Atty. Ranny Randolf B. Libayan, driven by a simple yet powerful belief:
                  <strong className="text-foreground"> justice should be affordable to everyone</strong>. This isn&apos;t just a tagline -
                  it&apos;s the foundation of everything we do.
                </p>
                <p>
                  Atty. Libayan&apos;s journey is one of perseverance and innovation. Public-schooled from elementary through college,
                  he attended Benguet State University for Environmental Science and University of Baguio for law. As a working student,
                  he never had the luxury of extensive resources - in fact, he never owned more than 10 law books during his entire law school tenure.
                </p>
                <p>
                  Out of this necessity came innovation. Struggling to find legal materials, Atty. Libayan created <strong className="text-foreground">BATASnatin.com</strong> -
                  the Philippines&apos; first comprehensive and interactive online law resource. What started as a personal study tool became a
                  gift to aspiring lawyers and ordinary Filipinos seeking legal knowledge.
                </p>
                <p>
                  Even before passing the bar, cases were already piling up. After becoming a lawyer, he hit the ground running -
                  litigating <strong className="text-foreground">over 30 cases in his first year alone</strong>. He would stay in court even after his cases
                  were called, learning from every hearing, absorbing every argument, honing his craft.
                </p>
                <p>
                  Today, BATASnatin Law Firm handles cases <strong className="text-foreground">from filing to the Supreme Court</strong>,
                  offers <strong className="text-foreground">pro bono services for laborers</strong>, and provides
                  <strong className="text-foreground"> free daily legal advice</strong> through BATASnatin LIVE at 8PM.
                  Excellence is our standard, not because of prestigious schools or awards, but because of unwavering dedication to our clients and our craft.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/attorneys">Meet Our Team</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Building className="w-32 h-32 text-primary/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
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
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four decades of growth, achievement, and unwavering commitment to our clients
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-4 mb-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary text-primary rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <Card className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <CardHeader>
                    <CardTitle>{milestone.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by principles that put our clients first
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by the legal community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {achievements.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                    <p className="font-medium">{award}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
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
              Community Involvement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Giving back to the community that has supported us for four decades
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Pro Bono Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We dedicate over 1,000 hours annually to providing free legal services to those who cannot afford representation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Legal Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our attorneys regularly speak at schools and community centers, educating the public about their legal rights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Charitable Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We actively support local charities and sponsor community events that make a positive impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container-custom section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the difference that four decades of legal excellence makes
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="/practice-areas">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
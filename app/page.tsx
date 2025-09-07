import HeroSection from "@/components/sections/HeroSection";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { teamMembers, faqs } from "@/lib/constants/site";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, Users, Scale, Clock, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif mt-4 mb-6">
              Experience You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With decades of combined experience and a proven track record of success, 
              we're the law firm you can count on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Award-Winning",
                description: "Recognized as one of the top law firms in the region"
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Your goals are our priority, always"
              },
              {
                icon: Scale,
                title: "Proven Results",
                description: "$500M+ recovered for our clients"
              },
              {
                icon: Clock,
                title: "Available 24/7",
                description: "We're here when you need us most"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <PracticeAreasSection />

      {/* Our Process Section */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              How We Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif mt-4 mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure the best possible outcome for your case.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  description: "We listen to your story and evaluate your case at no cost to you."
                },
                {
                  step: "02",
                  title: "Case Strategy",
                  description: "Our team develops a comprehensive strategy tailored to your specific situation."
                },
                {
                  step: "03",
                  title: "Legal Action",
                  description: "We fight aggressively for your rights while keeping you informed every step of the way."
                },
                {
                  step: "04",
                  title: "Resolution",
                  description: "We work tirelessly to achieve the best possible outcome for your case."
                }
              ].map((process, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute left-[24px] mt-12 w-0.5 h-16 bg-secondary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Team Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif mt-4 mb-6">
              Meet Our Attorneys
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced legal team is dedicated to providing exceptional representation 
              and achieving the best possible outcomes for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/attorneys/${member.id}`}>
                      View Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/attorneys">
                Meet All Attorneys
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              FAQs
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif mt-4 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.slice(0, 5).map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground ml-9">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/resources/faqs">
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
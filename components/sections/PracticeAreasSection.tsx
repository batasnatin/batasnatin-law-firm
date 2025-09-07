"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  Gavel, 
  Briefcase, 
  Home, 
  FileText,
  ArrowRight 
} from "lucide-react";
import { practiceAreas } from "@/lib/constants/site";

const iconMap: { [key: string]: React.ElementType } = {
  Shield,
  Users,
  Gavel,
  Briefcase,
  Home,
  FileText,
};

export default function PracticeAreasSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif mt-4 mb-6">
            Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, 
            ensuring expert representation for all your legal needs.
          </p>
        </motion.div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Shield;
            
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-serif">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {area.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {area.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto font-semibold text-primary hover:text-secondary"
                    >
                      <Link href={`/practice-areas/${area.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/practice-areas">
              View All Practice Areas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
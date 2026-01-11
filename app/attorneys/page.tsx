"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/lib/constants/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState } from "react";
import { 
  Search, 
  Phone, 
  Mail, 
  Award, 
  GraduationCap,
  Briefcase,
  Star,
  Calendar,
  ArrowRight
} from "lucide-react";

export default function AttorneysPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPracticeArea, setSelectedPracticeArea] = useState("all");

  // Get unique practice areas from team members
  const practiceAreas = Array.from(new Set(
    teamMembers.flatMap(member => member.practiceAreas || [])
  ));

  // Filter attorneys based on search and practice area
  const filteredAttorneys = teamMembers.filter(attorney => {
    const matchesSearch = attorney.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          attorney.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPracticeArea = selectedPracticeArea === "all" || 
                                attorney.practiceAreas?.includes(selectedPracticeArea);
    return matchesSearch && matchesPracticeArea;
  });

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
              Our Attorneys
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Meet our team of experienced legal professionals dedicated to fighting for your rights
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search attorneys by name..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg bg-background"
                value={selectedPracticeArea}
                onChange={(e) => setSelectedPracticeArea(e.target.value)}
              >
                <option value="all">All Practice Areas</option>
                {practiceAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">{teamMembers.length}+</div>
              <div className="text-sm opacity-90">Expert Attorneys</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm opacity-90">Years Combined Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm opacity-90">Cases Won</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <div className="text-sm opacity-90">Recovered for Clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          {filteredAttorneys.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No attorneys found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAttorneys.map((attorney, index) => (
                <motion.div
                  key={attorney.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    {/* Attorney Photo */}
                    <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
                          {attorney.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Overlay with quick actions */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          <Button size="sm" variant="secondary" className="flex-1" asChild>
                            <a href={`mailto:${attorney.email}`}>
                              <Mail className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" className="flex-1" asChild>
                            <a href={`tel:${attorney.phone}`}>
                              <Phone className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="sm" variant="secondary" className="flex-1" asChild>
                            <Link href="/contact">
                              <Calendar className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-2xl font-serif font-bold mb-1">{attorney.name}</h3>
                      <p className="text-secondary font-medium mb-3">{attorney.position}</p>
                      
                      {/* Practice Areas */}
                      {attorney.practiceAreas && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {attorney.practiceAreas.slice(0, 3).map((area, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {/* Bio */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {attorney.bio}
                      </p>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                        <div className="py-2 bg-muted/50 rounded">
                          <GraduationCap className="h-4 w-4 mx-auto mb-1 text-secondary" />
                          <div className="text-xs text-muted-foreground">Law Degree</div>
                        </div>
                        <div className="py-2 bg-muted/50 rounded">
                          <Briefcase className="h-4 w-4 mx-auto mb-1 text-secondary" />
                          <div className="text-xs text-muted-foreground">Expert</div>
                        </div>
                        <div className="py-2 bg-muted/50 rounded">
                          <Star className="h-4 w-4 mx-auto mb-1 text-secondary" />
                          <div className="text-xs text-muted-foreground">5.0 Rating</div>
                        </div>
                      </div>

                      {/* View Profile Button */}
                      <Button asChild className="w-full group">
                        <Link href={`/attorneys/${attorney.id}`}>
                          View Full Profile
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
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
              Our attorneys have been recognized by leading legal organizations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Super Lawyers 2024",
              "Best Lawyers in America",
              "AV Preeminent Rating",
              "Top 100 Trial Lawyers",
              "Client Choice Award",
              "Rising Stars 2024",
              "Legal Elite",
              "Excellence in Advocacy"
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <Award className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <p className="font-medium">{award}</p>
                </Card>
              </motion.div>
            ))}
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
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation with one of our experienced attorneys today
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Schedule Consultation
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
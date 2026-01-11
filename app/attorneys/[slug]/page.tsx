"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/constants/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  FileText,
  Users,
  BookOpen,
  Trophy,
  ArrowLeft
} from "lucide-react";

export default function AttorneyProfilePage() {
  const params = useParams();
  const attorney = teamMembers.find(member => member.id === params.slug);

  if (!attorney) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Attorney Not Found</h1>
          <p className="text-muted-foreground mb-8">The attorney profile you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/attorneys">Back to Attorneys</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Mock additional data for the profile
  const profileData = {
    barAdmissions: ["State Bar of California", "Federal District Court", "U.S. Court of Appeals"],
    languages: ["English", "Spanish"],
    memberships: [
      "American Bar Association",
      "State Trial Lawyers Association",
      "National Association of Criminal Defense Lawyers"
    ],
    publications: [
      "Understanding Your Rights After an Accident - Legal Journal, 2023",
      "Family Law in the Digital Age - State Bar Publication, 2022",
      "Criminal Defense Strategies - Law Review, 2021"
    ],
    notableCases: [
      "$5.2M Settlement - Personal Injury Case",
      "Landmark Custody Decision - Smith v. Jones",
      "Federal Criminal Defense - US v. Client"
    ],
    awards: [
      "Super Lawyer 2024",
      "AV Preeminent Rating",
      "Top 100 Trial Lawyers",
      "Client Choice Award 2023"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom section-padding">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/attorneys">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Attorneys
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Attorney Photo and Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold">
                    {attorney.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Consultation
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={`mailto:${attorney.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email Attorney
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href={`tel:${attorney.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Direct
                      </a>
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Main Office Location</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span>5.0 Client Rating</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Attorney Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-2">
                  {attorney.name}
                </h1>
                <p className="text-2xl text-secondary mb-4">{attorney.position}</p>
                
                {/* Practice Areas Badges */}
                {attorney.practiceAreas && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {attorney.practiceAreas.map((area, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {area}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Briefcase className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold">Expert</div>
                      <div className="text-sm text-muted-foreground">Litigator</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Trophy className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm text-muted-foreground">Cases Won</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold">1000+</div>
                      <div className="text-sm text-muted-foreground">Clients Helped</div>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {attorney.bio}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <Tabs defaultValue="background" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>

            <TabsContent value="background" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-secondary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {attorney.education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">{edu}</h4>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-secondary" />
                    Bar Admissions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {profileData.barAdmissions.map((admission, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>{admission}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Professional Memberships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {profileData.memberships.map((membership, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>{membership}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-secondary" />
                    Notable Cases
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profileData.notableCases.map((caseItem, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-0">
                      <h4 className="font-semibold mb-2">{caseItem}</h4>
                      <p className="text-muted-foreground">
                        Successfully represented client achieving favorable outcome through strategic litigation and negotiation.
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Areas of Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {attorney.practiceAreas?.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <div>
                          <p className="font-medium">{area}</p>
                          <p className="text-sm text-muted-foreground">
                            Extensive experience handling complex {area.toLowerCase()} matters
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-secondary" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {profileData.awards.map((award, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <Trophy className="h-5 w-5 text-secondary" />
                        <span className="font-medium">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client Testimonials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="italic mb-2">
                      &ldquo;{attorney.name} was exceptional in handling my case. Their expertise and dedication made all the difference.&rdquo;
                    </p>
                    <p className="text-sm text-muted-foreground">- Former Client</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="publications" className="mt-8 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-secondary" />
                    Publications & Articles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profileData.publications.map((publication, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-0">
                      <h4 className="font-semibold mb-1">{publication}</h4>
                      <p className="text-sm text-muted-foreground">
                        Published article discussing key legal developments and strategies
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Speaking Engagements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium">State Bar Annual Conference 2024</p>
                        <p className="text-sm text-muted-foreground">Keynote Speaker on Trial Advocacy</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                      <div>
                        <p className="font-medium">Legal Education Seminar 2023</p>
                        <p className="text-sm text-muted-foreground">Panel Discussion on Family Law Updates</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
              Schedule a Consultation with {attorney.name}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert legal advice tailored to your specific situation
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
                <a href={`tel:${attorney.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Direct
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
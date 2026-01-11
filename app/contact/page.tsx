import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Building,
  Calendar
} from "lucide-react";
import { siteConfig } from "@/lib/constants/site";

export const metadata = {
  title: "Contact Us - Get Legal Consultation | BATASnatin Law Firm",
  description: "Contact BATASnatin Law Firm in Taguig City. Located at 31 General Luna Street, above Goldilocks, fronting Taguig City Hall. Call 0915 954 6080 or (02) 359-4203.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Get In Touch
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Ready to discuss your legal needs? Contact us today for a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      Office Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold mb-2">{siteConfig.contact.address.suite}</p>
                    <p className="mb-1">{siteConfig.contact.address.street}</p>
                    <p className="mb-3">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </p>
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-secondary flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Landmark: {siteConfig.contact.address.landmark}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Parking available at Puregold across the street
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-primary" />
                      Phone Numbers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Mobile</p>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-lg font-semibold text-primary hover:underline flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Office</p>
                      <a
                        href={`tel:${siteConfig.contact.emergencyPhone}`}
                        className="text-lg font-semibold text-primary hover:underline flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        {siteConfig.contact.emergencyPhone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-primary" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-semibold">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-semibold">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="font-semibold">By Appointment</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 pt-3 border-t">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Contact us to schedule weekend appointments
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Button asChild size="lg" variant="outline" className="w-full">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=31+General+Luna+Street,+Taguig+City,+Metro+Manila,+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-8">Send Us a Message</h2>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Juan" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Dela Cruz" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="juan@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+63 912 345 6789" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="practiceArea">Practice Area</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select practice area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="labor">Labor Law</SelectItem>
                          <SelectItem value="family">Family Law</SelectItem>
                          <SelectItem value="civil">Civil Law</SelectItem>
                          <SelectItem value="criminal">Criminal Defense</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="environmental">Environmental Law</SelectItem>
                          <SelectItem value="corporation">Corporation Law</SelectItem>
                          <SelectItem value="notarization">Notarization</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your legal issue or question..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Initial Consultation Fee:</strong> ₱2,500
                        <br />
                        <span className="text-xs">
                          (Waived for qualified pro bono cases. See our <a href="/pro-bono" className="text-primary hover:underline">Pro Bono Services</a> page for details.)
                        </span>
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Inquiry
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy.
                      This form does not create an attorney-client relationship.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Taguig City, easily accessible by public and private transportation
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6449287891643!2d121.0489!3d14.5176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMxJzAzLjQiTiAxMjHCsDAyJzU2LjAiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BATASnatin Law Firm Location"
              ></iframe>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Building className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Landmark</h3>
                  <p className="text-sm text-muted-foreground">
                    Above Goldilocks, fronting Taguig City Hall
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Navigation className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Easy Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Accessible via General Luna Street, main road in Taguig
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Parking</h3>
                  <p className="text-sm text-muted-foreground">
                    Parking available at nearby Puregold
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to schedule your consultation. We&apos;re here to help you navigate your legal challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call: {siteConfig.contact.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

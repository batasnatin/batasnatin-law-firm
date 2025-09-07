import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Scale,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { siteConfig, navigationLinks, practiceAreas } from "@/lib/constants/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-background text-primary-foreground dark:text-foreground border-t dark:border-border">
      {/* CTA Section */}
      <div className="bg-secondary dark:bg-primary/5 py-8 sm:py-12">
        <div className="container-custom section-padding">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 text-center lg:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary dark:text-foreground mb-2">
                Need Legal Assistance?
              </h2>
              <p className="text-primary/80 dark:text-muted-foreground text-sm sm:text-base">
                Get expert legal advice from our experienced attorneys
              </p>
            </div>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="bg-white hover:bg-white/90 dark:bg-primary dark:hover:bg-primary/90 text-primary dark:text-background border-white dark:border-primary w-full sm:w-auto"
            >
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-8 sm:py-12 lg:py-16">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* About Section */}
            <div className="space-y-4 text-center sm:text-left">
              <Link href="/" className="flex items-center gap-3 group justify-center sm:justify-start">
                <Image 
                  src="/images/logo.png" 
                  alt="BATASnatin Law Firm Logo"
                  width={56}
                  height={56}
                  className="h-12 sm:h-14 w-auto"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif dark:text-primary">
                    {siteConfig.shortName}
                  </h3>
                  <p className="text-xs text-primary-foreground/70 dark:text-muted-foreground">Law Firm</p>
                </div>
              </Link>
              <p className="text-sm text-primary-foreground/80 dark:text-muted-foreground leading-relaxed">
                {siteConfig.description}
              </p>
              <p className="text-base sm:text-lg font-semibold text-secondary dark:text-primary">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-foreground">Practice Areas</h3>
              <ul className="space-y-2">
                {practiceAreas.slice(0, 6).map((area) => (
                  <li key={area.id}>
                    <Link 
                      href={`/practice-areas/${area.id}`}
                      className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href={siteConfig.legal.privacyPolicy}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href={siteConfig.legal.termsOfService}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-foreground">Contact Us</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>{siteConfig.contact.phone}</div>
                      <div className="text-xs text-primary-foreground/60">Main Office</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-primary-foreground/80 dark:text-muted-foreground">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>{siteConfig.contact.address.street}</div>
                      <div>{siteConfig.contact.address.suite}</div>
                      <div>
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-primary-foreground/80 dark:text-muted-foreground">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>{siteConfig.contact.hours.weekdays}</div>
                      <div>{siteConfig.contact.hours.saturday}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Stay Informed</h3>
                <p className="text-sm text-primary-foreground/80">
                  Subscribe to our newsletter for legal updates and insights
                </p>
              </div>
              <form className="flex gap-2 w-full max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button 
                  type="submit"
                  variant="secondary"
                  className="whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 dark:bg-muted/5 py-4 sm:py-6">
        <div className="container-custom section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-primary-foreground/70">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  Scale,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle, MobileThemeToggle } from "@/components/ui/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navigationLinks, siteConfig } from "@/lib/constants/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden lg:block">
        <div className="container-custom section-padding">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 9AM-6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background"
        )}
      >
        <nav className="container-custom section-padding py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <Image 
                  src="/images/logo.png" 
                  alt="BATASnatin Law Firm Logo"
                  width={48}
                  height={48}
                  className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:bg-secondary/30 transition-colors" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-serif text-primary dark:text-foreground">
                  {siteConfig.shortName}
                </h1>
                <p className="text-xs text-muted-foreground">Law Firm</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                      {link.subItems ? (
                        <>
                          <NavigationMenuTrigger className="bg-transparent">
                            {link.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {link.subItems.map((subItem) => (
                                <li key={subItem.href}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                      <div className="text-sm font-medium leading-none">
                                        {subItem.title}
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink asChild>
                          <Link 
                            href={link.href}
                            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/contact">Free Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    href="/" 
                    className="flex items-center gap-3 mb-6"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image 
                      src="/images/logo.png" 
                      alt="BATASnatin Law Firm Logo"
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <span className="text-xl font-bold font-serif">
                      {siteConfig.shortName}
                    </span>
                  </Link>

                  {navigationLinks.map((link) => (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                        {link.subItems && <ChevronDown className="w-4 h-4" />}
                      </Link>
                      {link.subItems && (
                        <div className="ml-4 mt-2 space-y-2">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <Button asChild className="mt-6" size="lg">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Free Consultation
                    </Link>
                  </Button>

                  <div className="mt-6 pt-6 border-t">
                    <MobileThemeToggle />
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <a 
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Phone className="w-4 h-4" />
                      {siteConfig.contact.phone}
                    </a>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mt-2"
                    >
                      <Mail className="w-4 h-4" />
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
}
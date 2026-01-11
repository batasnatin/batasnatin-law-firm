"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Award, Users } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";

const stats = [
  { icon: Shield, value: "All Levels", label: "Filing to Supreme Court" },
  { icon: Users, value: "Pro Bono", label: "Free for Laborers" },
  { icon: Award, value: "30+", label: "Cases First Year" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 dark:from-background dark:via-background dark:to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 dark:opacity-10" />
      
      {/* Dark mode gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 dark:from-primary/20 dark:via-transparent dark:to-secondary/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white dark:text-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 dark:bg-primary/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 bg-secondary dark:bg-primary rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Excellence is our Standard</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mb-4 sm:mb-6 leading-tight"
            >
              Justice Should Be
              <span className="block text-secondary dark:text-primary mt-1 sm:mt-2">Affordable To Everyone</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-white/90 dark:text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
            >
              Full-service law firm in Taguig City handling cases from filing to the Supreme Court.
              We offer pro bono services for laborers, free daily legal advice, and top-notch representation for all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 dark:bg-primary dark:hover:bg-primary/90 text-primary dark:text-background font-semibold px-6 sm:px-8"
              >
                <Link href="/contact">
                  Book Consultation (₱2,500)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white/90 dark:border-primary bg-white/10 backdrop-blur-sm text-white dark:text-foreground hover:bg-white dark:hover:bg-primary hover:text-primary dark:hover:text-background"
              >
                <a href={`tel:${siteConfig.contact.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {siteConfig.contact.phone}
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center sm:text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-secondary dark:text-primary" />
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 dark:text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Logo showcase */}
              <div className="relative z-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-white/10">
                <div className="aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 dark:from-secondary/20 dark:to-secondary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <Image 
                        src="/images/logo.png" 
                        alt="BATASnatin Law Firm Logo"
                        width={180}
                        height={180}
                        className="h-32 sm:h-40 lg:h-44 w-auto mx-auto mb-4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-full blur-2xl" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2 text-white dark:text-foreground">
                      BATASnatin Law Firm
                    </h3>
                    <p className="text-white/80 dark:text-muted-foreground">
                      Excellence is our Standard
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
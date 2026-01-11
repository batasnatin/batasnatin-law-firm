"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      {/* Animated Elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait to get the legal help you need. Our experienced attorneys are ready 
            to fight for your rights and deliver the results you deserve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p className="text-white/80 text-sm">
                No obligation discussion about your case and legal options
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-white/80 text-sm">
                Emergency legal support when you need it most
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-white/80 text-sm">
                In-person, virtual, or phone consultations available
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
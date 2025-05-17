
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Lina Prime Solutions LLC | Web, AI & Growth Strategy</title>
        <meta 
          name="description" 
          content="Engineer smarter systems today, unlock unstoppable growth tomorrow with our custom web development, AI automations, and data-backed growth strategies."
        />
        <meta name="keywords" content="web development, AI automation, growth strategy, SaaS, tech agency" />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;


import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PackSection from "@/components/PackSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import BookCallSection from "@/components/BookCallSection";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={controls}
      className="min-h-screen bg-brand-black text-white overflow-x-hidden relative"
    >
      <Helmet>
        <title>يوسف للتسويق</title>
        <meta 
          name="description" 
          content="Engineer smarter systems today, unlock unstoppable growth tomorrow with our custom web development, AI automations, and data-backed growth strategies."
        />
        <meta name="keywords" content="web development, AI automation, growth strategy, SaaS, tech agency" />
      </Helmet>
      
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-20 opacity-30">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-brand-purple/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-brand-blue/20 to-transparent"></div>
      </div>
      
      <Navbar />
      <HeroSection />
      <BannerSection />
            <ServicesSection />
      <PortfolioSection />
      <PackSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <BookCallSection />
      <Footer />
    </motion.div>
  );
};

export default Index;

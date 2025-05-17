import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCallSection from "@/components/BookCallSection";

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  metaImage?: string;
}

const ServiceLayout = ({ children, title, description, metaImage }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>{title} | Lina Prime Solutions</title>
        <meta name="description" content={description} />
        {metaImage && <meta property="og:image" content={metaImage} />}
      </Helmet>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-20 opacity-30">
        <motion.div 
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-brand-purple/20 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-brand-blue/20 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 4,
          }}
        />
      </div>

      {/* Content */}
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <BookCallSection />
      <Footer />
    </div>
  );
};

export default ServiceLayout;

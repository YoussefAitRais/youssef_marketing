
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Prime Your Growth with{" "}
              <span className="gradient-text">Code, AI & Strategy</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0">
              We help ambitious businesses scale through custom web solutions, AI-driven automations, 
              and data-backed growth strategies. Engineer smarter systems today, unlock unstoppable growth tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-brand-gradient animate-gradient-shift text-lg px-8 py-6">
                Book Free Strategy Call
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[400px] md:h-[500px] relative perspective-600">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue opacity-30 rounded-lg blur-3xl animate-float"></div>
              <div className="relative w-full h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">Interactive Demo</p>
                  <p className="text-sm text-white/70">3D mockups of dashboards & chatbots would appear here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(174,59,255,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(26,215,255,0.15),transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default HeroSection;

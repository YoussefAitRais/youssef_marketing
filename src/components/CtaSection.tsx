
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 20px 0px rgba(255,47,146,0.4)",
      transition: { duration: 0.3 } 
    },
    tap: { scale: 0.98 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg shadow-purple-900/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to <span className="gradient-text">automate your growth?</span> Let's talk.
              </motion.h2>
              <motion.p 
                className="text-white/70 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Schedule your free strategy call today and discover how we can help you scale your business with custom solutions.
              </motion.p>
            </div>
            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button asChild className="bg-brand-new-blue text-white font-semibold rounded-lg flex items-center gap-2 py-6 text-base w-full hover:opacity-90 transition-opacity">
                  <Link to="/services/book-call">
                    <Mail className="w-5 h-5" />
                    <span className="relative z-10">Book Free Strategy Call</span>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button variant="ghost" className="text-white font-semibold rounded-lg hover:bg-transparent hover:text-brand-new-blue transition-colors py-6 text-base w-full">
                  <span className="relative z-10">View Our Work</span>
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.4
                }}
                animate={{
                  y: [0, -30],
                  opacity: [0.4, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at bottom left, rgba(255,47,146,0.15), transparent 70%)"
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-1/2 h-1/2"
          style={{ 
            background: "radial-gradient(circle at top right, rgba(26,215,255,0.1), transparent 70%)" 
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default CtaSection;

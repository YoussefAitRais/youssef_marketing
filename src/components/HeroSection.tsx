
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";

const HeroSection = () => {
  const controlsImage = useAnimation();
  const controlsText = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controlsText.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
      return await controlsImage.start({ 
        opacity: 1, 
        scale: 1, 
        transition: { 
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.8
        } 
      });
    };
    
    sequence();
  }, [controlsImage, controlsText]);

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 15px 0px rgba(174,59,255,0.5)",
      transition: { duration: 0.3 } 
    },
    tap: { scale: 0.98 }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controlsText}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{
                backgroundSize: "200% 200%",
                backgroundImage: "linear-gradient(90deg, #FF2F92, #AE3BFF, #1AD7FF, #AE3BFF, #FF2F92)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Prime Your Growth with{" "}
              <span>Code, AI & Strategy</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We help ambitious businesses scale through custom web solutions, AI-driven automations, 
              and data-backed growth strategies. Engineer smarter systems today, unlock unstoppable growth tomorrow.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="bg-brand-gradient animate-gradient-shift text-lg px-8 py-6 shadow-lg shadow-brand-purple/20">
                  Book Free Strategy Call
                </Button>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6 backdrop-blur">
                  View Our Work
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controlsImage}
            className="relative"
          >
            <motion.div 
              className="absolute -inset-10 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue opacity-30 rounded-full blur-3xl"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }} 
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
              }}
            />
            
            <motion.div 
              animate={floatingAnimation}
              className="relative w-full h-[400px] md:h-[500px] perspective-600"
            >
              <div className="relative w-full h-full bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 flex items-center justify-center overflow-hidden">
                {/* Animated elements inside the demo */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ background: "radial-gradient(circle at center, rgba(26,215,255,0.15), transparent 60%)" }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut" 
                  }}
                />
                
                <div className="text-center relative z-10">
                  <motion.p 
                    className="text-lg font-semibold mb-2 gradient-text"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Interactive Demo
                  </motion.p>
                  <p className="text-sm text-white/70">3D mockups of dashboards & chatbots would appear here</p>
                  
                  <motion.div 
                    className="mt-6 inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="h-40 w-80 bg-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                      <motion.span 
                        className="gradient-text font-bold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Demo Interface
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            background: "radial-gradient(ellipse at center, rgba(174,59,255,0.15), transparent 70%)" 
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
          className="absolute bottom-0 right-0 w-3/4 h-3/4"
          style={{ 
            background: "radial-gradient(ellipse at bottom right, rgba(26,215,255,0.15), transparent 70%)" 
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

export default HeroSection;

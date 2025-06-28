import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation, Trans } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();
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
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden relative">
      {/* Animated particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 8 + 2 + 'px',
              height: Math.random() * 8 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 15,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controlsText}
            className="text-center lg:text-left rtl:lg:text-right"
          >
            <div className="relative mb-8">
              <motion.span 
                className="absolute -left-4 -top-8 text-7xl md:text-8xl opacity-10 font-black text-brand-purple select-none"
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              >
                PRIME
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative"
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
                <Trans i18nKey="hero.headline" components={{ strong: <span/> }} values={{ strong: t("hero.strong") }} />
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t("hero.sub")}
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-brand-gradient rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Button
                  className="bg-brand-black relative text-lg px-8 py-6 border border-white/10 group-hover:border-white/0 transition-all flex items-center rtl:flex-row-reverse"
                  onClick={() => {
                    const bookCallSection = document.getElementById('book-call');
                    if (bookCallSection) {
                      bookCallSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="mr-2 rtl:mr-0 rtl:ml-2">{t("hero.cta")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
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
                  </motion.p>
                  
                  <motion.div 
                    className="mt-4 inline-block"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="h-[300px] w-[400px] bg-gradient-to-br from-black to-gray-900 rounded-lg border border-white/10 p-4 shadow-xl relative overflow-hidden">
                      {/* Dashboard header */}
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="h-3 w-24 bg-brand-purple/40 rounded-full"></div>
                          <div className="h-2 w-16 bg-white/20 rounded-full mt-1"></div>
                        </div>
                        <div className="flex gap-1">
                          <div className="h-3 w-3 rounded-full bg-brand-pink/60"></div>
                          <div className="h-3 w-3 rounded-full bg-brand-purple/60"></div>
                          <div className="h-3 w-3 rounded-full bg-brand-blue/60"></div>
                        </div>
                      </div>
                      
                      {/* Dashboard content */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <motion.div 
                          className="h-24 bg-white/5 rounded border border-white/10 p-2"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div className="h-2 w-16 bg-brand-pink/40 rounded-full mb-2"></div>
                          <div className="flex items-end h-12 gap-1 pt-2">
                            {[40, 70, 30, 90, 60, 80, 50].map((h, i) => (
                              <motion.div 
                                key={i} 
                                className="flex-1 bg-gradient-to-t from-brand-pink/20 to-brand-pink/60 rounded-sm"
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ 
                                  delay: i * 0.1, 
                                  duration: 1,
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  repeatDelay: 5
                                }}
                              ></motion.div>
                            ))}
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="h-24 bg-white/5 rounded border border-white/10 p-2"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                        >
                          <div className="h-2 w-20 bg-brand-blue/40 rounded-full mb-2"></div>
                          <div className="h-14 relative">
                            <motion.div 
                              className="absolute inset-0 border-b border-white/10"
                              style={{ top: '50%' }}
                            ></motion.div>
                            <motion.div
                              className="absolute h-full w-full"
                              animate={{
                                d: [
                                  "M0,50 Q25,30 50,50 T100,50",
                                  "M0,50 Q25,70 50,50 T100,50",
                                  "M0,50 Q25,30 50,50 T100,50"
                                ]
                              }}
                              transition={{ 
                                duration: 5, 
                                repeat: Infinity,
                                ease: "easeInOut" 
                              }}
                            >
                              <svg className="w-full h-full">
                                <path 
                                  d="M0,50 Q25,30 50,50 T100,50" 
                                  fill="none" 
                                  stroke="#1AD7FF" 
                                  strokeWidth="2" 
                                  strokeOpacity="0.6"
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Chat interface */}
                      <div className="h-28 bg-white/5 rounded border border-white/10 p-2 relative">
                        <div className="h-2 w-24 bg-brand-purple/40 rounded-full mb-3"></div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2 items-start">
                            <div className="h-4 w-4 rounded-full bg-brand-purple/60 mt-0.5"></div>
                            <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                          </div>
                          <div className="flex gap-2 items-start">
                            <div className="h-4 w-4 rounded-full bg-brand-blue/60 mt-0.5"></div>
                            <div className="h-2 w-40 bg-white/20 rounded-full"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 h-6 bg-white/10 rounded flex items-center px-2">
                          <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                          <motion.div 
                            className="h-4 w-4 rounded-full bg-brand-pink/60 ml-auto"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                        </div>
                      </div>
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

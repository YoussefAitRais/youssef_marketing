import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    id: "medyaismail",
    image: "/Medyaismail.jpg",
  },
  {
    id: "hananemarketing",
    image: "/hananmarketing.jpg",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const nextTestimonial = () => {
    setAutoplay(false); // Stop autoplay when manually navigating
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoplay(false); // Stop autoplay when manually navigating
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const setTestimonial = (index) => {
    setAutoplay(false); // Stop autoplay when manually navigating
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];
  const quote = t(`testimonials.items.${currentTestimonial.id}.quote`);
  const author = t(`testimonials.items.${currentTestimonial.id}.author`);
  const position = t(`testimonials.items.${currentTestimonial.id}.position`);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-brand-pink/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -left-10 top-0 w-20 h-20 rounded-full bg-brand-pink/10 blur-xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -right-10 bottom-0 w-20 h-20 rounded-full bg-brand-blue/10 blur-xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, delay: 1, repeat: Infinity }}
          />
          
          <div className="relative">
            <motion.span 
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl md:text-7xl opacity-5 font-black text-white select-none tracking-widest"
              animate={{ opacity: [0.03, 0.05, 0.03] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {t("testimonials.heading.colored").toUpperCase()}
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-brand">
              {t("testimonials.heading.prefix")} {t("testimonials.heading.colored")}
            </h2>
          </div>
          
          
          
          <p className="text-white/70 max-w-2xl mx-auto">
            {t("testimonials.description")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            {/* Large decorative quote mark */}
            <motion.div 
              className="absolute -left-8 -top-8 text-brand-purple/10 z-0"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Quote size={80} strokeWidth={1} />
            </motion.div>
            
            <div className="relative z-10 min-h-[240px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black/20 border border-white/10 rounded-lg p-8 shadow-xl shadow-purple-500/5 w-full backdrop-blur-lg"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-full md:w-1/3 flex flex-col items-center text-center gap-4">
                      <img src={currentTestimonial.image} alt={author} className="w-24 h-24 rounded-full object-cover flex-shrink-0 shadow-lg shadow-purple-500/20" />
                      <div>
                        <p className="text-xl font-semibold gradient-text">{author}</p>
                        <p className="text-sm text-white/70">{position}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 text-right pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-8">
                      <p className="text-lg md:text-xl italic text-white/90">"{quote}"</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-white/20 hover:bg-white/10 w-12 h-12 shadow-lg shadow-purple-500/5"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                    ? "bg-gradient-to-r from-brand-pink to-brand-purple w-6" 
                    : "bg-white/20 hover:bg-white/40"
                  }`}
                  onClick={() => setTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.button>
              ))}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-white/20 hover:bg-white/10 w-12 h-12 shadow-lg shadow-purple-500/5"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Lina Prime transformed our outdated systems into sleek, automated workflows that saved us 20+ hours per week. Their team was incredibly knowledgeable and responsive.",
    author: "Sarah Johnson",
    position: "CTO, TechFlow Inc.",
    initials: "SJ"
  },
  {
    quote: "Working with Lina Prime on our SaaS MVP was a game-changer. They delivered on time and created a scalable architecture that's easy to expand as we grow.",
    author: "Michael Chen",
    position: "Founder, DataPulse",
    initials: "MC"
  },
  {
    quote: "Our ecommerce conversion rate jumped 195% after Lina Prime redesigned our customer journey. Data-driven decisions and beautiful UI combined perfectly.",
    author: "Priya Patel",
    position: "Marketing Director, StyleHouse",
    initials: "PP"
  },
  {
    quote: "The AI chatbot Lina built for us handles 75% of customer inquiries automatically, improving our response time while reducing support costs. Truly innovative.",
    author: "David Wilson",
    position: "Customer Success Lead, ServiceNow",
    initials: "DW"
  }
];

const TestimonialsSection = () => {
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
              TESTIMONIALS
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>
          
          <div className="h-1 w-20 mx-auto bg-brand-gradient rounded-full mb-6"></div>
          
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
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
                  className="glass-effect rounded-lg p-8 shadow-xl shadow-purple-500/5 w-full"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                      <span className="text-2xl font-bold">{currentTestimonial.initials}</span>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-xl font-semibold mb-1 gradient-text">{currentTestimonial.author}</p>
                      <p className="text-sm text-white/70 mb-4">{currentTestimonial.position}</p>
                      <p className="text-lg md:text-xl italic text-white/90">"{currentTestimonial.quote}"</p>
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

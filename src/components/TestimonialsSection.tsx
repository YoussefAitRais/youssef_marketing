
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-8 mb-8"
          >
            <div className="flex mb-6">
              <div className="w-16 h-16 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 mr-4">
                <span className="text-xl font-bold">{currentTestimonial.initials}</span>
              </div>
              <div>
                <p className="text-lg font-medium mb-1">{currentTestimonial.author}</p>
                <p className="text-sm text-white/70">{currentTestimonial.position}</p>
              </div>
            </div>
            <p className="text-xl italic">"{currentTestimonial.quote}"</p>
          </motion.div>

          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-white/20 hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex 
                    ? "bg-gradient-to-r from-brand-pink to-brand-purple" 
                    : "bg-white/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-white/20 hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

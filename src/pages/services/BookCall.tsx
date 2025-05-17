
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";

const BookCall = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Book a Free Strategy Call | Lina Prime Solutions</title>
        <meta 
          name="description" 
          content="Schedule your free strategy call with our experts and discover how we can help you grow your business with custom solutions."
        />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your <span className="gradient-text">Free Strategy Call</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Our team is ready to help you solve your business challenges and explore opportunities for growth. Book a no-obligation consultation today.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Booking Section */}
      <BookingSection />
      
      {/* Testimonials Mini Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what others are saying about their strategy calls with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The strategy call was eye-opening. I got more value in 30 minutes than I've received from months of working with other consultants.",
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc."
              },
              {
                quote: "Within minutes, they identified critical issues in our workflow that were costing us thousands. Their solution was simple yet effective.",
                name: "Michael Rodriguez",
                role: "Operations Director, GrowthHub"
              },
              {
                quote: "What impressed me most was how prepared they were for our call. They had researched our business and had actionable suggestions ready.",
                name: "Emma Chen",
                role: "Founder, EcoConnect"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-6 rounded-lg"
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 mr-1">★</span>
                  ))}
                </div>
                <p className="italic text-white/80 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BookCall;

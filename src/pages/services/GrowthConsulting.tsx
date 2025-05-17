
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { TrendingUp, BarChart, Target, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GrowthConsulting = () => {
  const expertise = [
    "Conversion Optimization", "SEO", "Analytics", "Paid Media", 
    "Customer Journey", "A/B Testing", "Marketing Funnel", "Growth Strategy", 
    "User Acquisition", "Retention"
  ];
  
  const serviceFeatures = [
    {
      title: "Data-Driven Strategy",
      description: "Comprehensive growth strategies based on thorough data analysis and market research.",
      icon: <BarChart className="w-5 h-5 text-brand-pink" />
    },
    {
      title: "Conversion Optimization",
      description: "Identify and eliminate friction points in your customer journey to increase conversion rates.",
      icon: <Target className="w-5 h-5 text-brand-purple" />
    },
    {
      title: "Growth Analysis",
      description: "In-depth analysis of your current growth metrics to identify opportunities and challenges.",
      icon: <TrendingUp className="w-5 h-5 text-brand-blue" />
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Growth Consulting | Lina Prime Solutions</title>
        <meta 
          name="description" 
          content="Data-backed strategies for sustainable growth. Optimize your conversion funnels, SEO, paid advertising, and analytics to maximize ROI."
        />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Growth <span className="gradient-text">Consulting</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Data-backed strategies for sustainable growth. Optimize your conversion funnels, SEO, paid advertising, and analytics to maximize ROI.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {expertise.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Button className="bg-brand-gradient animate-gradient-shift py-6 px-8 text-lg">
                Get Started
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800" 
                  alt="Growth Consulting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Average ROI</p>
                <p className="text-3xl font-bold gradient-text">3.5x</p>
                <p className="text-white/70 text-sm">on client investment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our growth consulting services are designed to help businesses identify and capitalize on opportunities for sustainable growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 p-6 h-full">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/70 mb-4">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Methodology</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We follow a structured approach to help businesses achieve sustainable growth.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Audit & Analysis",
                description: "We conduct a comprehensive audit of your current marketing efforts, analytics, and growth metrics to identify opportunities and challenges."
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Based on our analysis, we develop a customized growth strategy that aligns with your business goals and market position."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We help you implement the strategy, providing guidance, resources, and hands-on support as needed."
              },
              {
                step: "04",
                title: "Testing & Optimization",
                description: "We continuously test different approaches, measure results, and optimize your growth strategy for maximum ROI."
              },
              {
                step: "05",
                title: "Scaling",
                description: "Once we identify what works, we help you scale your efforts to achieve sustainable, long-term growth."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="text-4xl md:text-5xl font-bold text-white/20 w-16 flex-shrink-0">
                  {phase.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-white/70">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 shadow-lg shadow-purple-900/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">accelerate your growth?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our data-backed growth strategies can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-gradient animate-gradient-shift py-6 px-8 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 py-6 px-8 text-lg">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Booking Section */}
      <BookingSection />
      
      <Footer />
    </div>
  );
};

export default GrowthConsulting;

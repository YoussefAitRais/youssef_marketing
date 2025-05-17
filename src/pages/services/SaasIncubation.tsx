
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Rocket, Code, Server, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SaasIncubation = () => {
  const expertise = [
    "MVP Development", "Product Strategy", "UX/UI Design", "Payment Integration", 
    "Multi-tenant Architecture", "User Management", "Subscription Management", "Analytics", 
    "API Development", "Cloud Infrastructure"
  ];
  
  const serviceFeatures = [
    {
      title: "MVP Development",
      description: "Rapidly build a minimum viable product to validate your idea and attract early adopters and investors.",
      icon: <Rocket className="w-5 h-5 text-brand-pink" />
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end development of your SaaS product with scalable architecture and modern tech stack.",
      icon: <Code className="w-5 h-5 text-brand-purple" />
    },
    {
      title: "Technical Infrastructure",
      description: "Cloud infrastructure setup, database architecture, API development, and integration solutions.",
      icon: <Server className="w-5 h-5 text-brand-blue" />
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>SaaS Incubation | Lina Prime Solutions</title>
        <meta 
          name="description" 
          content="Transform your idea into a market-ready SaaS product. From MVP design to multi-tenant dashboards and payment integrations, we build scalable solutions."
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
                SaaS <span className="gradient-text">Incubation</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Transform your idea into a market-ready SaaS product. From MVP design to multi-tenant dashboards and payment integrations, we build scalable solutions.
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800" 
                  alt="SaaS Incubation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Success rate</p>
                <p className="text-3xl font-bold gradient-text">90%</p>
                <p className="text-white/70 text-sm">of MVPs launched</p>
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
              Our comprehensive SaaS incubation services cover everything from product strategy to full-scale development and launch.
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
      
      {/* Roadmap Section */}
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
              SaaS Development <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We follow a proven roadmap to transform your idea into a successful SaaS product.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We work closely with you to understand your vision, target market, and business goals to develop a comprehensive product strategy."
              },
              {
                step: "02",
                title: "UX/UI Design",
                description: "Our designers create intuitive user experiences and visually appealing interfaces that align with your brand and meet user expectations."
              },
              {
                step: "03",
                title: "MVP Development",
                description: "We build a minimum viable product with core features to validate your concept, gather user feedback, and attract early investors."
              },
              {
                step: "04",
                title: "Testing & Refinement",
                description: "We conduct thorough testing to ensure your product is bug-free, secure, and delivers an excellent user experience."
              },
              {
                step: "05",
                title: "Launch & Growth",
                description: "We support your product launch with technical expertise and help you implement growth strategies to acquire and retain users."
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
      
      {/* Key Features Section */}
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
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our SaaS products come equipped with essential features for success in today's competitive market.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Multi-tenant Architecture",
              "User Authentication & Authorization",
              "Subscription Management",
              "Payment Gateway Integration",
              "API Development",
              "Analytics Dashboard",
              "Customizable User Roles",
              "Notification System",
              "White-labeling Options"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg"
              >
                <div className="w-8 h-8 mr-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{feature}</span>
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
              Ready to <span className="gradient-text">build your SaaS product?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your idea and see how we can help bring it to life.
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

export default SaasIncubation;

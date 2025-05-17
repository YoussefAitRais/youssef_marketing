
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Monitor, Code, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingSection from "@/components/BookingSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WebDevelopment = () => {
  const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "Django", 
    "WordPress", "Shopify", "Tailwind CSS", "MongoDB", "PostgreSQL"
  ];
  
  const serviceFeatures = [
    {
      title: "Custom Web Applications",
      description: "Fully customized web applications built from the ground up to meet your specific business needs.",
      icon: <Code className="w-5 h-5 text-brand-pink" />
    },
    {
      title: "E-commerce Solutions",
      description: "Robust online stores with secure payment processing, inventory management, and customer portals.",
      icon: <Monitor className="w-5 h-5 text-brand-purple" />
    },
    {
      title: "Mobile-Responsive Design",
      description: "Websites that look and function flawlessly across all devices and screen sizes.",
      icon: <Monitor className="w-5 h-5 text-brand-blue" />
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Web & App Development | Lina Prime Solutions</title>
        <meta 
          name="description" 
          content="Custom digital products built with modern frameworks like Next.js, Django, Shopify & WordPress. Scalable solutions tailored to your business needs."
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
                Web & App <span className="gradient-text">Development</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Custom digital products built with modern frameworks. Scalable solutions tailored to your business needs.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10"
                  >
                    {tech}
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
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800" 
                  alt="Web Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Our expertise</p>
                <p className="text-3xl font-bold gradient-text">50+ projects</p>
                <p className="text-white/70 text-sm">Successfully delivered</p>
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
              We build scalable, secure, and high-performance digital products that help businesses achieve their goals.
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
      
      {/* Process Section */}
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We follow a structured approach to ensure your project is delivered on time and exceeds expectations.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We start by understanding your business goals, target audience, and requirements to create a detailed project plan."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our designers create wireframes and interactive prototypes to visualize the user experience before development begins."
              },
              {
                step: "03",
                title: "Development",
                description: "Our engineers build your application using modern frameworks and best practices for performance and security."
              },
              {
                step: "04",
                title: "Testing & Deployment",
                description: "We thoroughly test your application and deploy it to your chosen infrastructure with continuous integration."
              },
              {
                step: "05",
                title: "Ongoing Support",
                description: "We provide maintenance, updates, and support to ensure your application continues to perform optimally."
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
              Ready to <span className="gradient-text">build your next digital product?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and see how we can help bring your vision to life.
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

export default WebDevelopment;

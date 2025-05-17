
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Cpu, TrendingUp, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    title: "Web & App Development",
    description: "Custom digital products built with modern frameworks like Next.js, Django, Shopify & WordPress. Scalable solutions tailored to your business needs.",
    icon: <Monitor className="w-8 h-8" />,
    gradient: "from-pink-500 to-purple-500",
    delay: 0.1,
    link: "/services/web-development"
  },
  {
    title: "AI & Workflow Automations",
    description: "Leverage AI to streamline operations and boost productivity. From OpenAI-powered chatbots to n8n workflow pipelines that save time and reduce errors.",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-purple-500 to-indigo-500",
    delay: 0.3,
    link: "/services/ai-automation"
  },
  {
    title: "Growth Consulting",
    description: "Data-backed strategies for sustainable growth. Optimize your conversion funnels, SEO, paid advertising, and analytics to maximize ROI.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.5,
    link: "/services/growth-consulting"
  },
  {
    title: "SaaS Incubation",
    description: "Transform your idea into a market-ready SaaS product. From MVP design to multi-tenant dashboards and payment integrations, we build scalable solutions.",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.7,
    link: "/services/saas-incubation"
  }
];

const ServiceCard = ({ title, description, icon, gradient, delay, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <Card className="bg-white/5 border border-white/10 p-6 h-full card-hover">
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      <Link to={link} className="inline-flex items-center text-white/90 hover:text-white group">
        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Card>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We provide end-to-end solutions to help ambitious businesses scale efficiently through 
            technology, automation, and data-driven strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Slanted divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white/5 slant-top"></div>
    </section>
  );
};

export default ServicesSection;

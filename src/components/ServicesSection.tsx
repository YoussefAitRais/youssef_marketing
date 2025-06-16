import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, Cpu, TrendingUp, Rocket, Code, Database, LineChart, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const serviceItems = [
  {
    id: "web-dev",
    icon: <Monitor className="w-8 h-8" />,
    gradient: "from-pink-500 to-brand-pink",
    delay: 0.1,
    link: "/services/web-development",
    features: [
      { icon: <Code size={16} />, key: "feature1" },
      { icon: <Layers size={16} />, key: "feature2" },
      { icon: <Database size={16} />, key: "feature3" }
    ],
    bgAccent: "bg-brand-pink/5"
  },
  {
    id: "ai-automation",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-purple-500 to-brand-purple",
    delay: 0.3,
    link: "/services/ai-automation",
    features: [
      { icon: <Cpu size={16} />, key: "feature1" },
      { icon: <Layers size={16} />, key: "feature2" },
      { icon: <Database size={16} />, key: "feature3" }
    ],
    bgAccent: "bg-brand-purple/5"
  },
  {
    id: "growth",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.5,
    link: "/services/growth-consulting",
    features: [
      { icon: <LineChart size={16} />, key: "feature1" },
      { icon: <TrendingUp size={16} />, key: "feature2" },
      { icon: <Layers size={16} />, key: "feature3" }
    ],
    bgAccent: "bg-blue-600/5"
  },
  {
    id: "saas",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-blue-500 to-brand-blue",
    delay: 0.7,
    link: "/services/saas-incubation",
    features: [
      { icon: <Code size={16} />, key: "feature1" },
      { icon: <Database size={16} />, key: "feature2" },
      { icon: <Layers size={16} />, key: "feature3" }
    ],
    bgAccent: "bg-brand-blue/5"
  }
];

const ServiceCard = ({ id, icon, gradient, features, bgAccent, delay, link }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="h-full flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className={`${bgAccent} border-2 border-white/5 p-0 w-full flex flex-col hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 relative group overflow-hidden backdrop-blur-lg rounded-2xl transform hover:-translate-y-1`}
      >
        {/* Top gradient bar with animated shine effect */}
        <div className="relative overflow-hidden">
          <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}>
            <motion.div
              className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </div>
        </div>
        
        <div className="p-8 pb-6 flex-grow">
          {/* Service icon and title row */}
          <div className="flex items-start mb-6">
            <motion.div 
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg mr-5 group-hover:scale-110 transition-all duration-500`}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            <div>
              <motion.h3 
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 mb-2"
                animate={{ opacity: isHovered ? 1 : 0.9 }}
              >
                {t(`services.sectionCards.${id}.title`)}
              </motion.h3>
              <motion.div 
                className={`h-1 w-12 bg-gradient-to-r ${gradient} rounded-full`}
                initial={{ width: '2rem' }}
                animate={{ width: isHovered ? '3rem' : '2rem' }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
          
          {/* Description with gradient text */}
          <p className="text-base text-white/80 mb-8 leading-relaxed">{t(`services.sectionCards.${id}.desc`)}</p>
          
          {/* Features list with improved animations */}
          <div className="space-y-4 mt-auto">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center group/feature"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0.8, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className={`w-8 h-8 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mr-4 shadow-lg group-hover/feature:scale-110 transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <span className="text-sm text-white/90 font-medium">{t(`services.sectionCards.${id}.features.${feature.key}`)}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Card footer with enhanced button */}
        <div className="p-6 border-t border-white/10 bg-gradient-to-b from-black/0 to-black/20">
          <a href={link} className="w-full">
            <Button 
              variant="ghost" 
              className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 border-0 text-white shadow-lg group flex items-center justify-center py-5 text-base font-semibold`}
            >
              <span>{t("services.explore")}</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </a>
        </div>
        
        {/* Background decorative elements */}
        <motion.div 
          className={`absolute -right-20 -bottom-20 w-40 h-40 rounded-full ${bgAccent} blur-3xl opacity-50`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredServices = activeTab === "all" ? 
    serviceItems : 
    serviceItems.filter(service => service.id === activeTab);
  
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg className="absolute left-0 top-0 h-full w-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <motion.div
          className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl"
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
            className="absolute -left-10 top-0 w-20 h-20 rounded-full bg-brand-purple/10 blur-xl"
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
              SERVICES
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              {t("services.heading.prefix")} {" "}
              <span className="gradient-text">{t("services.heading.colored")}</span>
            </h2>
          </div>
          
          <div className="h-1 w-20 mx-auto bg-brand-gradient rounded-full mb-6"></div>
          
          <p className="text-white/70 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 auto-rows-fr">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slanted divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white/5 slant-top"></div>
    </section>
  );
};

export default ServicesSection;

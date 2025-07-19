import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const processSteps = [
  { 
    id: "discover", 
    icon: <Search className="w-8 h-8" />, 
    delay: 0.1, 
    color: "from-pink-500 to-brand-pink",
    title: "Discover",
    description: "Understanding your needs and goals"
  },
  { 
    id: "design", 
    icon: <PenTool className="w-8 h-8" />, 
    delay: 0.3, 
    color: "from-purple-500 to-brand-purple",
    title: "Design",
    description: "Creating tailored solutions"
  },
  { 
    id: "launch", 
    icon: <Rocket className="w-8 h-8" />, 
    delay: 0.5, 
    color: "from-indigo-500 to-purple-600",
    title: "Launch",
    description: "Bringing ideas to life"
  },
  { 
    id: "expand", 
    icon: <TrendingUp className="w-8 h-8" />, 
    delay: 0.7, 
    color: "from-blue-500 to-brand-blue",
    title: "Expand",
    description: "Scaling for growth"
  }
];

const ProcessSection = () => {
  const { t } = useTranslation();
  return (
    <section id="process" className="py-12 md:py-20 text-white relative overflow-hidden bg-[#1a1a1a]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="rgba(174, 59, 255, 0.1)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-brand-pink/10 via-brand-purple/10 to-brand-blue/10"
            style={{
              width: Math.random() * 400 + 50 + 'px',
              height: Math.random() * 400 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 15 + 15,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24 relative"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -left-12 top-0 w-24 h-24 rounded-full bg-gradient-to-r from-brand-pink/10 to-brand-pink/5 blur-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -right-12 bottom-0 w-24 h-24 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-blue/5 blur-2xl"
            animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, delay: 1, repeat: Infinity }}
          />
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-brand">
              {t("process.heading.prefix")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-pink to-brand-purple mx-auto mb-8 rounded-full"></div>
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              {t("process.description")}
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 w-1.5 h-full bg-gradient-to-b from-brand-pink via-brand-purple to-brand-blue transform -translate-x-1/2 rounded-full"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: '100%', opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          
          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-0 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className={`md:grid md:grid-cols-2 relative ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >

                
                <div
                  className={`md:pr-12 ${
                    index % 2 === 1 ? "md:col-start-2 md:pl-12 md:pr-0" : ""
                  } mb-8 md:mb-32 relative`}
                >
                  <motion.div 
                    className={`glass-effect p-6 rounded-lg relative ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(174, 59, 255, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4 md:justify-start">
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#9f59f7' }}>
                        {t(`process.steps.${step.id}.title`)}
                      </h3>
                    </div>
                    <p className="text-white/80">{t(`process.steps.${step.id}.description`)}</p>
                    
                    {/* Step number */}
                    <div className="absolute top-0 right-0 md:block hidden">
                      <span className="text-6xl font-black opacity-10 select-none">{index + 1}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

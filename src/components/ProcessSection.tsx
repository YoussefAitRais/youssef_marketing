import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const processSteps = [
  { id: "discover", icon: <Search className="w-6 h-6" />, delay: 0.1, color: "from-pink-500 to-brand-pink" },
  { id: "design", icon: <PenTool className="w-6 h-6" />, delay: 0.3, color: "from-purple-500 to-brand-purple" },
  { id: "deploy", icon: <Rocket className="w-6 h-6" />, delay: 0.5, color: "from-indigo-500 to-purple-600" },
  { id: "scale", icon: <TrendingUp className="w-6 h-6" />, delay: 0.7, color: "from-blue-500 to-brand-blue" }
];

const ProcessSection = () => {
  const { t } = useTranslation();
  return (
    <section id="process" className="py-20 bg-white/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="rgba(174, 59, 255, 0.1)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-purple/5"
            style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
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
              {t("process.heading.colored").toUpperCase()}
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-brand">
              {t("process.heading.prefix")} {t("process.heading.colored")}
            </h2>
          </div>
          

          
          <p className="text-white/70 max-w-2xl mx-auto">
            {t("process.description")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-brand-pink via-brand-purple to-brand-blue transform -translate-x-1/2"
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
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: step.delay + 0.3 
                  }}
                  viewport={{ once: true }}
                  className={`hidden md:flex absolute top-0 left-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} transform -translate-x-1/2 z-10 items-center justify-center shadow-lg shadow-purple-500/20`}
                >
                  {step.icon}
                </motion.div>
                
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
                      <div className={`md:hidden mr-4 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold gradient-text">{t(`process.steps.${step.id}.title`)}</h3>
                    </div>
                    <p className="text-white/80">{t(`process.steps.${step.id}.desc`)}</p>
                    
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

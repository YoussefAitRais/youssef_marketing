
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, Workflow, ArrowRight, Brain, MessageSquare, FileSearch } from "lucide-react";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const AiAutomation = () => {
  const { t } = useTranslation();
  const technologies = [
    "OpenAI", "GPT-4", "n8n", "Zapier", "Langchain", 
    "Python", "Machine Learning", "Data Processing", "NLP", "Computer Vision"
  ];
  
  const serviceFeatures = [
    {
      title: t('services.aiAuto.features.chatbots.title'),
      description: t('services.aiAuto.features.chatbots.description'),
      icon: <Bot className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: t('services.aiAuto.features.workflow.title'),
      description: t('services.aiAuto.features.workflow.description'),
      icon: <Workflow className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: t('services.aiAuto.features.dataAnalysis.title'),
      description: t('services.aiAuto.features.dataAnalysis.description'),
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    },
    {
      title: t('services.aiAuto.features.nlp.title'),
      description: t('services.aiAuto.features.nlp.description'),
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: t('services.aiAuto.features.ml.title'),
      description: t('services.aiAuto.features.ml.description'),
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: t('services.aiAuto.features.document.title'),
      description: t('services.aiAuto.features.document.description'),
      icon: <FileSearch className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    }
  ];

  return (
    <ServiceLayout
      title={t('services.aiAuto.meta.title')}
      description={t('services.aiAuto.meta.description')}
    >
      
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
                {t('services.aiAuto.hero.title')} <span className="gradient-text">{t('services.aiAuto.hero.titleColored')}</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                {t('services.aiAuto.hero.subtitle')}
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
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800" 
                  alt="AI Automation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">{t('services.aiAuto.hero.stats.label')}</p>
                <p className="text-3xl font-bold gradient-text">{t('services.aiAuto.hero.stats.value')}</p>
                <p className="text-white/70 text-sm">{t('services.aiAuto.hero.stats.subtext')}</p>
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
              {t('services.aiAuto.offer.title')} <span className="gradient-text">{t('services.aiAuto.offer.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.aiAuto.offer.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={cn(
                  "bg-white/5 border-white/10 p-8 h-full overflow-hidden relative",
                  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                  "backdrop-blur-lg"
                )}>
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
                    "group-hover:scale-110 transition-transform duration-300",
                    feature.gradient
                  )}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{feature.description}</p>
                  
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute -right-32 -bottom-32 w-64 h-64 rounded-full opacity-0 blur-3xl transition-all duration-500",
                    "bg-gradient-to-br",
                    feature.gradient,
                    "group-hover:opacity-10"
                  )} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
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
              {t('services.aiAuto.useCases.title')} <span className="gradient-text">{t('services.aiAuto.useCases.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.aiAuto.useCases.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('services.aiAuto.useCases.items.support.title'),
                description: t('services.aiAuto.useCases.items.support.description')
              },
              {
                title: t('services.aiAuto.useCases.items.document.title'),
                description: t('services.aiAuto.useCases.items.document.description')
              },
              {
                title: t('services.aiAuto.useCases.items.sales.title'),
                description: t('services.aiAuto.useCases.items.sales.description')
              },
              {
                title: t('services.aiAuto.useCases.items.internal.title'),
                description: t('services.aiAuto.useCases.items.internal.description')
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={cn(
                  "bg-white/5 border-white/10 p-8 h-full overflow-hidden relative",
                  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                  "backdrop-blur-lg"
                )}>
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{useCase.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{useCase.description}</p>
                </Card>
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
              {t('services.aiAuto.cta.title')} <span className="gradient-text">{t('services.aiAuto.cta.titleColored')}</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              {t('services.aiAuto.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-gradient animate-gradient-shift py-6 px-8 text-lg">
                {t('services.aiAuto.cta.primaryButton')}
              </Button>
              <Button variant="outline" className="border-white/20 py-6 px-8 text-lg">
                {t('services.aiAuto.cta.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      

    </ServiceLayout>
  );
};

export default AiAutomation;

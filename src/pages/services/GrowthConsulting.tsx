
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart, Target, ArrowRight, LineChart, Users, Search, Megaphone } from "lucide-react";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const GrowthConsulting = () => {
  const { t } = useTranslation();
  const expertise = [
    "Conversion Optimization", "SEO", "Analytics", "Paid Media", 
    "Customer Journey", "A/B Testing", "Marketing Funnel", "Growth Strategy", 
    "User Acquisition", "Retention"
  ];
  
  const serviceFeatures = [
    {
      title: t('services.growth.features.dataStrategy.title'),
      description: t('services.growth.features.dataStrategy.description'),
      icon: <BarChart className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: t('services.growth.features.conversion.title'),
      description: t('services.growth.features.conversion.description'),
      icon: <Target className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: t('services.growth.features.analysis.title'),
      description: t('services.growth.features.analysis.description'),
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    },
    {
      title: t('services.growth.features.performance.title'),
      description: t('services.growth.features.performance.description'),
      icon: <LineChart className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: t('services.growth.features.acquisition.title'),
      description: t('services.growth.features.acquisition.description'),
      icon: <Users className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: t('services.growth.features.marketing.title'),
      description: t('services.growth.features.marketing.description'),
      icon: <Megaphone className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    }
  ];

  return (
    <ServiceLayout
      title={t('services.growth.meta.title')}
      description={t('services.growth.meta.description')}
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
                {t('services.growth.hero.title')} <span className="gradient-text">{t('services.growth.hero.titleColored')}</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                {t('services.growth.hero.subtitle')}
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
                <p className="text-sm font-medium">{t('services.growth.hero.stats.label')}</p>
                <p className="text-3xl font-bold gradient-text">{t('services.growth.hero.stats.value')}</p>
                <p className="text-white/70 text-sm">{t('services.growth.hero.stats.subtext')}</p>
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
              {t('services.growth.offer.title')} <span className="gradient-text">{t('services.growth.offer.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.growth.offer.subtitle')}
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
              {t('services.growth.methodology.title')} <span className="gradient-text">{t('services.growth.methodology.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.growth.methodology.subtitle')}
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: t('services.growth.methodology.steps.1.title'),
                description: t('services.growth.methodology.steps.1.description')
              },
              {
                step: "02",
                title: t('services.growth.methodology.steps.2.title'),
                description: t('services.growth.methodology.steps.2.description')
              },
              {
                step: "03",
                title: t('services.growth.methodology.steps.3.title'),
                description: t('services.growth.methodology.steps.3.description')
              },
              {
                step: "04",
                title: t('services.growth.methodology.steps.4.title'),
                description: t('services.growth.methodology.steps.4.description')
              },
              {
                step: "05",
                title: t('services.growth.methodology.steps.5.title'),
                description: t('services.growth.methodology.steps.5.description')
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start md:items-center gap-6 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-white/20 w-16 flex-shrink-0 group-hover:text-brand-purple transition-colors">
                  {phase.step}
                </div>
                <Card className={cn(
                  "flex-grow bg-white/5 border-white/10 p-6",
                  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                  "backdrop-blur-lg"
                )}>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{phase.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{phase.description}</p>
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
              {t('services.growth.cta.title')} <span className="gradient-text">{t('services.growth.cta.titleColored')}</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              {t('services.growth.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-gradient animate-gradient-shift py-6 px-8 text-lg">
                {t('services.growth.cta.primaryButton')}
              </Button>
              <Button variant="outline" className="border-white/20 py-6 px-8 text-lg">
                {t('services.growth.cta.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      

    </ServiceLayout>
  );
};

export default GrowthConsulting;

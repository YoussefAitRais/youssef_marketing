
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Monitor, Code, CheckCircle, ArrowRight, Database, Layout, Smartphone, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const WebDevelopment = () => {
  const { t } = useTranslation();
  
  const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "Django", 
    "WordPress", "Shopify", "Tailwind CSS", "MongoDB", "PostgreSQL"
  ];
  
  const customAppsTitle = t('services.webDev.features.customApps.title');
  const customAppsDesc = t('services.webDev.features.customApps.description');
  const ecommerceTitle = t('services.webDev.features.ecommerce.title');
  const ecommerceDesc = t('services.webDev.features.ecommerce.description');
  const responsiveTitle = t('services.webDev.features.responsive.title');
  const responsiveDesc = t('services.webDev.features.responsive.description');
  const databaseTitle = t('services.webDev.features.database.title');
  const databaseDesc = t('services.webDev.features.database.description');
  const uiuxTitle = t('services.webDev.features.uiux.title');
  const uiuxDesc = t('services.webDev.features.uiux.description');
  const performanceTitle = t('services.webDev.features.performance.title');
  const performanceDesc = t('services.webDev.features.performance.description');
  const securityTitle = t('services.webDev.features.security.title');
  const securityDesc = t('services.webDev.features.security.description');
  const scalabilityTitle = t('services.webDev.features.scalability.title');
  const scalabilityDesc = t('services.webDev.features.scalability.description');

  const processSteps = [
    {
      step: "01",
      title: t('services.webDev.process.steps.1.title'),
      description: t('services.webDev.process.steps.1.description')
    },
    {
      step: "02",
      title: t('services.webDev.process.steps.2.title'),
      description: t('services.webDev.process.steps.2.description')
    },
    {
      step: "03",
      title: t('services.webDev.process.steps.3.title'),
      description: t('services.webDev.process.steps.3.description')
    },
    {
      step: "04",
      title: t('services.webDev.process.steps.4.title'),
      description: t('services.webDev.process.steps.4.description')
    },
    {
      step: "05",
      title: t('services.webDev.process.steps.5.title'),
      description: t('services.webDev.process.steps.5.description')
    }
  ];

  const serviceFeatures = [
    {
      title: customAppsTitle,
      description: customAppsDesc,
      icon: <Code className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: ecommerceTitle,
      description: ecommerceDesc,
      icon: <Monitor className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: responsiveTitle,
      description: responsiveDesc,
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    },
    {
      title: databaseTitle,
      description: databaseDesc,
      icon: <Database className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: uiuxTitle,
      description: uiuxDesc,
      icon: <Layout className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: performanceTitle,
      description: performanceDesc,
      icon: <CheckCircle className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    },
    {
      title: securityTitle,
      description: securityDesc,
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-orange"
    },
    {
      title: scalabilityTitle,
      description: scalabilityDesc,
      icon: <Database className="w-6 h-6" />,
      gradient: "from-brand-orange to-brand-red"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#232325] to-[#230c33] text-white overflow-x-hidden">
      <Helmet>
        <title>{t('services.webDev.meta.title')} | يوسف للتسويق</title>
        <meta name="description" content={t('services.webDev.meta.description')} />
      </Helmet>

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
                {t('services.webDev.hero.title')} <span className="gradient-text">{t('services.webDev.hero.titleColored')}</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                {t('services.webDev.hero.subtitle')}
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
                <p className="text-sm font-medium">{t('services.webDev.hero.expertise.label')}</p>
                <p className="text-3xl font-bold gradient-text">{t('services.webDev.hero.expertise.count')}</p>
                <p className="text-white/70 text-sm">{t('services.webDev.hero.expertise.subtext')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-[#232325] to-[#230c33]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-new-blue">
              {t('services.webDev.offer.title')} <span className="gradient-text">{t('services.webDev.offer.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.webDev.offer.subtitle')}
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
                  "backdrop-blur-lg",
                  feature.gradient
                )}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6">
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
      
      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-[#232325] to-[#230c33]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-new-blue">
              {t('services.webDev.process.title')} <span className="gradient-text">{t('services.webDev.process.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.webDev.process.subtitle')}
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: t('services.webDev.process.steps.1.title'),
                description: t('services.webDev.process.steps.1.description')
              },
              {
                step: "02",
                title: t('services.webDev.process.steps.2.title'),
                description: t('services.webDev.process.steps.2.description')
              },
              {
                step: "03",
                title: t('services.webDev.process.steps.3.title'),
                description: t('services.webDev.process.steps.3.description')
              },
              {
                step: "04",
                title: t('services.webDev.process.steps.4.title'),
                description: t('services.webDev.process.steps.4.description')
              },
              {
                step: "05",
                title: t('services.webDev.process.steps.5.title'),
                description: t('services.webDev.process.steps.5.description')
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
      <section className="py-16 bg-gradient-to-r from-[#232325] to-[#230c33]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 shadow-lg shadow-purple-900/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-new-blue">
              {t('services.webDev.cta.title')} <span className="gradient-text">{t('services.webDev.cta.titleColored')}</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              {t('services.webDev.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-gradient animate-gradient-shift py-6 px-8 text-lg">
                {t('services.webDev.cta.primaryButton')}
              </Button>
              <Button variant="outline" className="border-white/20 py-6 px-8 text-lg">
                {t('services.webDev.cta.secondaryButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      

    </div>
  );
};

export default WebDevelopment;

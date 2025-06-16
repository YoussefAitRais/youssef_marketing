
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Video, CheckCircle2 } from "lucide-react";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const BookCall = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      title: t('services.bookCall.benefits.items.expert.title'),
      description: t('services.bookCall.benefits.items.expert.description'),
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: t('services.bookCall.benefits.items.scheduling.title'),
      description: t('services.bookCall.benefits.items.scheduling.description'),
      icon: <Calendar className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: t('services.bookCall.benefits.items.virtual.title'),
      description: t('services.bookCall.benefits.items.virtual.description'),
      icon: <Video className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    },
    {
      title: t('services.bookCall.benefits.items.actionPlan.title'),
      description: t('services.bookCall.benefits.items.actionPlan.description'),
      icon: <CheckCircle2 className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    }
  ];

  return (
    <ServiceLayout
      title={t('services.bookCall.meta.title')}
      description={t('services.bookCall.meta.description')}
    >
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.bookCall.hero.title')} <span className="gradient-text">{t('services.bookCall.hero.titleColored')}</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              {t('services.bookCall.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.bookCall.benefits.title')} <span className="gradient-text">{t('services.bookCall.benefits.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.bookCall.benefits.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
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
                    benefit.gradient
                  )}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{benefit.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{benefit.description}</p>
                  
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute -right-32 -bottom-32 w-64 h-64 rounded-full opacity-0 blur-3xl transition-all duration-500",
                    "bg-gradient-to-br",
                    benefit.gradient,
                    "group-hover:opacity-10"
                  )} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Mini Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t('services.bookCall.testimonials.title')} <span className="gradient-text">{t('services.bookCall.testimonials.titleColored')}</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t('services.bookCall.testimonials.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: t('services.bookCall.testimonials.items.0.quote'),
                name: t('services.bookCall.testimonials.items.0.name'),
                role: t('services.bookCall.testimonials.items.0.role')
              },
              {
                quote: t('services.bookCall.testimonials.items.1.quote'),
                name: t('services.bookCall.testimonials.items.1.name'),
                role: t('services.bookCall.testimonials.items.1.role')
              },
              {
                quote: t('services.bookCall.testimonials.items.2.quote'),
                name: t('services.bookCall.testimonials.items.2.name'),
                role: t('services.bookCall.testimonials.items.2.role')
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={cn(
                  "bg-white/5 border-white/10 p-8 h-full relative overflow-hidden",
                  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                  "backdrop-blur-lg"
                )}>
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 mr-1 group-hover:scale-110 transition-transform inline-block">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-white/80 mb-6 group-hover:text-white/90 transition-colors">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold group-hover:text-white transition-colors">{testimonial.name}</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{testimonial.role}</p>
                  </div>
                  
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute -right-32 -bottom-32 w-64 h-64 rounded-full opacity-0 blur-3xl transition-all duration-500",
                    "bg-gradient-to-br from-brand-purple to-brand-pink",
                    "group-hover:opacity-10"
                  )} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </ServiceLayout>
  );
};

export default BookCall;

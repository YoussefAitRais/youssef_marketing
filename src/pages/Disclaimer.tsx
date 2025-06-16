
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>{`${t('policies.disclaimer.title')} | Lina Prime Solutions LLC`}</title>
        <meta name="description" content={t('policies.disclaimer.meta')} />
      </Helmet>
      
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{t('policies.disclaimer.title')}</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80">{t('policies.disclaimer.updated')}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.disclaimer.sections.1.heading')}</h2>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.1.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.disclaimer.sections.2.heading')}</h2>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.2.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.disclaimer.sections.3.heading')}</h2>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.3.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.disclaimer.sections.4.heading')}</h2>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.4.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.disclaimer.sections.5.heading')}</h2>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.5.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.disclaimer.sections.6.heading')}</h2>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.6.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.disclaimer.sections.7.heading')}</h2>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.7.intro')}
              </p>
              <p className="text-white/80">
                {t('policies.disclaimer.sections.7.address')}<br />
                {t('policies.disclaimer.sections.7.email')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;

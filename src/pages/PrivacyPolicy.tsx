
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>{`${t('policies.privacy.title')} | يوسف للتسويق`}</title>
        <meta name="description" content={t('policies.privacy.meta')} />
      </Helmet>
      
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{t('policies.privacy.title')}</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80">{t('policies.privacy.updated')}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.privacy.sections.1.heading')}</h2>
              <p className="text-white/80">
                {t('policies.privacy.sections.1.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.privacy.sections.2.heading')}</h2>
              <p className="text-white/80">
                {t('policies.privacy.sections.2.p')}
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>{t('policies.privacy.sections.2.list.identity')}</li>
                <li>{t('policies.privacy.sections.2.list.contact')}</li>
                <li>{t('policies.privacy.sections.2.list.technical')}</li>
                <li>{t('policies.privacy.sections.2.list.usage')}</li>
                <li>{t('policies.privacy.sections.2.list.marketing')}</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.privacy.sections.3.heading')}</h2>
              <p className="text-white/80">
                {t('policies.privacy.sections.3.p')}
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>{t('policies.privacy.sections.3.list.item1')}</li>
                <li>{t('policies.privacy.sections.3.list.item2')}</li>
                <li>{t('policies.privacy.sections.3.list.item3')}</li>
                <li>{t('policies.privacy.sections.3.list.item4')}</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.privacy.sections.4.heading')}</h2>
              <p className="text-white/80">
                {t('policies.privacy.sections.4.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.privacy.sections.5.heading')}</h2>
              <p className="text-white/80">
                {t('policies.privacy.sections.5.p')}
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.privacy.sections.6.heading')}</h2>
              <p className="text-white/80">
                {t('policies.privacy.sections.6.p')}
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>{t('policies.privacy.sections.6.list.access')}</li>
                <li>{t('policies.privacy.sections.6.list.correction')}</li>
                <li>{t('policies.privacy.sections.6.list.erasure')}</li>
                <li>{t('policies.privacy.sections.6.list.object')}</li>
                <li>{t('policies.privacy.sections.6.list.restrict')}</li>
                <li>{t('policies.privacy.sections.6.list.transfer')}</li>
                <li>{t('policies.privacy.sections.6.list.withdraw')}</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.privacy.sections.7.heading')}</h2>
              <p className="text-white/80">
                {t('policies.privacy.sections.7.intro')}
              </p>
              <p className="text-white/80">
                {t('policies.privacy.sections.7.address')}<br />
                {t('policies.privacy.sections.7.email')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

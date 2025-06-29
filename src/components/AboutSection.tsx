import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const DecorativeLine = ({ color }) => (
  <div className={`w-16 h-1 rounded-full mx-auto bg-gradient-to-r ${color}`}></div>
);

const InfoCard = ({ title, description, delay }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-[#1A1A1A] border border-gray-800 rounded-2xl p-8 h-full relative overflow-hidden ${isRtl ? 'text-right' : 'text-center'}`}>
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 blur-3xl opacity-50"></div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const { t } = useTranslation();
  const cardsData = t('whyChooseMe.cards', { returnObjects: true });
  const cards = Array.isArray(cardsData) ? cardsData : [];

  return (
    <section id="about" className="py-20 md:py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-brand">
            {t('whyChooseMe.heading')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <InfoCard
              key={card.id}
              title={card.title}
              description={card.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        <div className="text-center mt-16">
            <DecorativeLine color="from-blue-500 to-cyan-500" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


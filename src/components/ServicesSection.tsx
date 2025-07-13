import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ card, image, color, delay }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  const { title, description, link, button } = card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      // This is the outer frame (اطار), with a dark background and padding.
      className="bg-gradient-to-r from-[#232325] to-[#230c33] border border-white/10 rounded-2xl p-3 h-full backdrop-blur-lg flex flex-col"
    >
      {/* This is the inner content block, with a black background. */}
      <div className="bg-gradient-to-r from-[#232325] to-[#230c33] rounded-lg overflow-hidden h-full flex flex-col">
        {/* Top part: Browser window with image */}
        <div>
                    <div className="bg-gradient-to-r from-[#232325] to-[#230c33] p-3 border-b border-white/10">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="aspect-video">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Bottom part: Text content */}
        <div className={`p-3 flex-grow flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
          <h3 className={`text-lg font-bold ${color} mb-2`}>{title}</h3>
          <ul className="space-y-2 text-white/90 flex-grow text-sm">
            {Array.isArray(description) && description.map((item, index) => (
                <li key={index} className="relative pl-6 rtl:pr-6 rtl:pl-0">
                    <span
                        className={`absolute left-0 rtl:right-0 top-2 w-2.5 h-2.5 rounded-full ${
                            index % 2 === 0 ? 'bg-pink-500' : 'bg-yellow-400'
                        }`}
                    ></span>
                    {item}
                </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link 
              to={link}
              className="inline-block bg-brand-new-blue text-white font-semibold py-1.5 px-5 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:shadow-brand-new-blue/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-new-blue"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const serviceCards = t('services.cards', { returnObjects: true });

  return (
    <section id="services" className="py-10 md:py-16 relative">
       <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -left-40 -top-40 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            delay: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-brand">
            {t("services.heading.prefix")}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(serviceCards) && serviceCards.map((card, index) => (
            <ServiceCard 
              key={card.id || index} 
              card={card}
              image={card.image}
              color="text-purple-500"
              delay={index * 0.2 + 0.1}
            />
          ))}
        </div>

        {/* CTA for unsure clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center bg-[#1a1a1a]/20 border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl shadow-purple-500/5 backdrop-blur-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-brand mb-4">
            {t('services.cta.title')}
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            {t('services.cta.description')}
          </p>
          <div className="flex justify-center mb-6">
            <Link 
              to="#contact"
              className="inline-block bg-brand-new-blue text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:shadow-brand-new-blue/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-new-blue"
            >
              {t('services.cta.button')}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {(t('services.cta.tags', { returnObjects: true }) as string[]).map((tag: string) => (
              <span key={tag} className="text-xs text-white/60 border border-white/20 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;

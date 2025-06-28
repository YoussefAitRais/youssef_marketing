import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const serviceItems = [
  {
    id: 'marketing-system',
    image: '/placeholder.svg',
    color: 'text-yellow-400',
    delay: 0.1,
  },
  {
    id: 'web-development',
    image: '/placeholder.svg',
    color: 'text-yellow-400',
    delay: 0.3,
  },
  {
    id: 'content-writing',
    image: '/placeholder.svg',
    color: 'text-yellow-400',
    delay: 0.5,
  },
];

const ServiceCard = ({ id, image, color, delay }) => {
  const { t, i18n } = useTranslation();
  const features = ['feature1', 'feature2', 'feature3', 'feature4'];
  const isRtl = i18n.dir() === 'rtl';

  const title = t(`services.sectionCards.${id}.title`);
  const desc = t(`services.sectionCards.${id}.desc`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      // This is the outer frame (اطار), with a dark background and padding.
      className="bg-[#1C1C1C] border border-gray-800 rounded-2xl p-4 h-full"
    >
      {/* This is the inner content block, with a black background. */}
      <div className="bg-black rounded-lg overflow-hidden h-full flex flex-col">
        {/* Top part: Browser window with image */}
        <div>
          <div className="bg-gray-900 p-3 border-b border-gray-700">
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
        <div className={`p-6 flex-grow flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
          <h3 className={`text-2xl font-bold ${color} mb-3`}>{title}</h3>
          <p className="text-white/90 mb-4 text-lg">{desc}</p>
          <ul className="space-y-3 text-gray-400 flex-grow">
            {features.map((featureKey) => {
              const featureText = t(`services.sectionCards.${id}.features.${featureKey}`);
              return !featureText || featureText.includes('features.') ? null : (
                <li key={featureKey}>
                  {featureText}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 md:py-32 relative bg-gradient-to-b from-black to-gray-900">
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
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t("services.heading.prefix")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black text-white py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-black to-black"></div>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-gray-800/80 text-gray-300 text-sm font-semibold px-4 py-1 rounded-md mb-6">
          {t('banner.tag')}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
          {t('banner.heading')}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          {t('banner.subheading')}
        </p>
      </div>
    </section>
  );
};

export default BannerSection;
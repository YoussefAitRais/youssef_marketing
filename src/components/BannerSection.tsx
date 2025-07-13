import React from 'react';
import { useTranslation } from 'react-i18next';

const BannerSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#1a1a1a] text-white py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-black to-black"></div>
      <div className="container mx-auto px-4 text-center">
        <div className="text-[#a955f7] text-4xl font-bold mb-6">
          {t('banner.tag')}
        </div>
        <h2 className="text-4xl font-bold mb-4 max-w-3xl mx-auto">
          {t('banner.heading')}
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto">
        </p>
      </div>
    </div>
  );
};

export default BannerSection;

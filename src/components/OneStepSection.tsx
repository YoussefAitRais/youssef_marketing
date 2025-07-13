import React from 'react';
import { useTranslation } from 'react-i18next';

const OneStepSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1a1a1a] text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black to-black"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {t('oneStep.heading')}
        </h2>
        <p className="text-xl text-gray-300 mb-8">{t('oneStep.subheading')}</p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-colors duration-300">
            {t('oneStep.buttonText')}
        </button>
      </div>
    </section>
  );
};

export default OneStepSection;

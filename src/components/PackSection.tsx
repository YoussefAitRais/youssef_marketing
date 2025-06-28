import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsTools, BsBarChartLine, BsPencilSquare } from 'react-icons/bs';

const icons = {
  "web-design": <BsTools className="w-5 h-5 text-white" />,
  "marketing-system": <BsBarChartLine className="w-5 h-5 text-white" />,
  "copywriting": <BsPencilSquare className="w-5 h-5 text-white" />,
};

const PackSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const packages = t('packages.cards', { returnObjects: true }) as Array<{id: string, title: string, description: string, buttonText: string}>;

  if (!Array.isArray(packages)) {
    return null;
  }

  const isRtl = i18n.language === 'ar';

  return (
    <section className="bg-black text-white py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block mb-4">
            <h2 className="text-4xl md:text-5xl font-bold">{t('packages.heading')}</h2>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">{t('packages.subheading')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="p-[1.5px] bg-gradient-to-br from-[#1E1E1E] via-purple-900 to-[#1E1E1E] rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="bg-[#0D0D0D] rounded-2xl p-8 h-full flex flex-col text-center">
                    <div className={`flex items-center justify-center gap-3 mb-5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className="bg-gray-800/50 p-2 rounded-md">
                           {icons[pkg.id as keyof typeof icons] || <BsTools className="w-5 h-5 text-white" />}
                        </div>
                        <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                    </div>
                    <p className="text-gray-400 flex-grow mb-8">{pkg.description}</p>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 mt-auto">
                        {pkg.buttonText}
                    </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackSection;
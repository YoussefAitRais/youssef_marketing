import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ArticleFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const ArticleFilter: React.FC<ArticleFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-8 mb-16" dir="rtl">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`relative px-2 py-2 text-md md:text-lg font-medium transition-colors duration-300 ${
            selectedCategory === category ? 'text-white' : 'text-white/60 hover:text-white'
          } ${category === 'expertise' ? 'ml-4' : ''}`}
        >
          {t(`articles.categories.${category}`)}
          {selectedCategory === category && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-new-blue"
              layoutId="underline-filter"
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ArticleFilter;

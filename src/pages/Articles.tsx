import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import ArticleFilter from '@/components/ArticleFilter';
import { useTranslation } from 'react-i18next';

// Dummy data for articles - replace with actual data from a CMS or API later
const articles = [
  {
    slug: 'growth-strategy-for-coaches',
    category: 'expertise',
    title: '5 استراتيجيات فعالة لمضاعفة أرباحك كمدرب في 2025',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  {
    slug: 'building-high-converting-funnels',
    category: 'marketing',
    title: 'بناء مسارات تحويل عالية الأداء: الدليل الشامل',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  {
    slug: 'personal-branding-secrets',
    category: 'branding',
    title: 'أسرار بناء علامة تجارية شخصية قوية تجذب العملاء إليك',
    imageUrl: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
  {
    slug: 'ai-in-marketing-automation',
    category: 'copywriting',
    title: 'كيف تستخدم الذكاء الاصطناعي لأتمتة تسويقك وتوفير وقتك؟',
    imageUrl: 'https://images.unsplash.com/photo-1689362137993-9572656a55a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  },
];

const Articles = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'expertise', 'marketing', 'branding', 'copywriting'];

  const filteredArticles = articles.filter(article => 
    selectedCategory === 'all' || article.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>{`${t('articles.pageTitle')} - ${t('global.name')}`}</title>
        <meta name="description" content={t('articles.pageDescription')} />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-brand">
            {t('articles.heading')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {t('articles.subheading')}
          </p>
        </motion.div>

        <ArticleFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <motion.div 
          key={selectedCategory} // Re-trigger animation on category change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.slug} {...article} delay={index * 0.1} />
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;

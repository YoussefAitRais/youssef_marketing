import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  slug: string;
  title: string;
  imageUrl: string;
  category: string;
  delay?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  slug,
  title,
  imageUrl,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={`/blog/${slug}`} className="block group">
        <div className="overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4 text-right">
          <h3 className="text-lg font-semibold text-white group-hover:text-brand-new-blue transition-colors duration-300">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;

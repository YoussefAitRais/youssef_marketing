import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
  const serviceCards = t('services.cards', { returnObjects: true }) || [];
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="py-16 bg-transparent border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <img src="/ProfileInstagram.jpg" alt={t("footer.logoAlt")} className="h-16 w-16 rounded-full object-cover" />
              </div>
            </div>
            <p className="text-white/70 mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center">
              <a href="#" className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <div style={{ width: '1.5rem' }} />
              <a href="#" className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">{t("footer.quicklinks.title")}</h4>
            <ul className="space-y-3">
              <li><Link to="/#services" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">{t("navbar.services")}</Link></li>
              <li><Link to="/#process" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">{t("navbar.process")}</Link></li>
              <li><Link to="/#about" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">{t("navbar.about")}</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">{t("footer.services.title")}</h4>
            <ul className="space-y-3">
              {Array.isArray(serviceCards) && serviceCards.map((service) => (
                <li key={service.id}>
                  <Link to="/#services" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">{t("footer.news.title")}</h4>
            <p className="text-white/70 mb-4">{t("footer.news.desc")}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder={t("footer.news.placeholder")} 
                className="bg-white/10 border-white/20 text-white focus:ring-brand-purple focus:border-brand-purple transition-all duration-300"
              />
              <Button type="submit" className="bg-brand-new-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                {t("footer.news.subscribe")}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-6"
        >
          <p className="text-white/50 text-sm">
            {t("footer.copyright")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors">
              {t("footer.policies.privacy")}
            </Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-white text-sm transition-colors">
              {t("footer.policies.terms")}
            </Link>
            <Link to="/cookies-policy" className="text-white/50 hover:text-white text-sm transition-colors">
              {t("footer.policies.cookies")}
            </Link>
            <Link to="/disclaimer" className="text-white/50 hover:text-white text-sm transition-colors">
              {t("footer.policies.disclaimer")}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden relative bg-gradient-to-r from-[#232325] to-[#230c33]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-3xl max-h-3xl">
        <div className="absolute inset-0 rounded-full bg-brand-purple opacity-20 blur-3xl"></div>
        <div className="absolute inset-10 rounded-full bg-brand-yellow opacity-10 blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >


          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-4xl"
          >
            {t("hero.headline")}
          </motion.h1>

          {/* New Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto mt-8 mb-4"
          >
            {t("hero.sub")} <span className="text-[#a955f7]">{t("")}</span>
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group bg-brand-new-blue text-white font-semibold rounded-lg px-8 py-6 text-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <a href="/#services">
                {t("hero.ctaPrimary")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group text-white font-semibold rounded-lg px-8 py-6 text-lg hover:bg-transparent hover:text-brand-new-blue transition-colors w-full sm:w-auto"
            >
              <a href="/#contact">
                {t("hero.ctaSecondary")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

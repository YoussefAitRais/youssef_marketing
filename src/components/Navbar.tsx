import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("/#")) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "navbar.home" },
    { href: "/#services", label: "navbar.services" },
    { href: "/#process", label: "navbar.process" },
    { href: "/#whyChooseMe", label: "navbar.about" },
    { href: "/blog", label: "navbar.blog" },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const renderNavLink = (link, isMobile = false) => {
    const isExternalPage = link.href === "/blog";

    if (isExternalPage) {
      return (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => setIsOpen(false)}
          className={isMobile ? "text-white text-lg" : "text-white/80 hover:text-white transition-colors relative group"}
        >
          {t(link.label)}
          {!isMobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>}
        </Link>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        onClick={(e) => handleLinkClick(e, link.href)}
        className={isMobile ? "text-white text-lg" : "text-white/80 hover:text-white transition-colors relative group cursor-pointer"}
      >
        {t(link.label)}
        {!isMobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>}
      </a>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-gray-900/80 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
        {/* Logo / Personal Photo */}
        <motion.div initial="hidden" animate="visible" variants={logoVariants}>
          <a href="/" className="flex items-center gap-3">
            <img
              src="/ProfileInstagram.jpg"
              alt={t('navbar.logoAlt') || 'Youssef'}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-white">{t('global.name', 'يوسف')}</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => renderNavLink(link))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className="bg-brand-new-blue text-white font-semibold rounded-lg px-5 py-2 hover:opacity-90 transition-opacity">
            <a href="/#contact">{t("navbar.bookConsultation")}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md absolute top-full left-0 right-0 overflow-hidden"
          >
            <nav className="flex flex-col items-center space-y-4 p-6">
              {navLinks.map(link => renderNavLink(link, true))}
              <Button
                asChild
                className="bg-brand-gradient text-white font-semibold rounded-full px-6 py-3 w-full mt-4"
              >
                <a href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')}>{t("navbar.bookConsultation")}</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

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

  // Enhanced navigation links with consistent routing
  const navLinks = [
    { href: "/", label: "navbar.home" },
    { href: "/#services", label: "navbar.services" },
    { href: "/#process", label: "navbar.process" },
    { href: "/#about", label: "navbar.about" },
    { href: "/blog", label: "navbar.blog" },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Enhanced navigation handling for hash links
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // Handle hash links for same page navigation
    if (href.startsWith('/#')) {
      const hash = href.substring(2); // Remove '/#'
      const element = document.getElementById(hash);
      
      if (element) {
        // Add small delay to ensure mobile menu closes first
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    }
  };

  // Enhanced renderNavLink function with better mobile styling
  const renderNavLink = (link, isMobile = false) => {
    const isHashLink = link.href.startsWith('/#');
    
    if (isHashLink) {
      return (
        <button
          key={link.href}
          onClick={() => handleNavClick(link.href)}
          className={cn(
            "transition-all duration-300 font-medium",
            isMobile 
              ? "text-white text-lg py-3 px-4 rounded-lg hover:bg-white/10 w-full text-center block" 
              : "text-white hover:text-white/80 relative group"
          )}
        >
          {t(link.label)}
          {!isMobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          )}
        </button>
      );
    }
    
    return (
      <Link
        key={link.href}
        to={link.href}
        onClick={() => setIsOpen(false)}
        className={cn(
          "transition-all duration-300 font-medium",
          isMobile 
            ? "text-white text-lg py-3 px-4 rounded-lg hover:bg-white/10 w-full text-center block" 
            : "text-white hover:text-white/80 relative group"
        )}
      >
        {t(link.label)}
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
        )}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-gray-900/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Logo / Personal Photo - Responsive sizing */}
        <motion.div initial="hidden" animate="visible" variants={logoVariants}>
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="/ProfileInstagram.jpg" 
              alt={t('navbar.logoAlt')} 
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-brand-new-blue transition-all duration-300" 
            />
            <span className="text-xl sm:text-2xl font-bold text-white">يوسف</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation - Improved spacing and responsiveness */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => renderNavLink(link))}
        </nav>

        {/* CTA Button - Responsive sizing */}
        <div className="hidden lg:flex items-center">
          <Button 
            asChild 
            className="bg-gradient-to-r from-[#1A202C] to-[#293039] text-white font-bold rounded-lg px-4 xl:px-5 py-2 hover:bg-gradient-to-r hover:from-[#17232E] hover:to-[#2F435E] transition-all duration-300 text-sm xl:text-base"
          >
            <button onClick={() => handleNavClick('/#contact')}>
              {t("navbar.bookConsultation")}
            </button>
          </Button>
        </div>

        {/* Mobile Menu Button - Enhanced styling */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-md absolute top-full left-0 right-0 overflow-hidden border-t border-white/10"
          >
            <nav className="flex flex-col p-6 space-y-2">
              {/* Navigation Links */}
              <div className="space-y-2 mb-6">
                {navLinks.map(link => renderNavLink(link, true))}
              </div>
              
              {/* Mobile CTA Button */}
              <Button
                asChild
                className="bg-gradient-to-r from-[#1A202C] to-[#293039] text-white font-bold rounded-lg px-6 py-3 w-full hover:bg-gradient-to-r hover:from-[#17232E] hover:to-[#2F435E] transition-all duration-300"
              >
                <button onClick={() => handleNavClick('/#contact')}>
                  {t("navbar.bookConsultation")}
                </button>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

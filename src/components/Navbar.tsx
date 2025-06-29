import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
    { href: "/#about", label: "navbar.about" },
    { href: "/blog", label: "navbar.blog" },
  ];

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-black/80 backdrop-blur-sm shadow-lg py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div initial="hidden" animate="visible" variants={logoVariants}>
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-nav.png" alt="Lina Prime Solutions" className="h-10 w-auto mix-blend-screen brightness-200" />
          </a>
        </motion.div>

                  <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isScrollLink = link.href.startsWith("/#") || link.href === "/";
            if (isScrollLink) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-white/80 hover:text-white transition-colors relative group cursor-pointer"
                >
                  {t(link.label)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            }
            return (
              <Link
                key={link.href}
                to={link.href}
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                {t(link.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-brand-gradient animate-gradient-shift shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
            {t("navbar.bookConsultation")}
          </Button>
          <LanguageSwitcher />
        </div>

        <button
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-around">
            <span className={cn("block w-full h-0.5 bg-white transition-transform duration-300", isOpen && "rotate-45 translate-y-2")} />
            <span className={cn("block w-full h-0.5 bg-white transition-opacity duration-300", isOpen && "opacity-0")} />
            <span className={cn("block w-full h-0.5 bg-white transition-transform duration-300", isOpen && "-rotate-45 -translate-y-2")} />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg md:hidden"
            >
                            <nav className="flex flex-col items-center gap-6 p-4">
                {navLinks.map((link) => {
                  const isScrollLink = link.href.startsWith("/#") || link.href === "/";
                  if (isScrollLink) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors py-2 text-lg"
                        onClick={(e) => handleLinkClick(e, link.href)}
                      >
                        {t(link.label)}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors py-2 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {t(link.label)}
                    </Link>
                  );
                })}
              </nav>
              <Button className="bg-brand-gradient animate-gradient-shift shadow-md shadow-purple-500/20 w-full mt-4 py-6 text-lg">
                {t("navbar.bookConsultation")}
              </Button>
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

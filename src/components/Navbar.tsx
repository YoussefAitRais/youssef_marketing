
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/10 py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <a href="/" className="flex items-center gap-3">
            <img src="/logo-nav.png" alt="Lina Prime Solutions" className="h-10 w-auto mix-blend-screen brightness-200" />
            <span className="text-2xl font-bold font-montserrat hidden sm:inline-block">
              <span className="gradient-text">Lina Prime </span> Solutions
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.a 
            href="/#services" 
            className="text-white/80 hover:text-white transition-colors relative group"
            variants={itemVariants}
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="/#process" 
            className="text-white/80 hover:text-white transition-colors relative group"
            variants={itemVariants}
          >
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="/#about" 
            className="text-white/80 hover:text-white transition-colors relative group"
            variants={itemVariants}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="bg-brand-gradient animate-gradient-shift shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
              onClick={() => {
                const bookCallSection = document.getElementById("book-call");
                if (bookCallSection) {
                  bookCallSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Free Strategy Call
            </Button>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <motion.span
              className="absolute top-2 left-0 w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute top-4 left-0 w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute top-6 left-0 w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden"
            >
              <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full max-w-sm mx-auto mb-8"
                >
                  <img 
                    src="/logo-nav.png" 
                    alt="Lina Prime Solutions" 
                    className="h-12 w-auto mx-auto mix-blend-screen brightness-200" 
                  />
                </motion.div>
                
                <motion.a 
                  href="/#services" 
                  className="text-2xl font-medium text-white/90 hover:text-white transition-colors relative group"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300" />
                </motion.a>
                <motion.a 
                  href="/#process" 
                  className="text-2xl font-medium text-white/90 hover:text-white transition-colors relative group"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Process
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300" />
                </motion.a>
                <motion.a 
                  href="/#about" 
                  className="text-2xl font-medium text-white/90 hover:text-white transition-colors relative group"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300" />
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Button 
                    className="bg-brand-gradient animate-gradient-shift px-8 py-6 text-lg shadow-lg shadow-purple-500/20"
                    onClick={() => {
                      setIsOpen(false);
                      const bookCallSection = document.getElementById("book-call");
                      if (bookCallSection) {
                        bookCallSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Book Free Strategy Call
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

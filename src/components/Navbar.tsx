
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
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-montserrat">
              <span className="gradient-text">Lina</span>Prime
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.a 
            href="#services" 
            className="text-white/80 hover:text-white transition-colors relative group"
            variants={itemVariants}
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="#process" 
            className="text-white/80 hover:text-white transition-colors relative group"
            variants={itemVariants}
          >
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="#about" 
            className="text-white/80 hover:text-white transition-colors relative group"
            variants={itemVariants}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.a 
            href="#resources" 
            className="text-white/80 hover:text-white transition-colors relative group"
            variants={itemVariants}
          >
            Resources
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
          </motion.a>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="bg-brand-gradient animate-gradient-shift shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300">
              Book Free Strategy Call
            </Button>
          </motion.div>
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <motion.button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 top-16 bg-black/95 z-50 flex flex-col items-center justify-start pt-10 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center space-y-6">
                <motion.a 
                  href="#services" 
                  className="text-xl text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.a>
                <motion.a 
                  href="#process" 
                  className="text-xl text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Process
                </motion.a>
                <motion.a 
                  href="#about" 
                  className="text-xl text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#resources" 
                  className="text-xl text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resources
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4"
                >
                  <Button 
                    className="bg-brand-gradient animate-gradient-shift"
                    onClick={() => setIsOpen(false)}
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

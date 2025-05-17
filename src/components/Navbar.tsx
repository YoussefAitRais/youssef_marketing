
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold font-montserrat">
            <span className="gradient-text">Lina</span>Prime
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
          <a href="#process" className="text-white/80 hover:text-white transition-colors">Process</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#resources" className="text-white/80 hover:text-white transition-colors">Resources</a>
          <Button className="bg-brand-gradient animate-gradient-shift">Book Free Strategy Call</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="fixed inset-0 top-16 bg-black/95 z-50 flex flex-col items-center justify-start pt-10 md:hidden">
            <nav className="flex flex-col items-center space-y-6">
              <a 
                href="#services" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#process" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Process
              </a>
              <a 
                href="#about" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#resources" 
                className="text-xl text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </a>
              <Button 
                className="mt-4 bg-brand-gradient animate-gradient-shift"
                onClick={() => setIsOpen(false)}
              >
                Book Free Strategy Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

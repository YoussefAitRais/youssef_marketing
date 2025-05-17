
import React from "react";
import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-montserrat">
                <span className="gradient-text">Lina</span>Prime
              </span>
            </Link>
            <p className="text-white/70 mb-6">
              Engineer smarter systems today, unlock unstoppable growth tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-300">
                <Mail className="w-5 h-5" />
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
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Services</a></li>
              <li><a href="#process" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Process</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Resources</a></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Web Development</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">AI Automations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">Growth Consulting</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors hover:translate-x-1 inline-block transform duration-300">SaaS Incubation</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Subscribe to Our Newsletter</h4>
            <p className="text-white/70 mb-4">Get the latest tips on tech, growth, and automation.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white focus:ring-brand-purple focus:border-brand-purple transition-all duration-300"
              />
              <Button className="bg-brand-gradient animate-gradient-shift hover:scale-105 transition-transform duration-300">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lina Prime Solutions LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

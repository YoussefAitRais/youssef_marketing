
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowConsent(false);
    toast({
      title: "Cookies Accepted",
      description: "Thank you for accepting cookies.",
    });
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesDeclined", "true");
    setShowConsent(false);
    toast({
      title: "Cookies Declined",
      description: "You have declined cookies. Some features may be limited.",
    });
  };

  if (!showConsent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 border-t border-gray-700 backdrop-blur-sm"
    >
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">We use cookies</h3>
            <p className="text-white/80 text-sm md:text-base">
              This website uses cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. By clicking "Accept", you consent to our use of cookies. 
              <Link to="/cookies-policy" className="text-blue-400 hover:underline ml-1">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={declineCookies}
              className="border-gray-600 text-white"
            >
              Decline
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={acceptCookies}
              className="bg-gradient-to-r from-[#FF2F92] to-[#1AD7FF] hover:opacity-90 text-white"
            >
              Accept
            </Button>
          </div>
        </div>
        
        <button 
          onClick={() => setShowConsent(false)} 
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          aria-label="Close cookie consent"
        >
          <X size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default CookieConsent;

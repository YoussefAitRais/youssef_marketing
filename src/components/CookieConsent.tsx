import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
  const { t } = useTranslation();
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
      title: t("cookies.accepted.title"),
      description: t("cookies.accepted.desc"),
    });
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesDeclined", "true");
    setShowConsent(false);
    toast({
      title: t("cookies.declined.title"),
      description: t("cookies.declined.desc"),
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
            <h3 className="text-xl font-semibold mb-2">{t("cookies.banner.title")}</h3>
            <p className="text-white/80 text-sm md:text-base">
              {t("cookies.banner.desc")} 
              <Link to="/cookies-policy" className="text-blue-400 hover:underline ml-1">
                {t("cookies.banner.learn")}
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
              {t("cookies.banner.decline")}
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              onClick={acceptCookies}
              className="bg-gradient-to-r from-[#FF2F92] to-[#1AD7FF] hover:opacity-90 text-white"
            >
              {t("cookies.banner.accept")}
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

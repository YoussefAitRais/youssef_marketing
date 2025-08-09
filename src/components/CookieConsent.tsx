import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functionality: false,
  });
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

  useEffect(() => {
    // Load saved preferences if they exist
    const savedPrefs = localStorage.getItem("cookiePreferences");
    if (savedPrefs) {
      setCookiePreferences(JSON.parse(savedPrefs));
    }
  }, []);

  const savePreferences = (prefs = cookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    localStorage.setItem("cookiesAccepted", "true");
    localStorage.removeItem("cookiesDeclined");
    
    // Delete cookies if user revokes consent
    if (!prefs.analytics) deleteAnalyticsCookies();
    if (!prefs.marketing) deleteMarketingCookies();
    if (!prefs.functionality) deleteFunctionalityCookies();
    
    setShowConsent(false);
    setShowSettings(false);
    
    toast({
      title: t("cookies.preferences.updated"),
      description: t("cookies.preferences.updatedDesc"),
    });
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functionality: true,
    };
    setCookiePreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const rejectAllCookies = () => {
    const allRejected = {
      necessary: true, // Necessary cookies cannot be rejected
      analytics: false,
      marketing: false,
      functionality: false,
    };
    setCookiePreferences(allRejected);
    savePreferences(allRejected);
  };

  const deleteAllCookies = () => {
    // Delete all cookies
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=.' + window.location.host;
    }
    
    // Clear local storage except for language preference
    const lang = localStorage.getItem("i18nextLng");
    localStorage.clear();
    if (lang) {
      localStorage.setItem("i18nextLng", lang);
    }
    
    // Reset preferences
    const resetPrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
      functionality: false,
    };
    
    setCookiePreferences(resetPrefs);
    localStorage.setItem("cookiePreferences", JSON.stringify(resetPrefs));
    
    toast({
      title: t("cookies.deleted.title"),
      description: t("cookies.deleted.desc"),
    });
  };
  
  const deleteAnalyticsCookies = () => {
    // Example: Delete Google Analytics cookies
    const analyticsCookies = [
      '_ga', '_gid', '_gat', '_gac_', 'AMP_TOKEN', '_gac_gb_', '_ga_',
      '__utma', '__utmb', '__utmc', '__utmz', '__utmv', '__utmt'
    ];
    deleteCookies(analyticsCookies);
  };
  
  const deleteMarketingCookies = () => {
    // Example: Delete common marketing cookies
    const marketingCookies = [
      '_fbp', 'fr', 'tr', '_pin_unauth', '_pinterest_ct_rt',
      'personalization_id', 'muc_ads', 'muc_ai', 'muc_oa'
    ];
    deleteCookies(marketingCookies);
  };
  
  const deleteFunctionalityCookies = () => {
    // Example: Delete functionality cookies
    const functionalityCookies = [
      'wordpress_logged_in_', 'wp-settings-', 'wp-postpass_',
      'comment_author_', 'comment_author_email_', 'comment_author_url_'
    ];
    deleteCookies(functionalityCookies);
  };
  
  const deleteCookies = (cookies: string[]) => {
    const hostname = window.location.hostname;
    const hostParts = hostname.split('.');
    const domainParts = [];
    
    // Get all possible domain levels
    for (let i = 0; i < hostParts.length - 1; i++) {
      domainParts.push(hostParts.slice(i).join('.'));
    }
    
    // Delete cookies for all domain levels and paths
    cookies.forEach(cookie => {
      document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      
      // Delete for all domain levels
      domainParts.forEach(domain => {
        document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
      });
    });
  };

  // Don't show if user has already made a choice and we're not showing settings
  const hasMadeChoice = localStorage.getItem("cookiesAccepted") || localStorage.getItem("cookiesDeclined");
  if (!showConsent && !showSettings) return null;

  return (
    <AnimatePresence>
      {(showConsent || showSettings) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 border-t border-gray-700 backdrop-blur-sm"
        >
          <div className="container mx-auto p-4 md:p-6">
            {showSettings ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">{t("cookies.settings.title")}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{t("cookies.settings.necessary")}</h4>
                      <p className="text-sm text-gray-400">{t("cookies.settings.necessaryDesc")}</p>
                    </div>
                    <Switch
                      id="necessary"
                      checked={true}
                      disabled
                      className="opacity-50 cursor-not-allowed"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{t("cookies.settings.analytics")}</h4>
                      <p className="text-sm text-gray-400">{t("cookies.settings.analyticsDesc")}</p>
                    </div>
                    <Switch
                      id="analytics"
                      checked={cookiePreferences.analytics}
                      onCheckedChange={(checked) => 
                        setCookiePreferences({...cookiePreferences, analytics: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{t("cookies.settings.marketing")}</h4>
                      <p className="text-sm text-gray-400">{t("cookies.settings.marketingDesc")}</p>
                    </div>
                    <Switch
                      id="marketing"
                      checked={cookiePreferences.marketing}
                      onCheckedChange={(checked) => 
                        setCookiePreferences({...cookiePreferences, marketing: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{t("cookies.settings.functionality")}</h4>
                      <p className="text-sm text-gray-400">{t("cookies.settings.functionalityDesc")}</p>
                    </div>
                    <Switch
                      id="functionality"
                      checked={cookiePreferences.functionality}
                      onCheckedChange={(checked) => 
                        setCookiePreferences({...cookiePreferences, functionality: checked})
                      }
                    />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
                  <div className="space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        if (showConsent) {
                          setShowConsent(false);
                        } else {
                          setShowSettings(false);
                        }
                      }}
                      className="text-white border-gray-600"
                    >
                      {t("common.cancel")}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={deleteAllCookies}
                      className="text-red-400 border-red-900/50 hover:bg-red-900/20 hover:text-red-300"
                    >
                      {t("cookies.buttons.deleteAll")}
                    </Button>
                  </div>
                  <Button 
                    variant="default" 
                    size="sm" 
                    onClick={() => savePreferences()}
                    className="bg-brand-new-blue hover:opacity-90 text-white rounded-lg"
                  >
                    {t("cookies.buttons.savePreferences")}
                  </Button>
                </div>
              </div>
            ) : (
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
                    onClick={rejectAllCookies}
                    className="border-gray-600 text-white"
                  >
                    {t("cookies.buttons.rejectAll")}
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm" 
                    onClick={acceptAllCookies}
                    className="bg-brand-new-blue hover:opacity-90 text-white rounded-lg"
                  >
                    {t("cookies.buttons.acceptAll")}
                  </Button>
                </div>
              </div>
            )}
            
            <div className="absolute top-3 right-3 flex items-center gap-2">
              {!showSettings && (
                <button 
                  onClick={() => {
                    setShowSettings(true);
                    setShowConsent(false);
                  }}
                  className="text-gray-400 hover:text-white p-1"
                  aria-label={t("cookies.buttons.settings")}
                  title={t("cookies.buttons.settings")}
                >
                  <Settings size={18} />
                </button>
              )}
              <button 
                onClick={() => {
                  setShowConsent(false);
                  setShowSettings(false);
                }} 
                className="text-gray-400 hover:text-white p-1"
                aria-label={t("common.close")}
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

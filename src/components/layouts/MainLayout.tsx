import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "../CookieConsent";
import ScrollToHashElement from "../ScrollToHashElement";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#232325] to-[#230c33]">
        <Toaster />
        <Sonner />
        <CookieConsent />
        <Navbar />
        <ScrollToHashElement />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default MainLayout;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import AiAutomation from "./pages/services/AiAutomation";
import GrowthConsulting from "./pages/services/GrowthConsulting";
import Articles from "./pages/Articles";
import ContentWriting from './pages/services/ContentWriting';
import MarketingSystem from './pages/services/MarketingSystem';
import WebDesign from './pages/services/WebDesign';
import BookCall from "./pages/services/BookCall";
import CookieConsent from "./components/CookieConsent";
import ScrollToHashElement from "./components/ScrollToHashElement";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHashElement />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* Service pages */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ai-automation" element={<AiAutomation />} />
            <Route path="/services/growth-consulting" element={<GrowthConsulting />} />
            <Route path="/blog" element={<Articles />} />
            <Route path="/services/content-writing" element={<ContentWriting />} />
            <Route path="/services/marketing-funnels" element={<MarketingSystem />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/book-call" element={<BookCall />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

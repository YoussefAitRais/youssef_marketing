
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Terms of Service | Lina Prime Solutions LLC</title>
        <meta name="description" content="Terms of service for Lina Prime Solutions LLC." />
      </Helmet>
      
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Terms of Service</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80">Last Updated: May 17, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-white/80">
                These Terms of Service constitute a legally binding agreement made between you and Lina Prime Solutions LLC ("we," "our," or "us"), concerning your access to and use of our website and services. You agree that by accessing our website and/or using our services, you have read, understood, and agreed to be bound by all of these Terms of Service.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property Rights</h2>
              <p className="text-white/80">
                Unless otherwise indicated, the website and its content, features, and functionality are owned by Lina Prime Solutions LLC and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. User Representations</h2>
              <p className="text-white/80">
                By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>You have the legal capacity to accept these Terms of Service</li>
                <li>You are at least 18 years of age</li>
                <li>You will not access the website through automated or non-human means</li>
                <li>You will not use the website for any illegal or unauthorized purpose</li>
                <li>Your use of the website will not violate any applicable law or regulation</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Services</h2>
              <p className="text-white/80">
                Lina Prime Solutions LLC provides various services including web development, AI automations, and growth consulting. All services are subject to these Terms of Service and any additional agreements specific to those services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Fees and Payment</h2>
              <p className="text-white/80">
                You agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. All payments are non-refundable unless explicitly stated otherwise in a separate service agreement.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-white/80">
                In no event will Lina Prime Solutions LLC, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website or services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
              <p className="text-white/80">
                These Terms shall be governed and construed in accordance with the laws of [Your State], United States, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to Terms</h2>
              <p className="text-white/80">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-white/80">
                Lina Prime Solutions LLC<br />
                Email: terms@linaprime.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;

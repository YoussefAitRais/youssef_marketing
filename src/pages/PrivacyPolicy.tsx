
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | Lina Prime Solutions LLC</title>
        <meta name="description" content="Privacy policy for Lina Prime Solutions LLC." />
      </Helmet>
      
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Privacy Policy</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80">Last Updated: May 17, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-white/80">
                At Lina Prime Solutions LLC ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. The Data We Collect About You</h2>
              <p className="text-white/80">
                We may collect, use, store, and transfer different kinds of personal data about you, including:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>Identity Data: first name, last name, company name</li>
                <li>Contact Data: email address, telephone number, business address</li>
                <li>Technical Data: IP address, browser type and version, time zone setting and location</li>
                <li>Usage Data: information about how you use our website and services</li>
                <li>Marketing and Communications Data: your preferences in receiving marketing from us</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Personal Data</h2>
              <p className="text-white/80">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>To provide you with the information or services you have requested from us</li>
                <li>To perform the contract we are about to enter into or have entered into with you</li>
                <li>Where it is necessary for our legitimate interests and your interests do not override those interests</li>
                <li>Where we need to comply with a legal or regulatory obligation</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
              <p className="text-white/80">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Retention</h2>
              <p className="text-white/80">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Legal Rights</h2>
              <p className="text-white/80">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="text-white/80">
                Lina Prime Solutions LLC<br />
                Email: privacy@linaprime.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;


import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Cookies Policy | Lina Prime Solutions LLC</title>
        <meta name="description" content="Cookies policy for Lina Prime Solutions LLC." />
      </Helmet>
      
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Cookies Policy</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80">Last Updated: May 17, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies</h2>
              <p className="text-white/80">
                Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and more useful to you.
              </p>
              <p className="text-white/80">
                Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. How Lina Prime Solutions LLC Uses Cookies</h2>
              <p className="text-white/80">
                When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>Essential cookies: To enable core functionality such as security, network management, and accessibility.</li>
                <li>Analytics cookies: To help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li>Marketing cookies: To enable us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
                <li>Functionality cookies: To recognize you when you return to our website.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Third-Party Cookies</h2>
              <p className="text-white/80">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. What Are Your Choices Regarding Cookies</h2>
              <p className="text-white/80">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
              </p>
              <p className="text-white/80">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Where Can You Find More Information About Cookies</h2>
              <p className="text-white/80">
                You can learn more about cookies and the following third-party websites:
              </p>
              <ul className="list-disc pl-6 text-white/80 mb-6">
                <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org/</a></li>
                <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/</a></li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about our Cookies Policy, please contact us at:
              </p>
              <p className="text-white/80">
                Lina Prime Solutions LLC<br />
                Email: cookies@linaprimesolutions.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CookiesPolicy;

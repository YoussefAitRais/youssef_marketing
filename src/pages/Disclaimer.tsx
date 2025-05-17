
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
      <Helmet>
        <title>Disclaimer | Lina Prime Solutions LLC</title>
        <meta name="description" content="Disclaimer for Lina Prime Solutions LLC." />
      </Helmet>
      
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Disclaimer</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80">Last Updated: May 17, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Website Disclaimer</h2>
              <p className="text-white/80">
                The information provided by Lina Prime Solutions LLC on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on our website.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Professional Disclaimer</h2>
              <p className="text-white/80">
                Our website cannot and does not contain professional advice. The professional advice information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Testimonials Disclaimer</h2>
              <p className="text-white/80">
                The testimonials displayed on our website are actual testimonials from our clients. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products/services. We do not claim, and you should not assume, that all users will have the same experiences.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. External Links Disclaimer</h2>
              <p className="text-white/80">
                Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Lina Prime Solutions LLC. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Errors And Omissions Disclaimer</h2>
              <p className="text-white/80">
                The information given by Lina Prime Solutions LLC is for general guidance on matters of interest only. Even if we take every precaution to ensure that the content of this website is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on this website.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Fair Use Disclaimer</h2>
              <p className="text-white/80">
                This website may use copyrighted material which has not always been specifically authorized by the copyright owner. We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research in accordance with the fair use doctrine.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <p className="text-white/80">
                Lina Prime Solutions LLC<br />
                Email: disclaimer@linaprime.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;

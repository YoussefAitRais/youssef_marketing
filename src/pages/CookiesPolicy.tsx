
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Helmet } from "react-helmet-async";

// const CookiesPolicy = () => {
//   const { t } = useTranslation();
//   return (
//     <div className="min-h-screen bg-brand-black text-white overflow-x-hidden">
//       <Helmet>
//         <title>{`${t('policies.cookies.title')} | يوسف للتسويق`}</title>
//         <meta name="description" content={t('policies.cookies.meta')} />
//       </Helmet>
      
//       <Navbar />
      
//       <section className="py-24 pt-32">
//         <div className="container mx-auto px-4 md:px-6">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">{t('policies.cookies.title')}</h1>
            
//             <div className="prose prose-lg prose-invert max-w-none">
//               <p className="text-white/80">{t('policies.cookies.updated')}</p>
              
//               <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.cookies.sections.1.heading')}</h2>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.1.p1')}
//               </p>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.1.p2')}
//               </p>
              
//               <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.cookies.sections.2.heading')}</h2>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.2.intro')}
//               </p>
//               <ul className="list-disc pl-6 text-white/80 mb-6">
//                 <li>{t('policies.cookies.sections.2.list.essential')}</li>
//                 <li>{t('policies.cookies.sections.2.list.analytics')}</li>
//                 <li>{t('policies.cookies.sections.2.list.marketing')}</li>
//                 <li>{t('policies.cookies.sections.2.list.functionality')}</li>
//               </ul>
              
//               <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.cookies.sections.3.heading')}</h2>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.3.p')}
//               </p>
              
//               <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.cookies.sections.4.heading')}</h2>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.4.p1')}
//               </p>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.4.p2')}
//               </p>
              
//               <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.cookies.sections.5.heading')}</h2>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.5.p')}
//               </p>
//               <ul className="list-disc pl-6 text-white/80 mb-6">
//                 <li>{t('policies.cookies.sections.5.links.allabout')}: <a href="http://www.allaboutcookies.org/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org/</a></li>
//                 <li>{t('policies.cookies.sections.5.links.nai')}: <a href="http://www.networkadvertising.org/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/</a></li>
//               </ul>
              
//               <h2 className="text-2xl font-bold mt-8 mb-4">{t('policies.cookies.sections.6.heading')}</h2>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.6.intro')}
//               </p>
//               <p className="text-white/80">
//                 {t('policies.cookies.sections.6.address')}<br />
//                 {t('policies.cookies.sections.6.email')}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
      
//       <Footer />
//     </div>
//   );
// };

// export default CookiesPolicy;


import React from "react";
import { motion } from "framer-motion";
import { Award, Users, CheckCircle } from "lucide-react";

const stats = [
  { value: "50+", label: "Completed Projects", icon: <CheckCircle className="w-5 h-5" />, color: "from-pink-500 to-brand-pink" },
  { value: "96%", label: "Client Retention", icon: <Users className="w-5 h-5" />, color: "from-purple-500 to-brand-purple" },
  { value: "8", label: "Industry Awards", icon: <Award className="w-5 h-5" />, color: "from-blue-500 to-brand-blue" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="rgba(174, 59, 255, 0.2)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-blue/5"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.span 
              className="absolute -top-8 -left-4 text-6xl md:text-7xl opacity-5 font-black text-white select-none tracking-widest"
              animate={{ opacity: [0.03, 0.05, 0.03] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ABOUT US
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              About <span className="gradient-text">Lina Prime</span>
            </h2>
            
            <div className="h-1 w-20 bg-brand-gradient rounded-full mb-6"></div>
            
            <motion.p 
              className="text-white/80 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lina Prime was founded with a vision to help ambitious businesses scale through
              technology. Our name is inspired by the young palm tree (Lina), symbolizing growth,
              resilience and reaching new heights.
            </motion.p>
            
            <motion.p 
              className="text-white/80 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our team combines deep technical expertise with business acumen, creating solutions
              that not only solve today's challenges but set you up for tomorrow's opportunities.
            </motion.p>
            
            <motion.p 
              className="text-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We pride ourselves on being more than service providers—we're growth partners
              committed to your long-term success.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="glass-effect p-6 rounded-lg text-center relative overflow-hidden group"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(174, 59, 255, 0.3)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-xl`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                  
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <motion.div 
                className="h-48 glass-effect rounded-lg overflow-hidden relative group"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(174, 59, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold gradient-text mb-1">Global Reach</p>
                    <p className="text-sm text-white/70">Serving Clients Worldwide</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="h-72 glass-effect rounded-lg overflow-hidden relative group"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(174, 59, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold gradient-text mb-1">24/7 Support</p>
                    <p className="text-sm text-white/70">Always Here for You</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-6 mt-10">
              <motion.div 
                className="h-72 glass-effect rounded-lg overflow-hidden relative group"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(174, 59, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold gradient-text mb-1">Scalable Solutions</p>
                    <p className="text-sm text-white/70">Built for Growth</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="h-48 glass-effect rounded-lg overflow-hidden relative group mt-6"
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(174, 59, 255, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold gradient-text mb-1">Performance First</p>
                    <p className="text-sm text-white/70">Optimized Solutions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

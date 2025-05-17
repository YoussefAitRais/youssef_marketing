
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Completed Projects" },
  { value: "96%", label: "Client Retention" },
  { value: "8", label: "Industry Awards" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Lina Prime</span>
            </h2>
            <p className="text-white/80 mb-6">
              Lina Prime was founded with a vision to help ambitious businesses scale through
              technology. Our name is inspired by the young palm tree (Lina), symbolizing growth,
              resilience and reaching new heights.
            </p>
            <p className="text-white/80 mb-6">
              Our team combines deep technical expertise with business acumen, creating solutions
              that not only solve today's challenges but set you up for tomorrow's opportunities.
            </p>
            <p className="text-white/80">
              We pride ourselves on being more than service providers—we're growth partners
              committed to your long-term success.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-48 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                <p className="text-sm text-center text-white/50">Team Member Photo</p>
              </div>
              <div className="h-72 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                <p className="text-sm text-center text-white/50">Team Member Photo</p>
              </div>
            </div>
            <div className="space-y-4 mt-10">
              <div className="h-72 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                <p className="text-sm text-center text-white/50">Team Member Photo</p>
              </div>
              <div className="h-48 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                <p className="text-sm text-center text-white/50">Team Member Photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

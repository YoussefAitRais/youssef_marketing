
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const processSteps = [
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Discover",
    description: "We analyze your business needs, goals, and audience to create a tailored strategy.",
    delay: 0.1
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Design",
    description: "We create wireframes, prototypes, and technical specifications for your approval.",
    delay: 0.3
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Deploy",
    description: "We develop, test, and launch your solution with rigorous quality assurance.",
    delay: 0.5
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Scale",
    description: "We optimize, refine, and expand your solution based on real-world data and feedback.",
    delay: 0.7
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our streamlined four-step process ensures efficient delivery of solutions that 
            match your business goals and exceed expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-brand-pink via-brand-purple to-brand-blue transform -translate-x-1/2"></div>
          
          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-0 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className={`md:grid md:grid-cols-2 relative ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <div
                  className={`hidden md:block absolute top-0 left-1/2 w-8 h-8 rounded-full bg-brand-gradient transform -translate-x-1/2 z-10`}
                ></div>
                
                <div
                  className={`md:pr-12 ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  } mb-8 md:mb-24`}
                >
                  <div className="flex items-center mb-4 md:justify-start">
                    <div className="md:hidden mr-4 w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

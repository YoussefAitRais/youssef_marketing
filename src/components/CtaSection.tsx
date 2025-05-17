
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="gradient-text">automate your growth?</span> Let's talk.
              </h2>
              <p className="text-white/70 text-lg">
                Schedule your free strategy call today and discover how we can help you scale your business with custom solutions.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-gradient animate-gradient-shift flex items-center gap-2 py-6 text-base">
                <Mail className="w-5 h-5" />
                Book Free Strategy Call
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 py-6 text-base">
                View Our Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,47,146,0.15),transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default CtaSection;

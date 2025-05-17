
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Video, CheckCircle2 } from "lucide-react";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const BookCall = () => {
  const benefits = [
    {
      title: "Expert Consultation",
      description: "Get personalized insights and strategies from our experienced team of professionals.",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: "Flexible Scheduling",
      description: "Choose a time that works best for you with our easy online booking system.",
      icon: <Calendar className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: "Virtual Meeting",
      description: "Connect with us from anywhere in the world via high-quality video conferencing.",
      icon: <Video className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    },
    {
      title: "Action Plan",
      description: "Receive a clear, actionable roadmap tailored to your business goals and challenges.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    }
  ];

  return (
    <ServiceLayout
      title="Book a Free Strategy Call"
      description="Schedule your free strategy call with our experts and discover how we can help you grow your business with custom solutions."
    >
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Schedule Your <span className="gradient-text">Free Strategy Call</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Our team is ready to help you solve your business challenges and explore opportunities for growth. Book a no-obligation consultation today.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Book a <span className="gradient-text">Strategy Call</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover how our expert consultation can help transform your business and accelerate growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={cn(
                  "bg-white/5 border-white/10 p-8 h-full overflow-hidden relative",
                  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                  "backdrop-blur-lg"
                )}>
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
                    "group-hover:scale-110 transition-transform duration-300",
                    benefit.gradient
                  )}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{benefit.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{benefit.description}</p>
                  
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute -right-32 -bottom-32 w-64 h-64 rounded-full opacity-0 blur-3xl transition-all duration-500",
                    "bg-gradient-to-br",
                    benefit.gradient,
                    "group-hover:opacity-10"
                  )} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Mini Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what others are saying about their strategy calls with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The strategy call was eye-opening. I got more value in 30 minutes than I've received from months of working with other consultants.",
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc."
              },
              {
                quote: "Within minutes, they identified critical issues in our workflow that were costing us thousands. Their solution was simple yet effective.",
                name: "Michael Rodriguez",
                role: "Operations Director, GrowthHub"
              },
              {
                quote: "What impressed me most was how prepared they were for our call. They had researched our business and had actionable suggestions ready.",
                name: "Emma Chen",
                role: "Founder, EcoConnect"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={cn(
                  "bg-white/5 border-white/10 p-8 h-full relative overflow-hidden",
                  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                  "backdrop-blur-lg"
                )}>
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 mr-1 group-hover:scale-110 transition-transform inline-block">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="italic text-white/80 mb-6 group-hover:text-white/90 transition-colors">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold group-hover:text-white transition-colors">{testimonial.name}</p>
                    <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{testimonial.role}</p>
                  </div>
                  
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute -right-32 -bottom-32 w-64 h-64 rounded-full opacity-0 blur-3xl transition-all duration-500",
                    "bg-gradient-to-br from-brand-purple to-brand-pink",
                    "group-hover:opacity-10"
                  )} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </ServiceLayout>
  );
};

export default BookCall;

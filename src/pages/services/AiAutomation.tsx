
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Bot, Workflow, ArrowRight, Brain, MessageSquare, FileSearch } from "lucide-react";
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AiAutomation = () => {
  const technologies = [
    "OpenAI", "GPT-4", "n8n", "Zapier", "Langchain", 
    "Python", "Machine Learning", "Data Processing", "NLP", "Computer Vision"
  ];
  
  const serviceFeatures = [
    {
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational interfaces that can handle customer inquiries, support requests, and more.",
      icon: <Bot className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and business processes to improve efficiency and reduce errors.",
      icon: <Workflow className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: "Data Analysis & Insights",
      description: "Extract valuable insights from your data using machine learning and advanced analytics.",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    },
    {
      title: "Natural Language Processing",
      description: "Process and understand human language for sentiment analysis, text classification, and more.",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-brand-pink to-brand-purple"
    },
    {
      title: "Machine Learning Models",
      description: "Custom ML models for prediction, recommendation, and pattern recognition.",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-brand-purple to-brand-blue"
    },
    {
      title: "Document Intelligence",
      description: "Automated document processing and data extraction using AI and OCR technology.",
      icon: <FileSearch className="w-6 h-6" />,
      gradient: "from-brand-blue to-brand-pink"
    }
  ];

  return (
    <ServiceLayout
      title="AI & Workflow Automations"
      description="Leverage AI to streamline operations and boost productivity. From OpenAI-powered chatbots to n8n workflow pipelines that save time and reduce errors."
    >
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI & Workflow <span className="gradient-text">Automations</span>
              </h1>
              <p className="text-xl text-white/70 mb-8">
                Leverage AI to streamline operations and boost productivity. Workflow automations that save time and reduce errors.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button className="bg-brand-gradient animate-gradient-shift py-6 px-8 text-lg">
                Get Started
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800" 
                  alt="AI Automation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Time saved</p>
                <p className="text-3xl font-bold gradient-text">40+ hours</p>
                <p className="text-white/70 text-sm">per week on average</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We build AI-powered solutions and automation workflows that help businesses operate more efficiently.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
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
                    feature.gradient
                  )}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{feature.description}</p>
                  
                  {/* Background gradient */}
                  <div className={cn(
                    "absolute -right-32 -bottom-32 w-64 h-64 rounded-full opacity-0 blur-3xl transition-all duration-500",
                    "bg-gradient-to-br",
                    feature.gradient,
                    "group-hover:opacity-10"
                  )} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover how our AI and automation solutions can transform different aspects of your business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Support Automation",
                description: "AI-powered chatbots that can handle common customer inquiries, route complex issues to human agents, and provide 24/7 support."
              },
              {
                title: "Document Processing",
                description: "Automatically extract data from invoices, receipts, and other documents, reducing manual data entry and errors."
              },
              {
                title: "Sales & Marketing Automation",
                description: "Automate lead qualification, follow-ups, and personalized marketing campaigns based on customer behavior."
              },
              {
                title: "Internal Process Automation",
                description: "Streamline approval workflows, data synchronization between systems, and repetitive administrative tasks."
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={cn(
                  "bg-white/5 border-white/10 p-8 h-full overflow-hidden relative",
                  "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
                  "backdrop-blur-lg"
                )}>
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{useCase.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{useCase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 shadow-lg shadow-purple-900/10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">automate your business?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help you leverage AI and automation to increase efficiency and productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-brand-gradient animate-gradient-shift py-6 px-8 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 py-6 px-8 text-lg">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      

    </ServiceLayout>
  );
};

export default AiAutomation;

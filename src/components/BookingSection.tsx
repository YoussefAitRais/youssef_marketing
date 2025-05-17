
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request submitted!",
      description: "We'll contact you shortly to schedule your free strategy call.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-20 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your <span className="gradient-text">Free Strategy Call</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Let's discuss how our expertise can help your business grow. Fill out the form below and we'll schedule a call to explore your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold mb-6">Schedule Your Call</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe" 
                  className="bg-white/10 border-white/20 mt-2" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com" 
                  className="bg-white/10 border-white/20 mt-2" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 123-4567" 
                  className="bg-white/10 border-white/20 mt-2" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="message">How can we help? (Optional)</Label>
                <textarea 
                  id="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project or challenges..." 
                  className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 mt-2 min-h-[100px] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-brand-gradient animate-gradient-shift w-full py-6 shadow-lg shadow-purple-900/20" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Schedule My Free Call"}
              </Button>
            </form>
          </motion.div>
          
          {/* Info section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3">What to Expect</h3>
              <p className="text-white/70 mb-6">
                During our 30-minute strategy call, we'll:
              </p>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start">
                  <div className="mr-4 p-2 bg-white/5 rounded-md">
                    <Calendar className="w-5 h-5 text-brand-pink" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Understand your goals</span>
                    <p className="mt-1">We'll discuss your business objectives and challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 p-2 bg-white/5 rounded-md">
                    <Mail className="w-5 h-5 text-brand-purple" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Share insights</span>
                    <p className="mt-1">Our experts will provide initial thoughts on potential solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 p-2 bg-white/5 rounded-md">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <span className="text-white font-medium">Outline next steps</span>
                    <p className="mt-1">You'll receive a custom action plan tailored to your needs</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
              <h4 className="font-medium mb-2">No obligation, just valuable insights</h4>
              <p className="text-white/70">
                Our strategy calls are completely free with no strings attached. We're passionate about helping businesses grow through technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default BookingSection;

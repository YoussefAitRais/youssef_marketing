import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const BookCallSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // IMPORTANT: Replace with your actual Service ID and Template ID
    emailjs.sendForm(
        'service_tgduzjo',
        'template_kddrlle', 
        form.current, 
        'UHJ80n8dpUUiurR90' // This is your Public Key
      )
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!'); // You can replace this with a toast notification
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });
  };

  const packages = t("contact.form.packages", { returnObjects: true }) as string[];
  const budgets = t("contact.form.budgets", { returnObjects: true }) as string[];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent"></div>
      <motion.div
        className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-brand">
              {t("contact.title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a]/20 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-lg"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.form.phonePlaceholder")}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[120px]"
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-[#a456f6] hover:opacity-90 text-white px-10 py-6 text-lg font-semibold rounded-xl w-full md:w-auto"
                >
                  {t("contact.form.submit")}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;

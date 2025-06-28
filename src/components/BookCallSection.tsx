import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calendar, Clock, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BookCallSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="book-call" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent"></div>
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('bookcall.new_heading')}
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {t('bookcall.new_subheading')}
            </p>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t('bookcall.new_description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: t("bookcall.cards.pick.title"),
                description: t("bookcall.cards.pick.desc"),
                gradient: "from-brand-pink to-brand-purple",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: t("bookcall.cards.consult.title"),
                description: t("bookcall.cards.consult.desc"),
                gradient: "from-brand-purple to-brand-blue",
              },
              {
                icon: <Send className="w-6 h-6" />,
                title: t("bookcall.cards.plan.title"),
                description: t("bookcall.cards.plan.desc"),
                gradient: "from-brand-blue to-brand-pink",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-xl text-center relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl backdrop-blur-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                    {t("bookcall.form.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("bookcall.form.namePlaceholder")}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    {t("bookcall.form.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("bookcall.form.emailPlaceholder")}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                    {t("bookcall.form.phone")}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("bookcall.form.phonePlaceholder")}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                    {t("bookcall.form.company")}
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t("bookcall.form.companyPlaceholder")}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                  {t("bookcall.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("bookcall.form.messagePlaceholder")}
                  className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[100px]"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-brand-gradient hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  {t("bookcall.schedule")}
                  <Clock className="ml-2 w-5 h-5" />
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

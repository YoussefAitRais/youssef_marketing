import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaRegLightbulb, FaUserTie, FaBullseye, FaRegStickyNote } from 'react-icons/fa';
import ServiceLayout from "@/components/layouts/ServiceLayout";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const BookCall = () => {
  const benefits = [
    { title: "تحليل سريع لوضعك الحالي", icon: <FaBullseye className="w-8 h-8" /> },
    { title: "تشخيص نقاط القوة والخلل في مشروعك", icon: <FaUserTie className="w-8 h-8" /> },
    { title: "أفكار عملية يمكن تنفيذها فورًا", icon: <FaRegLightbulb className="w-8 h-8" /> },
    { title: "وضوح حول الخطوات القادمة (سواء معنا أو بمفردك)", icon: <FaRegStickyNote className="w-8 h-8" /> },
  ];

  const whoFor = [
    "إن كنت مدربًا أو خبيرًا وتريد مضاعفة مبيعاتك",
    "إن كنت تمتلك خدمة أو مهارة لكن لا تجد عملاء بشكل مستمر",
    "أو ببساطة، تريد شخصًا يُرتّب لك الأمور ويُريك الطريق",
  ];

  return (
    <ServiceLayout
      title="احجز استشارتك المجانية | يوسف للتسويق"
      description="خطوة واحدة قد تغيّر مسار مشروعك بالكامل. احجز استشارة مجانية لتحليل وضعك الحالي والحصول على خارطة طريق واضحة."
    >
      <div className="bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden relative bg-gradient-to-r from-[#232325] to-[#230c33]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">📅 احجز استشارتك المجانية</h1>
              <p className="text-lg md:text-xl text-gray-300">
                خطوة واحدة قد تغيّر مسار مشروعك بالكامل.
              </p>
              <p className="text-lg md:text-xl text-gray-300 mt-2">
                أحيانًا، كل ما تحتاجه هو شخص يفهم مشروعك… ويعرف كيف يُطلق إمكانياته الكاملة.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا ستحصل عليه في هذه الاستشارة؟</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="bg-white/10 border-white/20 p-8 h-full flex flex-col items-center justify-center">
                                      <div className="p-4 rounded-full bg-white/10 mb-4 inline-block text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who is this for Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">💡 لمن هذه الجلسة؟</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-300">
              {whoFor.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Why free Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">🎁 لماذا مجانًا؟</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
              لأننا نؤمن أن العلاقات القوية تبدأ بالفهم، لا بالبيع.
              ولأننا نعرف أن القيمة الحقيقية تُقاس بما نقدمه قبل حتى أن نبدأ العمل.
            </p>
            <p className="font-bold text-brand-primary">🎁 *عدد الجلسات المجانية محدود أسبوعيًا. احجز الآن قبل أن تُغلق المواعيد.*</p>
          </div>
        </section>



        {/* Note Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="text-lg font-semibold text-gray-200 max-w-3xl mx-auto bg-blue-900/30 p-4 rounded-lg border-r-4 border-blue-500">
              📌 <strong>ملاحظة:</strong> هذه ليست جلسة مبيعات، بل جلسة استراتيجية، مصممة لتمنحك وضوحًا حقيقيًا حول مشروعك ومبيعاتك القادمة.
            </p>
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};

export default BookCall;

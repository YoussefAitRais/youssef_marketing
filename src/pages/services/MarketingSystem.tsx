import React from 'react';
import { motion } from 'framer-motion';
import { FaUsersCog, FaBullseye, FaBullhorn, FaCogs, FaFileSignature, FaCommentsDollar, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MarketingSystem = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const FeatureCard = ({ icon, title, text, quote }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gray-800/50 p-8 rounded-2xl border border-white/10 backdrop-blur-lg h-full flex flex-col"
    >
      <div className="text-brand-secondary text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80 text-lg flex-grow">{text}</p>
      {quote && <p className="text-brand-primary italic text-lg mt-4">{quote}</p>}
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white overflow-x-hidden" dir="rtl">
        <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -z-0"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-gradient-brand leading-tight mb-6"
            >
              🔁 خدمة النظام التسويقي الفعّال
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              دع النظام يتكفّل بجذب عملائك… بدل أن تطاردهم يوميًا
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-xl text-white/80 mb-8"
            >
              أنت لا تحتاج للمزيد من الظهور… بل تحتاج نظامًا يجعل كل ظهور يؤدي إلى نتيجة.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="bg-gray-800/60 border border-white/10 rounded-lg p-6 max-w-2xl mx-auto"
            >
              <FaQuoteLeft className="text-brand-primary text-3xl mb-4 mx-auto" />
              <p className="text-xl italic">
                نحن لا نقدم "أداة"، بل نبني منظومة تسويقية ذكية تتحرك معك… وتعمل لصالحك حتى وأنت بعيد عن الشاشة.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* What we offer section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
              ماذا نقدم لك؟
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<FaUsersCog />}
                title="تحليل جمهورك وتصميم رحلة العميل"
                text="نغوص في عقل عميلك: من هو؟ ماذا يريد؟ ماذا يخاف؟ ثم نصمم له مسارًا يجعله يثق، يهتم، ثم يتخذ القرار."
                quote="رحلة مدروسة من التفاعل إلى التحويل."
              />
              <FeatureCard
                icon={<FaBullseye />}
                title="تصميم صفحات هبوط عالية التحويل"
                text="صفحات لا تبيع فقط… بل تُقنع، تُهيّئ، وتُحسِن التجربة. نركز على كل تفصيلة: من العنوان، الصور، إلى الـ CTA."
                quote="كل صفحة تُبنى بهدف وحيد: التحويل."
              />
              <FeatureCard
                icon={<FaBullhorn />}
                title="إعداد إعلانات ورسائل مقنعة"
                text="نُعد لك سيناريوهات إعلانية وكتابات تمسّ رغبات عميلك. سواء عبر فيسبوك، إنستغرام، أو رسائل مؤتمتة عبر واتساب أو الإيميل."
                quote="محتوى يُشعل الفضول، ويقود بخطى هادئة نحو الشراء."
              />
            </div>
          </div>
        </motion.section>

        {/* Who is this for section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 bg-gray-900/70"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">💡 لمن هذه الخدمة؟</motion.h2>
            <div className="max-w-3xl mx-auto space-y-6 text-xl text-white/90">
              <motion.p variants={itemVariants}>
                لمن سئم من نشر المحتوى دون نتائج واضحة.
              </motion.p>
              <motion.p variants={itemVariants}>
                لمن تعب من الردود الفردية والرسائل المتكررة.
              </motion.p>
              <motion.p variants={itemVariants}>
                لمن يريد بناء نظام يجعل العميل المؤهل هو من يطرق بابه.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Expected results section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">📈 النتائج المتوقعة:</motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div variants={itemVariants} className="text-center p-6 border border-white/10 rounded-lg">
                <FaCogs className="text-5xl text-brand-primary mx-auto mb-4" />
                <p className="text-xl font-semibold">نظام جذب عملاء يعمل تلقائيًا</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center p-6 border border-white/10 rounded-lg">
                <FaFileSignature className="text-5xl text-brand-primary mx-auto mb-4" />
                <p className="text-xl font-semibold">صفحات تحوّل الزوار إلى استشارات</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center p-6 border border-white/10 rounded-lg">
                <FaCommentsDollar className="text-5xl text-brand-primary mx-auto mb-4" />
                <p className="text-xl font-semibold">إعلانات ورسائل مقنعة تزيد التفاعل</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How we start section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-20 bg-gray-800/50"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8">كيف نبدأ؟</motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto text-white/80 mb-12">
              نبدأ بتحليل وضعك الحالي وأهدافك. ثم نصمم لك النظام خطوة بخطوة. نُطلقه، نختبره، ونُحسّنه باستمرار.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link
                to="/services/book-call"
                className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform hover:scale-105 shadow-lg hover:shadow-brand-primary/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-primary"
              >
                🗓️ احجز استشارتك المجانية ودع النظام يعمل لأجلك، لا العكس.
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default MarketingSystem;

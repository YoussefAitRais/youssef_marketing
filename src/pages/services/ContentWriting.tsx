import React from 'react';
import { motion } from 'framer-motion';
import { FaPenNib, FaBullseye, FaUsers, FaChartLine, FaQuoteLeft, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ContentWriting = () => {
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

  const FeatureCard = ({ title, text }) => (
    <motion.div
      variants={itemVariants}
      className="bg-gray-800/50 p-8 rounded-2xl border border-white/10 backdrop-blur-lg h-full"
    >
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80 text-lg">{text}</p>
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#1a1a1a', fontFamily: "'IBM Plex Sans Arabic', sans-serif" }} className="text-white overflow-x-hidden" dir="rtl">
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Glows Removed */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6" style={{ color: '#9f59f7' }}
          >
            خدمة كتابة المحتوى التسويقي
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            كلمات تُقنع، تُقرّب، وتُحوّل
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-xl text-white/80 mb-8"
          >
            في زمن تتزاحم فيه الأصوات، وحده المحتوى الحقيقي يستطيع أن يوقف التمرير، أن يخلق تواصلاً بشريًا، ويُترجم أفكارك إلى تأثير.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/60 border border-white/10 rounded-lg p-6 max-w-2xl mx-auto"
          >
            <FaQuoteLeft className="text-brand-primary text-3xl mb-4 mx-auto" />
            <p className="text-xl italic">
              نحن لا نكتب «نصوصًا»… نحن نُشكّل الانطباع الأول، ونُمهّد لقرار الشراء.
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
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              title="محتوى يجذب الانتباه ويحسن المبيعات"
              text="كل كلمة تُكتب بعناية لتُخاطب عقل وقلب جمهورك في آنٍ واحد. نربط بين مشكلته، وحلك، بأسلوب بسيط لكنه فعّال."
            />
            <FeatureCard
              title="مقالات احترافية مُخصصة لجمهورك"
              text="نكتب مقالات مدروسة تزيد من مصداقيتك، تُحسّن ظهورك، وتخلق إحساسًا بأنك 'تفهمهم' أكثر من أي منافس آخر."
            />
            <FeatureCard
              title="نصوص إعلانية تؤدي المهمة"
              text="عنوان يُجبر على التوقف، جملة تفتح حوارًا داخليًا، ثم دعوة واضحة لاتخاذ خطوة."
            />
            <FeatureCard
              title="محتوى تفاعلي لحساباتك الاجتماعية"
              text="محتوى لا يمر مرور الكرام. بل يثير تعليقًا، يخلق تفاعلًا، ويبني علاقة وثقة طويلة الأمد مع جمهورك."
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
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">لمن هذه الخدمة؟</motion.h2>
          <div className="max-w-3xl mx-auto space-y-6 text-xl text-white/90">
            <motion.p variants={itemVariants}>
              إن كنت مدربًا، خبيرًا، أو صاحب مهارة… وتجد صعوبة في التعبير عما تقدمه.
            </motion.p>
            <motion.p variants={itemVariants}>
              إن كنت تملك أفكارًا قوية، لكن لا تصل بالشكل الصحيح.
            </motion.p>
            <motion.p variants={itemVariants}>
              أو ببساطة، تريد أن تتحول من شخص يقدّم خدمات… إلى "شخص يُنتظَر ما سيقوله".
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
              <p className="text-xl font-semibold">جمهور يتفاعل معك لأنك "تفهمه"</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center p-6 border border-white/10 rounded-lg">
              <p className="text-xl font-semibold">زيادة واضحة في النقرات، الرسائل، والمبيعات</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center p-6 border border-white/10 rounded-lg">
              <p className="text-xl font-semibold">أسلوب مميز يُعبّر عنك أنت فقط، لا نسخة من أحد</p>
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
            نبدأ باكتشاف هويتك، جمهورك، ونبرة صوتك. ثم نكتب، نختبر، ونُعدّل حتى تكون الرسالة كما يجب.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/services/book-call"
              className="inline-block text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-primary" style={{ backgroundColor: '#9f59f7' }}
            >
              احجز استشارتك المجانية الآن
            </Link>
          </motion.div>
        </div>
      </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default ContentWriting;

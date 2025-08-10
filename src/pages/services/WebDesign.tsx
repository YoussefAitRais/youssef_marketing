import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const WebDesign = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const FeatureCard = ({ title, text, quote }) => (
    <motion.div
      variants={itemVariants}
      className="bg-[#131824] p-8 rounded-2xl border border-white/10 h-full flex flex-col"
    >
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80 text-lg flex-grow">{text}</p>
      {quote && <p className="italic text-lg mt-4" style={{ color: '#9f59f7' }}>{quote}</p>}
    </motion.div>
  );

  const LineCard = ({ children }) => (
    <motion.div variants={itemVariants} className="bg-[#131824] p-6 rounded-lg border border-white/10">
      {children}
    </motion.div>
  );

  const FAQItem = ({ q, a }) => {
    const [open, setOpen] = React.useState(false);
    return (
      <motion.div variants={itemVariants} className="bg-[#131824] rounded-lg border border-white/10">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between p-5 text-left"
          aria-expanded={open}
        >
          <h3 className="text-2xl font-bold">{q}</h3>
          <motion.span
            className="text-3xl leading-none select-none"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="px-5 pb-5 -mt-2"
            >
              <p className="text-xl text-white/90">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundColor: '#1a1a1a', fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
        className="text-white overflow-x-hidden"
        dir="rtl"
      >
        {/* Hero */}
        <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              لماذا تبقى بعض المشاريع في القمة… بينما يختفي الآخرون من السوق؟
            </motion.h1>
            <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-xl text-white/80 mb-8">
              السر غالبًا ليس في جودة المنتج فقط، بل في كيف يراك جمهورك على الإنترنت.
            </motion.p>
            <motion.div variants={itemVariants} className="bg-[#131824] border border-white/10 rounded-lg p-6 max-w-2xl mx-auto">
              <FaQuoteLeft className="text-brand-primary text-3xl mb-4 mx-auto" />
              <p className="text-xl italic">موقعك… إما أن يرفعك أو يتركك في الظل</p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Who is this for */}
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">لمن هذه الخدمة؟</motion.h2>
            <div className="max-w-3xl mx-auto space-y-6 text-xl text-white/90 text-right">
              <LineCard><p>مستقل، مدرب، أو صاحب مشروع بدأ في بناء جمهوره على الإنترنت</p></LineCard>
              <LineCard><p>تبيع خدمات، دورات، أو تقدم استشارات، وتريد تحويل المتابعين إلى عملاء</p></LineCard>
              <LineCard><p>تبحث عن موقع مدروس بأهداف واضحة، يخاطب جمهورك المستهدف بدقة</p></LineCard>
              <LineCard><p>تحتاج خبيراً يحوّل أفكارك إلى موقع فعّال، بسيط الإدارة، وقوي التأثير</p></LineCard>
            </div>
          </div>
        </motion.section>

        {/* Process */}
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">طريقة العمل</motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <LineCard>
                <h3 className="text-2xl font-bold mb-4">دراسة مشروعك وتحديد ميزتك التنافسية</h3>
                <p>حتى نعرف كيف نضعك في الصف الأمامي بسوقك</p>
              </LineCard>
              <LineCard>
                <h3 className="text-2xl font-bold mb-4">معرفة جمهورك المستهدف بعمق</h3>
                <p>فهم احتياجاته، دوافعه، وكلماته التي تحركه</p>
              </LineCard>
              <LineCard>
                <h3 className="text-2xl font-bold mb-4">تخطيط الموقع + رحلة المستخدم</h3>
                <p>تصميم تجربة قيادة الزائر بخطوات محسوبة نحو القرار</p>
              </LineCard>
              <LineCard>
                <h3 className="text-2xl font-bold mb-4">كتابة إعلانية (Copywriting) قائمة على علم النفس</h3>
                <p>نصوص تحفّز، تقنع، وتغلق البيع</p>
              </LineCard>
            </div>
          </div>
        </motion.section>

        {/* Expected results */}
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">📈 النتائج المتوقعة</motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <LineCard><p className="text-xl">تصميم استراتيجي يزيد المبيعات عبر تجربة مستخدم محسنة ونصوص إعلانية قوية</p></LineCard>
              <LineCard><p className="text-xl">بناء ولاء طويل المدى بجمهورك عبر مدونة ونشرة بريدية مستقلة عن تقلبات السوشال ميديا</p></LineCard>
              <LineCard><p className="text-xl">نظام ذكي لتحليل بيانات جمهورك وتطوير استراتيجيتك باستمرار</p></LineCard>
              <LineCard><p className="text-xl">موقع سريع، متجاوب، وقابل للتعديل بدون تعقيد تقني</p></LineCard>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">الأسئلة الشائعة</motion.h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { q: 'هل توجد تكاليف إضافية؟', a: 'لا، كل ما تحتاجه مشمول في السعر، ما عدا التكلفة السنوية للاستضافة.' },
                { q: 'على أي منصة سيتم الموقع؟', a: 'WordPress أو برمجة خاصة حسب احتياجك.' },
                { q: 'هل أستطيع تعديل المحتوى لاحقاً بنفسي؟', a: 'نعم، ستحصل على لوحة تحكم سهلة لتحديث الصفحات، المنتجات، الصور، والروابط.' },
                { q: 'هل يمكن ربط الموقع مع النشرات البريدية؟', a: 'نعم.' },
                { q: 'كم مدة العمل؟', a: 'من أسبوع إلى شهر حسب حجم المشروع.' },
              ].map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default WebDesign;

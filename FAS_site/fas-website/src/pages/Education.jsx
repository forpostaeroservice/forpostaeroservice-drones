import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Education() {
  const { t } = useTranslation();

  const groupLessons = t('education.group.items', { returnObjects: true }) || [];
  const individualLessons = t('education.individual.items', { returnObjects: true }) || [];
  const integrationList = t('education.integration.list', { returnObjects: true }) || [];

  return (
    <PageTransition>
      <SEO title={`${t('education.title')} - FORPOST`} description={t('seo.education.description')} />
      
      <div className="pt-32 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-700">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Section */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h1 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-8">{t('education.title')}</h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 96 }} transition={{ delay: 0.5, duration: 1 }} className="h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-zinc-500 dark:text-zinc-400 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">{t('education.description')}</p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-8 mb-32">
            {[
              { title: 'group', lessons: groupLessons },
              { title: 'individual', lessons: individualLessons }
            ].map((section, sectionIdx) => (
              <motion.div key={section.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants} className="flex flex-col h-full space-y-6 group">
                <div className="text-center md:text-left px-2">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 tracking-tight">{t(`education.${section.title}.title`)}</h2>
                  <p className="text-blue-600 dark:text-blue-500 text-sm uppercase tracking-widest font-bold">{t(`education.${section.title}.price`)}</p>
                </div>
                <motion.div whileHover={{ y: -5 }} className="relative flex-grow overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-900/30 p-8 shadow-sm transition-shadow duration-500 hover:shadow-xl dark:hover:shadow-blue-900/20">
                  <div className={`absolute ${sectionIdx === 0 ? '-top-24 -right-24' : '-bottom-24 -left-24'} w-48 h-48 bg-blue-600/10 blur-[80px] pointer-events-none`} />
                  <ul className="relative z-10 space-y-6 text-sm text-zinc-600 dark:text-zinc-300">
                    {section.lessons.map((item, idx) => (
                      <motion.li key={idx} variants={itemVariants} className="flex gap-4 items-start">
                        <span className="text-blue-600 dark:text-blue-500 font-bold tabular-nums">0{idx + 1}</span>
                        <span className="border-l border-zinc-200 dark:border-white/10 pl-4 leading-snug">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Integration Section - Optimized for Dual Modes */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500
                      bg-zinc-200 dark:bg-zinc-900 
                      border border-zinc-200 dark:border-white/5 
                      p-6 sm:p-8 md:p-16 shadow-2xl shadow-blue-900/5 dark:shadow-none"
          >
            {/* Background Branding Decor - Adjusted for mobile visibility */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-500/10 dark:bg-blue-500/5 skew-x-12 translate-x-1/2 md:translate-x-20 pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-4 md:mb-6 leading-tight text-zinc-900 dark:text-white">
                  {t('education.integration.title')}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6 md:mb-8 leading-relaxed">
                  <strong className="text-blue-600 dark:text-white">Forpost Aero Service</strong> {t('education.integration.intro')}
                </p>
                
                <h3 className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
                  {t('education.integration.include_title')}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  {(integrationList || []).map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-600 dark:text-blue-500 text-lg leading-none">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Glassmorphism Card - Optimized padding and font for mobile */}
              <div className="bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-inner">
                <p className="text-base md:text-lg italic text-zinc-700 dark:text-zinc-200 leading-relaxed mb-6">
                  {t('education.integration.kazgasa_text')}
                </p>
                <div className="flex justify-between md:justify-end items-center md:items-baseline gap-2">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-blue-600 dark:text-blue-500 opacity-50">Partner</span>
                  <span className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white opacity-20 tracking-tighter select-none">KAZGASA</span>
                </div>
              </div>
            </div>
          </motion.div>

          <Link to="/contact" className="mt-6 block w-full md:w-[1000px] mx-auto text-center py-5 rounded-xl bg-blue-600 text-white font-black uppercase text-[12px] tracking-widest">
            {t("drones_detail.contact_us")}
          </Link>

        </div>
      </div> 
    </PageTransition>
  );
}     
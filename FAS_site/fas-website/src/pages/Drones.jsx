import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

const droneCategories = [
  { id: 1, key: "cat_evtol", slug: "evtol", img: "EVTOL.png" },
  { id: 2, key: "cat_multirotor", slug: "multirotor", img: "Multi-rotor.jpg" },
];

export default function Drones() {
  const { t } = useTranslation();
  
  // Helper to get array from translations safely
  const gogglesList = t('drones_page.goggles_list', { returnObjects: true }) || [];
  const controllersList = t('drones_page.controllers_list', { returnObjects: true }) || [];

  return (
    <PageTransition>
      <SEO title={t('seo.drones.title')} description={t('seo.drones.description')} path="/drones" />
      
      <div className="pt-32 pb-20 bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-10">
            
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-black text-blue-700 dark:text-blue-800 uppercase mb-4 tracking-tighter">
              {t('nav.drones')}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg mb-12">
              {t('drones_page.desc')}
            </p>
          </motion.div>
          
          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {droneCategories.map((drone) => (
              <Link
                key={drone.id}
                to={`/drones/${drone.slug}`}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 overflow-hidden group hover:border-blue-700 dark:hover:border-blue-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-500 rounded-sm"
              >
                <div className="overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={drone.img}
                    alt={t(`drones_page.${drone.key}.name`)}
                    className="w-full h-72 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                    {t(`drones_page.${drone.key}.name`)}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-3 leading-relaxed">
                    {t(`drones_page.${drone.key}.specs`)}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-4 transition-all">
                    <span>{t('drones_page.view')}</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* New FPV Solutions Section (From Image) */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-20">
            <div className="text-center md:text-left mb-16">
              <h1 className="text-3xl md:text-4xl font-black text-blue-800 uppercase tracking-tighter mb-4">
                {t('drones_page.solutions')}
            </h1>
              <h2 className="text-3xl md:text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
                {t('drones_page.solutions_title')}
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-4xl text-lg leading-relaxed">
                {t('drones_page.solutions_subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              {/* Goggles Section */}
              <div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-700 dark:bg-blue-500" />
                  {t('drones_page.fpv_goggles')}
                </h3>
                <ul className="space-y-4">
                  {gogglesList.map((item, i) => (
                    <li key={i} className="flex gap-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <span className="opacity-50">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Controllers Section */}
              <div>
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-blue-700 dark:bg-blue-500" />
                  {t('drones_page.controllers')}
                </h3>
                <ul className="space-y-4">
                  {controllersList.map((item, i) => (
                    <li key={i} className="flex gap-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <span className="opacity-50">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-24 mt-24 mb-10">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-3xl overflow-hidden text-white relative"
          >
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

            <div className="p-10 md:p-16 relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                  {t('drones_page.lab_title')}
                </h2>
                <div className="p-6 border border-white/20 rounded-full inline-block mb-8">
                  <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-3xl">
                    {t('drones_page.lab_desc')}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Images */}
                <div className="relative flex items-center justify-center h-[400px] md:h-[500px]">
                  {/* Primary Diamond Image (Left) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute left-0 w-[60%] aspect-square z-20"
                    style={{ 
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      backgroundColor: '#18181b' 
                    }}
                  >
                    <img 
                      src="/Lab1.png" 
                      alt="Lab Interior" 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>

                  {/* Secondary Diamond Image (Right/Overlapping) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute right-4 w-[55%] aspect-square z-10 opacity-80"
                    style={{ 
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      backgroundColor: '#18181b' 
                    }}
                  >
                    <img 
                      src="/Lab2.png" 
                      alt="Drone Assembly" 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>

                  {/* Decorative Glow behind images */}
                  <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full z-0" />
                </div>

                {/* Right Side: List */}
                <div className="space-y-8 pl-0 md:pl-10">
                  <h3 className="text-xl font-bold text-blue-500 uppercase tracking-widest">
                    {t('drones_page.lab_scope_title')}
                  </h3>
                  <ul className="space-y-6">
                    {(t('drones_page.lab_items', { returnObjects: true }) || []).map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <span className="text-blue-500 text-lg mt-1 group-hover:translate-x-1 transition-transform">•</span>
                        <p className="text-zinc-300 group-hover:text-white transition-colors">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from "../components/PageTransition";
import SEO from '../components/SEO';

const droneCategories = [
  { id: 1, key: "cat_evtol", to: "/drones/evtol", img: "EVTOL.png" },
  { id: 2, key: "cat_multirotor", to: "/drones/multirotor", img: "Multi-rotor.jpg" },
  { id: 3, key: "cat_fpv", to: "/products/fpv", img: "EVTOL.png" },
  { id: 4, key: "cat_ecosystems", to: "/products/ecosystems", img: "Multi-rotor.jpg" },
  { id: 5, key: "cat_lab", to: "/products/lab", img: "Lab1.png" },
];

export default function Drones() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <SEO title={t('seo.drones.title')} description={t('seo.drones.description')} path="/drones" />

      <div className="pt-32 pb-24 bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-700 dark:text-blue-400 uppercase mb-4 tracking-tighter">
              {t('nav.drones')}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-base md:text-lg leading-relaxed">
              {t('drones_page.desc')}
            </p>
          </motion.div>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {droneCategories.slice(0, 3).map((drone, index) => (
              <motion.div
                key={drone.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={drone.to}
                  className="block h-full bg-white dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-white/10 overflow-hidden group hover:border-blue-500/50 dark:hover:border-blue-500/30 rounded-2xl shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-blue-950/20 transition-all duration-500"
                >
                  <div className="overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={drone.img}
                      alt={t(`drones_page.${drone.key}.name`)}
                      className="w-full h-56 md:h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                      {t(`drones_page.${drone.key}.name`)}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
                      {t(`drones_page.${drone.key}.specs`)}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-4 transition-all">
                      <span>{t('drones_page.view')}</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 md:gap-8 max-w-3xl mx-auto">
            {droneCategories.slice(3, 5).map((drone, index) => (
              <motion.div
                key={drone.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 + index * 0.08 }}
                className="w-full sm:max-w-[calc(50%-1rem)] lg:max-w-[320px]"
              >
                <Link
                  to={drone.to}
                  className="block h-full bg-white dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-white/10 overflow-hidden group hover:border-blue-500/50 dark:hover:border-blue-500/30 rounded-2xl shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-blue-950/20 transition-all duration-500"
                >
                  <div className="overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={drone.img}
                      alt={t(`drones_page.${drone.key}.name`)}
                      className="w-full h-56 md:h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
                      {t(`drones_page.${drone.key}.name`)}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
                      {t(`drones_page.${drone.key}.specs`)}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-4 transition-all">
                      <span>{t('drones_page.view')}</span>
                      <span className="text-lg">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

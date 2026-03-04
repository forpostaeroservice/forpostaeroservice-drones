import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

export default function LabComplex() {
  const { t } = useTranslation();
  const labItems = t("drones_page.lab_items", { returnObjects: true }) || [];

  return (
    <PageTransition>
      <SEO
        title={t("drones_page.lab_title")}
        description={t("drones_page.lab_desc")}
        path="/products/lab"
      />

      <div className="pt-32 pb-20 bg-slate-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Back + Header — как на DroneCategory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/drones"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:opacity-70 transition"
            >
              ← {t("drones_category.back")}
            </Link>
            <h1 className="mt-6 text-5xl md:text-6xl font-black uppercase tracking-tighter">
              <span className="text-blue-700 dark:text-blue-800">
                {t("drones_page.lab_title")}
              </span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg mt-4 leading-relaxed">
              {t("drones_page.lab_desc")}
            </p>
          </motion.div>

          {/* В рамках лаборатории реализуются — каждый пункт с новой строки */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12"
          >
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-blue-700 dark:text-blue-400 mb-6">
              {t("drones_page.lab_scope_title")}
            </h2>
            <ul className="flex flex-col gap-4">
              {labItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors duration-300"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-black tabular-nums">
                    {i + 1}
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-200 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Фото — ниже списка */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src="/Lab1.png"
                  alt="Lab Interior"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm group">
              <div className="aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src="/Lab2.png"
                  alt="Drone Assembly"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

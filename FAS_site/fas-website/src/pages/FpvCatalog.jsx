import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { getFpvProducts } from "../data/fpvCatalog";

export default function FpvCatalog() {
  const { t } = useTranslation();

  const gogglesList = t("drones_page.goggles_list", { returnObjects: true }) || [];
  const controllersList =
    t("drones_page.controllers_list", { returnObjects: true }) || [];
  const products = getFpvProducts();

  return (
    <PageTransition>
      <SEO
        title={t("drones_page.solutions")}
        description={t("drones_page.solutions_subtitle")}
        path="/products/fpv"
      />

      <div className="pt-32 pb-20 bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-10">
          {/* Back link */}
          <div className="mb-10">
            <Link
              to="/drones"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:opacity-70 transition"
            >
              ← {t("drones_category.back")}
            </Link>
          </div>

          {/* Header copied from drones FPV section */}
          <div className="text-center md:text-left mb-16">
            <h1 className="text-3xl md:text-4xl font-black text-blue-800 uppercase tracking-tighter mb-4">
              {t("drones_page.solutions")}
            </h1>
            <h2 className="text-3xl md:text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
              {t("drones_page.solutions_title")}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-4xl text-lg leading-relaxed">
              {t("drones_page.solutions_subtitle")}
            </p>
          </div>

          {/* Goggles / Controllers lists */}
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-700 dark:bg-blue-500" />
                {t("drones_page.fpv_goggles")}
              </h3>
              <ul className="space-y-4">
                {gogglesList.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6"
                  >
                    <span className="opacity-50">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-500 uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-700 dark:bg-blue-500" />
                {t("drones_page.controllers")}
              </h3>
              <ul className="space-y-4">
                {controllersList.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-6"
                  >
                    <span className="opacity-50">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FPV products grid (catalog like drones) */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-16">
            <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-8">
              {t("products.title", "Наши FPV-решения")}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/fpv/${product.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md hover:border-blue-700 dark:hover:border-blue-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={
                          product.nameKey
                            ? t(product.nameKey)
                            : product.name
                        }
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest px-4 text-center">
                        {product.shortLabel ||
                          (product.nameKey
                            ? t(product.nameKey)
                            : product.name)}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {product.nameKey ? t(product.nameKey) : product.name}
                    </h4>
                    <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
                      {product.descKey
                        ? t(product.descKey)
                        : product.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-500 font-bold uppercase text-[10px] tracking-[0.2em] group-hover:gap-3 transition-all">
                        {t("drones_category.learn_more")} <span className="text-lg">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

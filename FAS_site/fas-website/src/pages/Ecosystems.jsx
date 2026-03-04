import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { getEcosystemProducts } from "../data/ecosystemCatalog";

export default function Ecosystems() {
  const { t } = useTranslation();
  const products = getEcosystemProducts();

  return (
    <PageTransition>
      <SEO
        title={t("drones_page.cat_ecosystems.name", "Экосистемы")}
        description={t(
          "drones_page.cat_ecosystems.specs",
          "Инфраструктура вокруг дронов: станции, ПО и полезная нагрузка."
        )}
        path="/products/ecosystems"
      />

      <div className="pt-32 pb-20 bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-10">
            <Link
              to="/drones"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:opacity-70 transition"
            >
              ← {t("drones_category.back")}
            </Link>
          </div>

          <header className="mb-12 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-4">
              {t("drones_page.cat_ecosystems.name")}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
              {t(
                "drones_page.cat_ecosystems.specs",
                "Комплекс решений вокруг БПЛА: наземные станции, полезная нагрузка и программное обеспечение."
              )}
            </p>
          </header>

          {/* Ecosystem products grid (catalog like drones/FPV) */}
          <div className="border-t border-zinc-200 dark:border-white/10 pt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/ecosystems/${product.slug}`}
                  className="group rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 flex flex-col hover:border-blue-700 dark:hover:border-blue-800 hover:shadow-xl transition-all duration-500"
                >
                  <div className="mb-4 h-40 w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={
                          product.nameKey
                            ? t(product.nameKey)
                            : product.name
                        }
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-zinc-400 dark:text-zinc-500 text-xs font-black uppercase tracking-widest px-4 text-center">
                        {product.shortLabel ||
                          (product.nameKey
                            ? t(product.nameKey)
                            : product.name)}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-3">
                    {product.nameKey ? t(product.nameKey) : product.name}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed flex-1">
                    {product.descKey
                      ? t(product.descKey)
                      : product.description}
                  </p>
                  <div className="pt-6">
                    <span className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-500 font-bold uppercase text-[10px] tracking-[0.2em] group-hover:gap-3 transition-all">
                      {t("drones_category.learn_more")} <span className="text-lg">→</span>
                    </span>
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

import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { DRONE_CATEGORIES, getDroneCategory, getDronesForCategory } from "../data/droneCatalog";

function DroneImage({ image, label }) {
    const [isError, setIsError] = useState(false);

    return (
        <div className="relative h-44 w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-gradient-to-br dark:from-white/10 dark:via-white/5 dark:to-transparent">
            {/* animated glow */}
            <div className="drone-glow-layer absolute inset-0 opacity-50 dark:opacity-100" />

            {/* glass lens */}
            <div className="drone-glass-layer absolute inset-0 pointer-events-none z-10" />

            {/* shine sweep */}
            <div className="absolute inset-0 pointer-events-none z-20">
                <div className="drone-shine-layer absolute inset-y-[-40%] left-[-60%] w-[60%] opacity-30 dark:opacity-100" />
            </div>

            <div className="h-full w-full flex items-center justify-center p-6 relative z-10">
                {!isError && image ? (
                    <img 
                        src={image} 
                        alt={label}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                        onError={() => setIsError(true)}
                    />
                ) : (
                    <span className="text-zinc-400 dark:text-white/20 font-black tracking-widest uppercase text-sm text-center transition duration-300 group-hover:text-blue-600 dark:group-hover:text-white/70">
                        {label}
                    </span>
                )}
            </div>
        </div>
    );
}

export default function DroneCategory() {
    const { categorySlug } = useParams();
    const { t } = useTranslation();

    const category = useMemo(() => getDroneCategory(categorySlug), [categorySlug]);
    const drones = useMemo(() => getDronesForCategory(categorySlug), [categorySlug]);

    if (!category) {
        return (
            <PageTransition>
                <div className="pt-32 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white px-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-black uppercase mb-4">{t("drones_category.not_found.title")}</h1>
                        <p className="text-zinc-500 dark:text-zinc-400 mb-8">{t("drones_category.not_found.desc")}</p>
                        <Link to="/drones" className="text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:underline">
                            ← {t("drones_category.back")}
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <SEO title={t(category.titleKey)} description={t(category.descKey)} path={`/drones/${categorySlug}`} />

            <div className="pt-32 pb-20 bg-slate-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-10">
                    <div className="flex items-center justify-between gap-6 flex-wrap">
                        <div>
                            <Link to="/drones" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:opacity-70 transition">
                                ← {t("drones_category.back")}
                            </Link>

                            <h1 className="mt-6 text-5xl md:text-6xl font-black uppercase tracking-tighter">
                                <span className="text-blue-700 dark:text-blue-800">{t(category.titleKey)}</span>
                            </h1>

                            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg mt-4 leading-relaxed">{t(category.descKey)}</p>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex items-center gap-3 bg-zinc-200/50 dark:bg-white/5 p-1.5 rounded-full backdrop-blur-sm">
                            {DRONE_CATEGORIES.map((tab) => (
                                <Link
                                    key={tab.slug}
                                    to={`/drones/${tab.slug}`}
                                    className={
                                        tab.slug === categorySlug
                                            ? "px-5 py-2 rounded-full bg-blue-700 dark:bg-blue-800 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20"
                                            : "px-5 py-2 rounded-full text-zinc-500 dark:text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-zinc-900 dark:hover:text-white transition"
                                    }
                                >
                                    {t(tab.titleKey)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Drones Grid */}
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {drones.map((drone) => {
                            const name = t(`drones_catalog.items.${drone.key}.name`);
                            const shortLabel = t(`drones_catalog.items.${drone.key}.short_label`, { defaultValue: name });
                            const highlights = t(`drones_catalog.items.${drone.key}.highlights`, { returnObjects: true });
                            const highlightList = Array.isArray(highlights) ? highlights : [];
                            console.log(drone.image)
                            console.log(12345)

                            return (
                                <Link
                                    key={drone.key}
                                    to={`/drones/${categorySlug}/${drone.slug}`}
                                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md hover:border-blue-700 dark:hover:border-blue-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-600/5 dark:from-blue-800/20 via-transparent to-transparent" />

                                    <div className="relative p-6 flex flex-col h-full z-10">
                                        <DroneImage image={drone.image} label={shortLabel} />

                                        <h3 className="mt-6 text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">{name}</h3>

                                        <ul className="mt-4 space-y-2 text-sm text-zinc-500 dark:text-zinc-300">
                                            {highlightList.slice(0, 3).map((text, idx) => (
                                                <li key={idx} className="flex gap-2 items-start">
                                                    <span className="text-blue-600 dark:text-blue-500 font-bold mt-0.5">•</span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 flex-1" />

                                        <span className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-500 font-bold uppercase text-[10px] tracking-[0.2em] group-hover:gap-4 transition-all">
                                            {t("drones_category.learn_more")} <span className="text-lg">→</span>
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
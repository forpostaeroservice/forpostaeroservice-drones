import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { getDroneBySlug, getDroneCategory, getDronesForCategory } from "../data/droneCatalog";

function DroneMedia({ image, label }) {
  const [isError, setIsError] = useState(false);

  if (!image || isError) {
    return (
      <div className="aspect-[4/3] w-full rounded-[28px] overflow-hidden bg-zinc-100 dark:bg-white/5 flex items-center justify-center border border-zinc-200/70 dark:border-white/10">
        <span className="text-zinc-400 dark:text-white/20 font-black tracking-widest uppercase text-sm text-center px-6">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full rounded-[28px] overflow-hidden bg-white dark:bg-white/5 border border-zinc-200/70 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-none">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-contain p-6 md:p-10"
        onError={() => setIsError(true)}
      />
    </div>
  );
}

function FeatureGrid({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((text, idx) => (
        <div key={idx} className="flex items-start gap-4">
          {/* FIX #2: make number badges always perfect circles + same visual width for digits */}
          <div className="mt-1 flex-none grid place-items-center h-10 w-10 min-w-10 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-black leading-none tabular-nums">
            <span className="text-[13px]">{idx + 1}</span>
          </div>

          <div className="text-zinc-700 dark:text-zinc-200 font-medium leading-relaxed">
            {text}
          </div>
        </div>
      ))}
    </div>
  );
}

function AnchorTabs({ tabs, activeId }) {
  // FIX #3: remove sticky behavior (tabs scroll away and are not visible when scrolling down)
  return (
    <div className="-mx-6 md:-mx-10 px-6 md:px-10 backdrop-blur-xl bg-white/85 dark:bg-zinc-950/75 border-b border-zinc-200/70 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-4">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={
                tab.id === activeId
                  ? "shrink-0 text-zinc-900 dark:text-white text-[11px] font-black uppercase tracking-[0.28em] border-b-2 border-blue-600 pb-3"
                  : "shrink-0 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-[11px] font-black uppercase tracking-[0.28em] border-b-2 border-transparent pb-3 transition"
              }
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DroneDetail() {
  const { categorySlug, droneSlug } = useParams();
  const { t } = useTranslation();

  const drone = useMemo(() => getDroneBySlug(categorySlug, droneSlug), [categorySlug, droneSlug]);
  const category = useMemo(() => getDroneCategory(categorySlug), [categorySlug]);
  const categoryDrones = useMemo(() => getDronesForCategory(categorySlug), [categorySlug]);
  const [activeSection, setActiveSection] = useState("overview");
  const sectionIds = useMemo(() => ["overview", "specs", "video", "download", "faq"], []);
  const observerRef = useRef(null);

  const tabs = useMemo(
    () => [
      { id: "overview", label: t("drones_detail.tabs.overview") },
      { id: "specs", label: t("drones_detail.tabs.specs") },
      { id: "video", label: t("drones_detail.tabs.video") },
      { id: "download", label: t("drones_detail.tabs.download") },
      { id: "faq", label: t("drones_detail.tabs.faq") },
    ],
    [t]
  );

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0));
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.1, 0.25] }
    );

    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [sectionIds, droneSlug]);

  if (!drone || !category) {
    return (
      <PageTransition>
        <div className="pt-32 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black uppercase mb-4">{t("drones_category.not_found.title")}</h1>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8">{t("drones_category.not_found.desc")}</p>
            <Link
              to="/drones"
              className="text-blue-600 dark:text-blue-500 font-bold uppercase text-xs tracking-widest hover:underline"
            >
              ← {t("drones_category.back")}
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const name = t(`drones_catalog.items.${drone.key}.name`, { defaultValue: drone.slug });
  const shortLabel = t(`drones_catalog.items.${drone.key}.short_label`, { defaultValue: name });
  const descriptionText = t(drone.description);
  const topSpecs = Array.isArray(drone.specs) ? drone.specs.slice(0, 4) : [];
  const performanceSpecs = Array.isArray(drone.specs) ? drone.specs.slice(0, 4) : [];
  const highlightsText = Array.isArray(drone.highlights) ? drone.highlights.map((k) => t(k)) : [];

  return (
    <PageTransition>
      <SEO title={name} description={descriptionText.slice(0, 160)} path={`/drones/${categorySlug}/${droneSlug}`} />

      <div className="pt-24 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[72rem] max-w-[110vw] rounded-full blur-3xl bg-gradient-to-r from-blue-600/12 via-cyan-500/10 to-transparent dark:from-blue-500/18 dark:via-cyan-400/10" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-10">
            {/* Breadcrumb */}
            <nav className="pt-8 flex flex-wrap items-center gap-2 text-sm">
              <Link
                to="/drones"
                className="text-blue-700 dark:text-blue-400 hover:opacity-70 transition uppercase tracking-widest font-black text-[11px]"
              >
                {t("nav.drones")}
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <Link
                to={`/drones/${categorySlug}`}
                className="text-blue-700 dark:text-blue-400 hover:opacity-70 transition uppercase tracking-widest font-black text-[11px]"
              >
                {t(category.titleKey)}
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-black uppercase tracking-widest">
                {shortLabel}
              </span>
            </nav>

            <div className="mt-12 grid lg:grid-cols-2 gap-14 items-center">
              <div>
                {drone.tagline && (
                  <div className="text-[11px] font-black uppercase tracking-[0.35em] text-zinc-600 dark:text-zinc-300">
                    {t(drone.tagline)}
                  </div>
                )}

                <h1 className="mt-4 text-[42px] leading-[0.98] md:text-[64px] font-black uppercase tracking-[-0.04em]">
                  {name}
                </h1>

                <p className="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed text-[17px] max-w-xl">
                  {descriptionText}
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="text-center px-8 py-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition font-black uppercase text-xs tracking-[0.28em]"
                  >
                    {t("drones_detail.contact_us")}
                  </Link>
                </div>

                {topSpecs.length > 0 && (
                  <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {topSpecs.map((row, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5 p-5"
                      >
                        <div className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                          {t(row.label)}
                        </div>
                        <div className="mt-2 text-[20px] font-black tracking-tight text-zinc-900 dark:text-white">
                          {t(row.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <FeatureGrid items={highlightsText.slice(0, 6)} />
              </div>

              <div className="relative">
                <DroneMedia image={drone.image} label={shortLabel} />
              </div>
            </div>
          </div>
        </section>

        <AnchorTabs tabs={tabs} activeId={activeSection} />

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Overview */}
          <section id="overview" className="scroll-mt-32 pt-14">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <div className="text-[11px] font-black uppercase tracking-[0.32em] text-zinc-400 dark:text-zinc-500">
                  {t("drones_detail.tabs.overview")}
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
                  {t("drones_detail.sections.overview_title")}
                </h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">{descriptionText}</p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[28px] border border-zinc-200/70 dark:border-white/10 bg-zinc-50/60 dark:bg-white/5 p-7">
                  <div className="text-[11px] font-black uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                    {t("drones_detail.highlights")}
                  </div>
                  {drone.highlights && drone.highlights.length > 0 ? (
                    <ul className="mt-5 space-y-4">
                      {drone.highlights.map((itemKey, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-zinc-700 dark:text-zinc-200">
                          <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                          <span className="font-medium leading-relaxed">{t(itemKey)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-4 text-zinc-500 dark:text-zinc-400">{t("drones_detail.no_highlights")}</div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Performance banner */}
          {performanceSpecs.length > 0 && (
            <section className="mt-20 rounded-[32px] overflow-hidden relative bg-zinc-900 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={drone.image ? { backgroundImage: `url(${drone.image})` } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/55 to-black/35" />

              <div className="relative px-6 md:px-10 py-16 md:py-20">
                <div className="max-w-5xl mx-auto text-center">
                  <div className="text-sm font-semibold tracking-[0.3em] uppercase text-white/80">
                    {t("drones_detail.performance_title")}
                  </div>
                  <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
                    {t("drones_detail.performance_subtitle")}
                  </p>
                </div>

                <div className="mt-10 md:mt-14 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
                  {performanceSpecs.map((row, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-xl md:text-2xl font-black tracking-tight">{t(row.value)}</div>
                      <div className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                        {t(row.label)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Technical Specifications */}
          <section id="specs" className="scroll-mt-32 pt-20">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.32em] text-zinc-400 dark:text-zinc-500">
                  {t("drones_detail.tabs.specs")}
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">{t("drones_detail.specs")}</h2>
              </div>

            </div>

            {drone.specs && drone.specs.length > 0 ? (
              <div className="mt-10 rounded-[28px] overflow-hidden border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5">
                <div className="divide-y divide-zinc-200/70 dark:divide-white/10">
                  {drone.specs.map((row, idx) => (
                    <div
                      key={idx}
                      className="grid md:grid-cols-12 gap-4 px-7 py-6 hover:bg-zinc-50/70 dark:hover:bg-white/5 transition-colors"
                    >
                      <div className="md:col-span-4 text-zinc-500 dark:text-zinc-400 font-black uppercase tracking-[0.22em] text-[11px]">
                        {t(row.label)}
                      </div>
                      <div className="md:col-span-8 text-zinc-900 dark:text-white font-medium leading-relaxed">
                        {t(row.value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-6 text-zinc-500 dark:text-zinc-400">{t("drones_detail.no_specs")}</div>
            )}
          </section>

          {/* Video */}
          <section id="video" className="scroll-mt-32 pt-20">
            <div className="text-[11px] font-black uppercase tracking-[0.32em] text-zinc-400 dark:text-zinc-500">
              {t("drones_detail.tabs.video")}
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              {t("drones_detail.sections.video_title")}
            </h2>

            <div className="mt-8 grid lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 rounded-[28px] border border-zinc-200/70 dark:border-white/10 bg-zinc-50/60 dark:bg-white/5 p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 flex items-center justify-center font-black text-xl">
                    ▶
                  </div>
                  <div className="mt-5 font-black uppercase tracking-[0.28em] text-[11px] text-zinc-700 dark:text-zinc-200">
                    {t("drones_detail.video_placeholder_title")}
                  </div>
                  <div className="mt-2 text-zinc-600 dark:text-zinc-300">{t("drones_detail.video_placeholder_desc")}</div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-[28px] border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5 p-10">
                <div className="text-[11px] font-black uppercase tracking-[0.32em] text-zinc-400 dark:text-zinc-500">
                  {t("drones_detail.sections.next_steps")}
                </div>
                <div className="mt-4 space-y-4">
                  <Link
                    to="/contact"
                    className="block text-center px-6 py-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition font-black uppercase text-xs tracking-[0.28em]"
                  >
                    {t("drones_detail.contact_us")}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Download */}
          <section id="download" className="scroll-mt-32 pt-20">
            <div className="text-[11px] font-black uppercase tracking-[0.32em] text-zinc-400 dark:text-zinc-500">
              {t("drones_detail.tabs.download")}
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              {t("drones_detail.sections.download_title")}
            </h2>

            <div className="mt-10 rounded-[28px] border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="font-black uppercase tracking-tight text-lg">{t("drones_detail.download_card_title")}</div>
                <div className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">{t("drones_detail.download_card_desc")}</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="text-center px-6 py-4 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition font-black uppercase text-xs tracking-[0.28em] w-full md:w-auto"
                >
                  {t("drones_detail.contact_us")}
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32 pt-20 pb-8">
            <div className="text-[11px] font-black uppercase tracking-[0.32em] text-zinc-400 dark:text-zinc-500">
              {t("drones_detail.tabs.faq")}
            </div>
            <h2 className="mt-3 text-2xl md:text-3xl font-black uppercase tracking-tight">
              {t("drones_detail.sections.faq_title")}
            </h2>

            <div className="mt-8 grid lg:grid-cols-2 gap-6 items-start">
              {["q1", "q2", "q3", "q4"].map((k) => (
                <details
                  key={k}
                  className="group rounded-[28px] border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5 p-7 open:shadow-sm transition"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                    <span className="font-black uppercase tracking-tight text-sm">{t(`drones_detail.faq.${k}.q`)}</span>
                    <span className="shrink-0 mt-0.5 h-7 w-7 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-300 group-open:rotate-45 transition">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">{t(`drones_detail.faq.${k}.a`)}</div>
                </details>
              ))}
            </div>

            {/* Related Items */}
            {categoryDrones.length > 1 && (
              <div className="mt-20 pt-12 border-t border-zinc-200/70 dark:border-white/10">
                <h2 className="text-[10px] font-black uppercase text-zinc-400 dark:text-zinc-500 mb-8 tracking-[0.3em]">
                  {t("drones_detail.other_in_category")}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {categoryDrones
                    .filter((d) => d.slug !== droneSlug)
                    .map((d) => (
                      <Link
                        key={d.slug}
                        to={`/drones/${categorySlug}/${d.slug}`}
                        className="px-5 py-2 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 text-xs font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition"
                      >
                        {t(`drones_catalog.items.${d.key}.short_label`, { defaultValue: d.key })}
                      </Link>
                    ))}
                </div>
              </div>
            )}

            <div className="mt-12">
              <Link
                to={`/drones/${categorySlug}`}
                className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-black uppercase text-[11px] tracking-widest hover:gap-4 transition-all"
              >
                ← {t("drones_detail.back_to_category")}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { getDroneBySlug, getDroneCategory } from "../data/droneCatalog";

function DroneMedia({ image, label }) {
  const [isError, setIsError] = useState(false);

  if (!image || isError) {
    return (
      <div className="aspect-[4/3] w-full rounded-[22px] md:rounded-[28px] overflow-hidden bg-zinc-100 dark:bg-white/5 flex items-center justify-center border border-zinc-200/70 dark:border-white/10">
        <span className="text-zinc-400 dark:text-white/20 font-black tracking-widest uppercase text-[10px] md:text-sm text-center px-6">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full rounded-[22px] md:rounded-[28px] overflow-hidden bg-white dark:bg-white/5 border border-zinc-200/70 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-none">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-contain p-4 md:p-10"
        onError={() => setIsError(true)}
      />
    </div>
  );
}

function FeatureGrid({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
      {items.map((text, idx) => (
        <div key={idx} className="flex items-start gap-3 md:gap-4">
          <div className="mt-1 flex-none grid place-items-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-black leading-none tabular-nums">
            <span className="text-[11px] md:text-[13px]">{idx + 1}</span>
          </div>
          <div className="text-zinc-700 dark:text-zinc-200 text-sm md:text-base font-medium leading-relaxed">
            {text}
          </div>
        </div>
      ))}
    </div>
  );
}

function AnchorTabs({ tabs, activeId }) {
  return (
    <div className="sticky top-[64px] z-30 -mx-6 md:-mx-10 px-6 md:px-10 backdrop-blur-xl  bg-white/40 dark:bg-black/40 backdrop-blur-md border-b border-zinc-200 dark:border-white/10">
      <div className="flex justify-start md:justify-center max-w-7xl mx-auto">
        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar py-4 scroll-smooth">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={
                tab.id === activeId
                  ? "shrink-0 text-zinc-900 dark:text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.28em] border-b-2 border-blue-600 pb-2 md:pb-3"
                  : "shrink-0 text-zinc-500 dark:text-zinc-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.28em] border-b-2 border-transparent pb-2 md:pb-3 transition"
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
  const [activeSection, setActiveSection] = useState("overview");
  const sectionIds = useMemo(() => ["overview", "specs", "video", "download", "faq"], []);
  const observerRef = useRef(null);

  const tabs = useMemo(
    () => [
      { id: "overview", label: t("drones_detail.tabs.overview") },
      { id: "specs", label: t("drones_detail.tabs.specs") },
      { id: "video", label: t("drones_detail.tabs.video") },
      // { id: "download", label: t("drones_detail.tabs.download") },
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
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.1] }
    );

    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, [sectionIds, droneSlug]);

  if (!drone || !category) return null; // Standard error handling here

  const name = t(`drones_catalog.items.${drone.key}.name`, { defaultValue: drone.slug });
  const shortLabel = t(`drones_catalog.items.${drone.key}.short_label`, { defaultValue: name });
  const descriptionText = t(drone.description);
  const topSpecs = Array.isArray(drone.specs) ? drone.specs.slice(0, 4) : [];
  const highlightsText = Array.isArray(drone.highlights) ? drone.highlights.map((k) => t(k)) : [];

  return (
    <PageTransition>
      <SEO title={name} description={descriptionText.slice(0, 160)} path={`/drones/${categorySlug}/${droneSlug}`} />

      <div className="pt-20 md:pt-24 pb-20 bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-white transition-colors duration-500">
        
        {/* Hero */}
        <section className="relative px-6 md:px-10 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb - Better Wrapping for Mobile */}
            <nav className="pt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <Link to="/drones" className="text-blue-700 dark:text-blue-400 uppercase tracking-widest font-black text-[10px]">
                {t("nav.drones")}
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <Link to={`/drones/${categorySlug}`} className="text-blue-700 dark:text-blue-400 uppercase tracking-widest font-black text-[10px]">
                {t(category.titleKey)}
              </Link>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span className="text-zinc-500 dark:text-zinc-400 text-[10px] font-black uppercase tracking-widest truncate max-w-[150px]">
                {shortLabel}
              </span>
            </nav>

            <div className="mt-8 md:mt-12 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="order-2 lg:order-1">
                {drone.tagline && (
                  <div className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">
                    {t(drone.tagline)}
                  </div>
                )}
                <h1 className="mt-3 text-[36px] md:text-[64px] leading-[1.1] md:leading-[0.98] font-black uppercase tracking-tight md:tracking-[-0.04em]">
                  {name}
                </h1>
                <p className="mt-5 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-[17px] max-w-xl">
                  {descriptionText}
                </p>

                {/* Hero Action Button */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-blue-600 text-white font-black uppercase text-[11px] tracking-widest">
                    {t("drones_detail.contact_us")}
                  </Link>
                </div>

                {/* Mobile Top Specs Grid */}
                {topSpecs.length > 0 && (
                  <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4">
                    {topSpecs.map((row, idx) => (
                      <div key={idx} className="rounded-2xl border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5 p-4 md:p-5">
                        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-zinc-500">
                          {t(row.label)}
                        </div>
                        <div className="mt-1 text-lg md:text-[20px] font-black text-zinc-900 dark:text-white">
                          {t(row.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Media Section (Responsive Order) */}
              <div className="relative order-1 lg:order-2">
                <DroneMedia image={drone.image} label={shortLabel} />
              </div>
            </div>
          </div>
        </section>
        
        <div className="sticky z-40" style={{ top: 88 }}>
          <AnchorTabs tabs={tabs} activeId={activeSection}/>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-32 pt-14">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
              <div className="lg:col-span-7">
                <h2 className="mt-2 text-xl md:text-3xl font-black uppercase">{t("drones_detail.sections.overview_title")}</h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-lg">{descriptionText}</p>
                <FeatureGrid items={highlightsText} />
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[24px] md:rounded-[28px] border border-zinc-200/70 dark:border-white/10 bg-zinc-50/60 dark:bg-white/5 p-6 md:p-7">
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{t("drones_detail.highlights")}</div>
                  <ul className="mt-5 space-y-4">
                    {drone.highlights?.map((itemKey, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-zinc-700 dark:text-zinc-200 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span className="font-medium">{t(itemKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Banner (Mobile optimized aspect and text) */}
          <section className="mt-16 md:mt-20 rounded-[28px] md:rounded-[32px] overflow-hidden relative bg-zinc-900 text-white min-h-[400px] flex items-center">
            <div className="absolute inset-0 bg-cover bg-center" style={drone.image ? { backgroundImage: `url(${drone.image})` } : undefined} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
            <div className="relative w-full px-6 py-12 md:py-20 text-center">
              <div className="text-[10px] font-black tracking-[0.4em] uppercase text-white">
                {t("drones_detail.performance_title")}
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                {topSpecs.map((row, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xl md:text-3xl font-black">{t(row.value)}</div>
                    <div className="text-[9px] md:text-[11px] font-semibold uppercase tracking-wider text-white/60">{t(row.label)}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Specs Table - Optimized for Mobile Reading */}
          <section id="specs" className="scroll-mt-32 pt-16 md:pt-20">
            <h2 className="mt-2 text-xl md:text-3xl font-black uppercase">{t("drones_detail.specs")}</h2>

            <div className="mt-8 rounded-[22px] md:rounded-[28px] overflow-hidden border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5">
              <div className="divide-y divide-zinc-200/70 dark:divide-white/10">
                {drone.specs?.map((row, idx) => (
                  <div key={idx} className="flex flex-col md:grid md:grid-cols-12 gap-1 md:gap-4 px-6 md:px-7 py-5 md:py-6">
                    <div className="md:col-span-4 text-zinc-400 dark:text-zinc-500 font-black uppercase tracking-wider text-[9px] md:text-[11px]">
                      {t(row.label)}
                    </div>
                    <div className="md:col-span-8 text-zinc-900 dark:text-white text-sm md:text-base font-medium">
                      {t(row.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section id="video" className="scroll-mt-32 pt-16 md:pt-20">
             <h2 className="mt-2 text-xl md:text-3xl font-black uppercase text-center">{t("drones_detail.sections.video_title")}</h2>
             
             <div className="flex flex-col items-center mt-8">
                <div className="w-full max-w-[1000px] overflow-hidden rounded-[22px] md:rounded-[28px] border border-zinc-200/70 dark:border-white/10 aspect-video bg-black shadow-xl">
                  {drone.youtubeId ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${drone.youtubeId}?rel=0`}
                      title={name}
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                      {t("drones_detail.video_placeholder_title")}
                    </div>
                  )}
                </div>
                <Link to="/contact" className="mt-6 block w-full md:w-[1000px] text-center py-5 rounded-xl bg-blue-600 text-white font-black uppercase text-[12px] tracking-widest">
                  {t("drones_detail.contact_us")}
                </Link>
             </div>                
                
          </section>

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-32 pt-16 md:pt-20 pb-10">
            {/* <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{t("drones_detail.tabs.faq")}</div> */}
            <h2 className="mt-2 text-xl md:text-3xl font-black uppercase">{t("drones_detail.sections.faq_title")}</h2>
            <div className="mt-8 grid lg:grid-cols-2 gap-4">
              {["q1", "q2", "q3", "q4"].map((k) => (
                <details key={k} className="group rounded-[20px] md:rounded-[24px] border border-zinc-200/70 dark:border-white/10 bg-white dark:bg-white/5 p-6 md:p-7">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                    <span className="font-black uppercase tracking-tight text-xs md:text-sm">{t(`drones_detail.faq.${k}.q`)}</span>
                    <span className="h-6 w-6 rounded-full border border-zinc-200 flex items-center justify-center text-lg group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="mt-4 text-zinc-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed">{t(`drones_detail.faq.${k}.a`)}</div>
                </details>
              ))}
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}
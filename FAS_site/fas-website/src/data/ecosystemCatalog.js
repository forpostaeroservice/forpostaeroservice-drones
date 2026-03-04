// Ecosystem hardware catalog based on Autel Robotics product pages.
// Specs and highlights are localized via i18n (ecosystem_catalog.*.specs / .highlights).

export const ECOSYSTEM_PRODUCTS_DATA = [
  {
    slug: "dragonfish-nest",
    key: "ecosystem_dragonfish_nest",
    name: "Autel Dragonfish Nest",
    nameKey: "ecosystem_catalog.dragonfish_nest.name",
    descKey: "ecosystem_catalog.dragonfish_nest.desc",
    specsKey: "ecosystem_catalog.dragonfish_nest.specs",
    highlightsKey: "ecosystem_catalog.dragonfish_nest.highlights",
    shortLabel: "Dragonfish Nest",
    image: "/ecosystem/dragonfish_nest.png",
    youtubeId: "",
  },
  {
    slug: "dragonfish-repeater",
    key: "ecosystem_dragonfish_repeater",
    name: "Dragonfish Repeater",
    nameKey: "ecosystem_catalog.dragonfish_repeater.name",
    descKey: "ecosystem_catalog.dragonfish_repeater.desc",
    specsKey: "ecosystem_catalog.dragonfish_repeater.specs",
    highlightsKey: "ecosystem_catalog.dragonfish_repeater.highlights",
    shortLabel: "Repeater",
    image: "/ecosystem/dragonfish_repeater.png",
    youtubeId: "",
  },
  {
    slug: "asat",
    key: "ecosystem_asat",
    name: "Autel Smart Antenna Transmission (ASAT)",
    nameKey: "ecosystem_catalog.asat.name",
    descKey: "ecosystem_catalog.asat.desc",
    specsKey: "ecosystem_catalog.asat.specs",
    highlightsKey: "ecosystem_catalog.asat.highlights",
    shortLabel: "ASAT",
    image: "/ecosystem/asat.png",
    youtubeId: "",
  },
  {
    slug: "smart-controller-v3",
    key: "ecosystem_smart_controller_v3",
    name: "Autel Smart Controller V3",
    nameKey: "ecosystem_catalog.smart_controller_v3.name",
    descKey: "ecosystem_catalog.smart_controller_v3.desc",
    specsKey: "ecosystem_catalog.smart_controller_v3.specs",
    highlightsKey: "ecosystem_catalog.smart_controller_v3.highlights",
    shortLabel: "Smart Controller V3",
    image: "/ecosystem/smart_controller_v3.png",
    youtubeId: "",
  },
  {
    slug: "smart-controller-v2",
    key: "ecosystem_smart_controller_v2",
    name: "Autel Smart Controller V2",
    nameKey: "ecosystem_catalog.smart_controller_v2.name",
    descKey: "ecosystem_catalog.smart_controller_v2.desc",
    specsKey: "ecosystem_catalog.smart_controller_v2.specs",
    highlightsKey: "ecosystem_catalog.smart_controller_v2.highlights",
    shortLabel: "Smart Controller V2",
    image: "/ecosystem/smart_controller_v2.png",
    youtubeId: "",
  },
];

export function getEcosystemProducts() {
  return ECOSYSTEM_PRODUCTS_DATA;
}

export function getEcosystemProductBySlug(slug) {
  return ECOSYSTEM_PRODUCTS_DATA.find((p) => p.slug === slug) || null;
}

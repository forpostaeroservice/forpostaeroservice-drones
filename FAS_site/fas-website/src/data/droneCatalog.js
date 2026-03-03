import {getDronesForCategory as getDronesFromData } from "./dronesData";

export const DRONE_CATEGORIES = [
  {
    slug: "multirotor",
    titleKey: "drones_catalog.categories.multirotor.title",
    descKey: "drones_catalog.categories.multirotor.desc",
  },
  {
    slug: "evtol",
    titleKey: "drones_catalog.categories.evtol.title",
    descKey: "drones_catalog.categories.evtol.desc",
  },
];

/** Returns list of drones for category with key, slug, autelUrl for cards and links. */
export function getDronesForCategory(categorySlug) {
  return getDronesFromData(categorySlug).map((d) => ({
    key: d.key,
    slug: d.slug,
    image: d.image,
    autelUrl: d.autelUrl,
  }));
}

export function getDroneCategory(slug) {
  return DRONE_CATEGORIES.find((c) => c.slug === slug) || null;
}

// Re-export for detail page
export { getDroneBySlug, DRONES_DATA } from "./dronesData";

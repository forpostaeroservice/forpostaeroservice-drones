// FPV platforms catalog based on "Форпост Дроны 2026" presentation.
// Specs and highlights are localized via i18n (fpv_catalog.*.specs / .highlights).

export const FPV_PRODUCTS_DATA = [
  {
    slug: "7in-quad",
    key: "fpv_7in_quad",
    name: "Квадрокоптер с 7-дюймовыми роторами",
    nameKey: "fpv_catalog.7in_quad.name",
    descKey: "fpv_catalog.7in_quad.desc",
    specsKey: "fpv_catalog.7in_quad.specs",
    highlightsKey: "fpv_catalog.7in_quad.highlights",
    shortLabel: "7\" квадрокоптер",
    image: "/fpv_images/FPV7inch.png",
    youtubeId: "",
  },
  {
    slug: "10in-quad",
    key: "fpv_10in_quad",
    name: "Квадрокоптер с 10-дюймовыми роторами",
    nameKey: "fpv_catalog.10in_quad.name",
    descKey: "fpv_catalog.10in_quad.desc",
    specsKey: "fpv_catalog.10in_quad.specs",
    highlightsKey: "fpv_catalog.10in_quad.highlights",
    shortLabel: "10\" квадрокоптер",
    image: "/fpv_images/FPV10inch.png",
    youtubeId: "",
  },
  {
    slug: "x8-transporter",
    key: "fpv_x8_transporter",
    name: "Пользовательский 8-роторный транспортник",
    nameKey: "fpv_catalog.x8_transporter.name",
    descKey: "fpv_catalog.x8_transporter.desc",
    specsKey: "fpv_catalog.x8_transporter.specs",
    highlightsKey: "fpv_catalog.x8_transporter.highlights",
    shortLabel: "X8 транспортник",
    image: "/fpv_images/FPV8rotor.png",
    youtubeId: "",
  },
  {
    slug: "13in-traverser",
    key: "fpv_13in_traverser",
    name: "13-дюймовый 4-роторный траверсер",
    nameKey: "fpv_catalog.13in_traverser.name",
    descKey: "fpv_catalog.13in_traverser.desc",
    specsKey: "fpv_catalog.13in_traverser.specs",
    highlightsKey: "fpv_catalog.13in_traverser.highlights",
    shortLabel: "13\" траверсер",
    image: "/fpv_images/FPV13inch.png",
    youtubeId: "",
  },
  {
    slug: "10in-fiber-optic",
    key: "fpv_10in_fiber",
    name: "10-дюймовый квадрокоптер с оптоволоконным управлением",
    nameKey: "fpv_catalog.10in_fiber.name",
    descKey: "fpv_catalog.10in_fiber.desc",
    specsKey: "fpv_catalog.10in_fiber.specs",
    highlightsKey: "fpv_catalog.10in_fiber.highlights",
    shortLabel: "10\" оптоволоконный",
    image: "/fpv_images/FPV10inch.png",
    youtubeId: "",
  },
];

export function getFpvProducts() {
  return FPV_PRODUCTS_DATA;
}

export function getFpvProductBySlug(slug) {
  return FPV_PRODUCTS_DATA.find((p) => p.slug === slug) || null;
}

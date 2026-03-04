// Ecosystem hardware catalog based on Autel Robotics product pages:
// Dragonfish Nest, Dragonfish Repeater, ASAT, Smart Controller V3/V2.

export const ECOSYSTEM_PRODUCTS_DATA = [
  {
    slug: "dragonfish-nest",
    key: "ecosystem_dragonfish_nest",
    name: "Autel Dragonfish Nest",
    nameKey: "ecosystem_catalog.dragonfish_nest.name",
    descKey: "ecosystem_catalog.dragonfish_nest.desc",
    shortLabel: "Dragonfish Nest",
    image: "/ecosystem/dragonfish_nest.png",
    youtubeId: "",
    description:
      "Автоматизированная платформа для непрерывной работы БПЛА Dragonfish: автоматический взлёт/посадка, замена питания и погодный мониторинг для автономных инспекций на больших территориях.",
    specs: [
      { label: "Тип системы", value: "Станция удалённых операций для серии Dragonfish" },
      { label: "Режимы работы", value: "Автономный, полуавтономный, удалённое пилотирование" },
      { label: "Функции", value: "Авто взлёт и посадка, хранение, замена и зарядка батарей" },
      { label: "Диапазон температур", value: "-35 °C до +50 °C (≈ -31 °F до +122 °F)" },
      { label: "Защита", value: "Степень защиты IP54, стойкость к пыли, влаге и коррозии" },
      { label: "Питание", value: "Встроенный UPS, три комплекта батарей, интеллектуальная замена" },
      { label: "Мониторинг среды", value: "Температура, влажность, ветер, осадки" },
      { label: "Видеонаблюдение", value: "Внутренние и внешние камеры для контроля станции и борта" },
      { label: "Интеграция", value: "Автоматический обмен данными с Autel Integrated Command System" },
      { label: "Сценарии", value: "Пограничный контроль, ЛЭП, трубопроводы, карьеры и др." },
    ],
    highlights: [
      "Полностью автоматизированный цикл полёта: взлёт, миссия, возврат, замена батарей и хранение.",
      "Непрерывная работа 24/7 с резервным питанием и интеллектуальной системой питания.",
      "Интегрированный погодный и ситуационный мониторинг для безопасных удалённых полётов.",
      "Масштабирование через сеть из нескольких Nest-станций и ретрансляторов.",
    ],
  },
  {
    slug: "dragonfish-repeater",
    key: "ecosystem_dragonfish_repeater",
    name: "Dragonfish Repeater",
    nameKey: "ecosystem_catalog.dragonfish_repeater.name",
    descKey: "ecosystem_catalog.dragonfish_repeater.desc",
    shortLabel: "Repeater",
    image: "/ecosystem/dragonfish_repeater.png",
    youtubeId: "",
    description:
      "Ретранслятор для увеличения дальности связи и создания сетевой инфраструктуры для Dragonfish и Dragonfish Nest с автономным питанием от солнечных панелей.",
    specs: [
      { label: "Назначение", value: "Удлинение радиолинии и сети для Dragonfish/Nest" },
      { label: "Архитектура", value: "Модуль направленных и всенаправленных антенн" },
      { label: "Связь", value: "HD-видеотрансляция 1080p 30fps, задержка ~210 мс" },
      { label: "Сеть", value: "Самоорганизующаяся mesh-сеть из нескольких ретрансляторов" },
      { label: "Питание", value: "Солнечные панели + внутренняя батарея 100 Wh" },
      { label: "Время автономной работы", value: "До 30 дней в режиме ожидания без солнца" },
      { label: "Обслуживание", value: "Низкие требования к обслуживанию, удалённый мониторинг" },
      { label: "Мониторинг", value: "Встроенный 4G‑модуль для удалённого контроля и пробуждения" },
      { label: "Диапазон", value: "До 17 км (~10.6 миль) между базовыми станциями" },
      { label: "Применения", value: "Реки, трафик, ЛЭП, пожаротушение и спасательные операции" },
    ],
    highlights: [
      "Создаёт масштабируемую сеть связи для удалённых миссий Dragonfish.",
      "Автономная работа за счёт солнечных панелей и высокоёмкой батареи.",
      "Устойчивая HD‑передача изображения в условиях сильных помех.",
      "Минимальные требования к обслуживанию — «установил и забыл».",
    ],
  },
  {
    slug: "asat",
    key: "ecosystem_asat",
    name: "Autel Smart Antenna Transmission (ASAT)",
    nameKey: "ecosystem_catalog.asat.name",
    descKey: "ecosystem_catalog.asat.desc",
    shortLabel: "ASAT",
    image: "/ecosystem/asat.png",
    youtubeId: "",
    description:
      "Лёгкий переносной антенный комплекс, объединяющий несколько антенн в одну станцию для увеличения дальности связи до 45 км и повышения помехоустойчивости.",
    specs: [
      { label: "Назначение", value: "Базовая станция передачи данных для платформ Autel" },
      { label: "Дальность связи", value: "До 45 км (28 миль) в оптимальных условиях" },
      { label: "Скорость передачи", value: "До 70 Мбит/с в режиме MIMO на малых дистанциях" },
      { label: "Конфигурация антенн", value: "Комбинация направленных и всенаправленных антенн" },
      { label: "Позиционирование", value: "Два RTK‑модуля для сантиметровой точности" },
      { label: "Питание", value: "Встроенная батарея с временем работы до 15 часов" },
      { label: "Конструкция", value: "Ударопрочный корпус, степень защиты IP54" },
      { label: "Развёртывание", value: "Быстрая установка на автомобили, суда и мобильные посты" },
      { label: "Интеграция", value: "Совместим с серией Dragonfish и наземной станцией Autel" },
    ],
    highlights: [
      "Расширяет радиус операций до десятков километров с высокой помехоустойчивостью.",
      "Поддерживает мобильное развёртывание на машинах, катерах и передовых позициях.",
      "Сантиметровая точность позиционирования за счёт двойного RTK.",
      "Длительное время автономной работы и быстрая замена батареи.",
    ],
  },
  {
    slug: "smart-controller-v3",
    key: "ecosystem_smart_controller_v3",
    name: "Autel Smart Controller V3",
    nameKey: "ecosystem_catalog.smart_controller_v3.name",
    descKey: "ecosystem_catalog.smart_controller_v3.desc",
    shortLabel: "Smart Controller V3",
    image: "/ecosystem/smart_controller_v3.png",
    youtubeId: "",
    description:
      "Профессиональный пульт управления с 7.9\" сверхярким дисплеем 2000 нит, дальностью до 15 км и временем работы до 4 часов.",
    specs: [
      { label: "Дисплей", value: "7.9\" QHD, 2048×1536, яркость до 2000 нит" },
      { label: "Время работы", value: "До 4 часов, быстрая зарядка ~2 часа" },
      { label: "Аккумулятор", value: "Li‑ion 5800 мА·ч, 67 Wh" },
      { label: "Диапазон температур", value: "-20 °C до +40 °C (рабочий), до +45 °C (зарядка)" },
      { label: "Дальность передачи", value: "До 15 км (FCC), до 8 км (CE/SRRC)" },
      { label: "Яркость", value: "В 4 раза ярче обычного смартфона" },
      { label: "Память", value: "128 ГБ встроенной памяти" },
      { label: "Процессор", value: "8‑ядерный SoC, воспроизведение 4K/60fps" },
      { label: "Интерфейсы", value: "HDMI, USB‑A, USB‑C, съёмные антенны SMA" },
      { label: "Защита", value: "Степень защиты IP43" },
    ],
    highlights: [
      "Сверхяркий экран 2000 нит для работы под прямым солнцем.",
      "До 9+ миль (15 км) устойчивой передачи видео SkyLink 2.0.",
      "Длительное время работы и быстрая зарядка для полевых смен.",
      "Руггеризированный корпус и IP‑защита для сложных условий.",
    ],
  },
  {
    slug: "smart-controller-v2",
    key: "ecosystem_smart_controller_v2",
    name: "Autel Smart Controller V2",
    nameKey: "ecosystem_catalog.smart_controller_v2.name",
    descKey: "ecosystem_catalog.smart_controller_v2.desc",
    shortLabel: "Smart Controller V2",
    image: "/ecosystem/smart_controller_v2.png",
    youtubeId: "",
    description:
      "Предыдущее поколение умного пульта Autel с 7.9\" дисплеем 2000 нит, дальностью до 13 км и временем работы до 4.5 часов.",
    specs: [
      { label: "Дисплей", value: "7.9\" Ultra‑HD, 2048×1536, 2000 нит" },
      { label: "Время работы", value: "До 4.5 часов, зарядка около 2 часов" },
      { label: "Аккумулятор", value: "Li‑ion 5800 мА·ч, 67 Wh" },
      { label: "Дальность передачи", value: "До 13 км (FCC), до 7 км (CE)" },
      { label: "Процессор", value: "8‑ядерный Samsung Exynos 8895" },
      { label: "Память", value: "128 ГБ встроенной памяти" },
      { label: "Интерфейсы", value: "HDMI, USB‑A, USB‑C, сменные антенны SMA" },
      { label: "Рабочий диапазон температур", value: "-20 °C до +40 °C" },
      { label: "Поддерживаемые платформы", value: "Серия EVO II / Enterprise / RTK" },
    ],
    highlights: [
      "Сверхяркий экран и длительное время работы для полевых задач.",
      "Надёжная HD‑передача изображения на дистанцию до 13 км.",
      "Интеграция с семейством дронов EVO II и Enterprise.",
      "Прочный корпус и удобная эргономика для ежедневной эксплуатации.",
    ],
  },
];

export function getEcosystemProducts() {
  return ECOSYSTEM_PRODUCTS_DATA;
}

export function getEcosystemProductBySlug(slug) {
  return ECOSYSTEM_PRODUCTS_DATA.find((p) => p.slug === slug) || null;
}

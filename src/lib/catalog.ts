import type { Category, Product } from "@/types/product";

/**
 * Local placeholder catalog, shaped to match the planned Sanity schema
 * (`category` / `product` document types). Every getter is async so this
 * module can be swapped for a real `next-sanity` fetch layer (see
 * sanity/schemaTypes and sanity/lib/client.ts) without changing callers.
 */

const CATEGORIES: Category[] = [
  {
    slug: "vizitki",
    title: "Визитные карточки",
    description:
      "Классические и дизайнерские визитки — от офисной печати до тиснения фольгой.",
  },
  {
    slug: "knigi",
    title: "Книги",
    description:
      "Мягкая и твёрдая обложка, фотокниги, годовые отчёты — любые тиражи от 20 экземпляров.",
  },
  {
    slug: "broshyury",
    title: "Брошюры и буклеты",
    description: "Евробуклеты, каталоги, многостраничные брошюры на скрепке.",
  },
  {
    slug: "listovki",
    title: "Листовки",
    description: "Рекламные листовки А4/А5/А6 для промо-акций и рассылок.",
  },
  {
    slug: "kalendari",
    title: "Календари",
    description: "Настенные, настольные, квартальные и карманные календари с корпоративным дизайном.",
  },
  {
    slug: "upakovka",
    title: "Упаковка и подарочная продукция",
    description:
      "Пакеты, подарочные коробки и упаковка с индивидуальным дизайном для брендов и мероприятий.",
  },
  {
    slug: "bloknoty",
    title: "Блокноты и канцелярия",
    description: "Блокноты, ежедневники и канцелярская продукция с фирменным дизайном.",
  },
];

const PRODUCTS: Product[] = [
  {
    slug: "klassicheskie-vizitki",
    categorySlug: "vizitki",
    title: "Классические визитки",
    shortDescription: "Плотная мелованная бумага, полноцветная печать с двух сторон.",
    description:
      "Универсальный вариант для повседневной работы: плотная мелованная бумага 300–350 г/м², матовое или глянцевое покрытие, полноцветная печать с одной или двух сторон.",
    priceFrom: 990,
    priceUnit: "за тираж 100 шт.",
    options: [
      { label: "Бумага", value: "мелованная 300 г/м² / 350 г/м²" },
      { label: "Покрытие", value: "матовое, глянцевое, без покрытия" },
      { label: "Стороны печати", value: "1 сторона, 2 стороны" },
    ],
    minOrderQty: 100,
    turnaroundTime: "1–2 рабочих дня",
    isFeatured: true,
  },
  {
    slug: "soft-touch-vizitki",
    categorySlug: "vizitki",
    title: "Визитки soft-touch",
    shortDescription: "Бархатистая ламинация soft-touch, приятная на ощупь.",
    description:
      "Визитки с ламинацией soft-touch — бархатистая на ощупь поверхность, устойчивая к отпечаткам пальцев. Часто выбирают для премиальных брендов и частных специалистов.",
    priceFrom: 2490,
    priceUnit: "за тираж 100 шт.",
    options: [
      { label: "Бумага", value: "картон 350 г/м²" },
      { label: "Ламинация", value: "soft-touch матовая" },
      { label: "Доп. отделка", value: "конгрев, тиснение фольгой" },
    ],
    minOrderQty: 100,
    turnaroundTime: "3–4 рабочих дня",
    isFeatured: true,
  },
  {
    slug: "dizaynerskiy-karton",
    categorySlug: "vizitki",
    title: "Визитки на дизайнерском картоне",
    shortDescription: "Текстурный картон, тиснение и высокая печать.",
    description:
      "Фактурный дизайнерский картон (лён, перламутр, крафт) в сочетании с тиснением фольгой или высокой печатью — для запоминающегося первого впечатления.",
    priceFrom: 3990,
    priceUnit: "за тираж 100 шт.",
    options: [
      { label: "Картон", value: "лён, перламутр, крафт" },
      { label: "Отделка", value: "тиснение фольгой, высокая печать" },
    ],
    minOrderQty: 50,
    turnaroundTime: "4–6 рабочих дней",
  },
  {
    slug: "myagkaya-oblozhka",
    categorySlug: "knigi",
    title: "Книга в мягкой обложке",
    shortDescription: "Клеевое скрепление, офсетная бумага для основного блока.",
    description:
      "Экономичный формат для тиражей от 20 экземпляров: клеевое бесшовное скрепление (КБС), плотная обложка, офсетная бумага 80–100 г/м² для внутренних страниц.",
    priceFrom: 890,
    priceUnit: "за экземпляр (тираж 50+)",
    options: [
      { label: "Скрепление", value: "КБС (клеевое бесшовное)" },
      { label: "Бумага блока", value: "офсет 80 г/м² / 100 г/м²" },
      { label: "Обложка", value: "картон 250 г/м², ламинация" },
    ],
    minOrderQty: 20,
    turnaroundTime: "5–7 рабочих дней",
    isFeatured: true,
  },
  {
    slug: "tverdyy-pereplyot",
    categorySlug: "knigi",
    title: "Книга в твёрдом переплёте",
    shortDescription: "Шитьё блока нитью, ламинированная обложка, тиснение.",
    description:
      "Премиальный формат для подарочных изданий, годовых отчётов и каталогов: шитьё блока нитью для долговечности, твёрдая ламинированная обложка, возможно тиснение фольгой.",
    priceFrom: 1490,
    priceUnit: "за экземпляр (тираж 30+)",
    options: [
      { label: "Скрепление", value: "шитьё нитью" },
      { label: "Обложка", value: "твёрдая №7БЦ, ламинация, тиснение" },
      { label: "Бумага блока", value: "офсет 100 г/м² / мелованная 130 г/м²" },
    ],
    minOrderQty: 30,
    turnaroundTime: "7–10 рабочих дней",
  },
  {
    slug: "diplomy-i-sertifikaty",
    categorySlug: "knigi",
    title: "Дипломы и сертификаты",
    shortDescription: "Твёрдые обложки для дипломов, сертификатов и наградных документов.",
    description:
      "Печать и переплёт дипломов, сертификатов и наградных папок — твёрдая обложка с тиснением герба или логотипа фольгой. Печатали тиражи для вузов и корпоративных наградных программ.",
    priceFrom: 180,
    priceUnit: "за экземпляр (тираж 100+)",
    options: [
      { label: "Обложка", value: "твёрдая, тиснение фольгой" },
      { label: "Формат", value: "А4" },
    ],
    minOrderQty: 100,
    turnaroundTime: "5–7 рабочих дней",
    image: "/images/gp-diplomas-msu.jpg",
  },
  {
    slug: "evrobuklet",
    categorySlug: "broshyury",
    title: "Евробуклет (лифлет)",
    shortDescription: "Три сложения, компактный формат для промо-материалов.",
    description:
      "Стандартный рекламный буклет со сложением втрое (евросложение) — компактно помещается в конверт формата DL, удобен для раздачи на мероприятиях.",
    priceFrom: 1990,
    priceUnit: "за тираж 100 шт.",
    options: [
      { label: "Формат", value: "А4 со сложением втрое" },
      { label: "Бумага", value: "мелованная 130 г/м² / 170 г/м²" },
    ],
    minOrderQty: 100,
    turnaroundTime: "2–3 рабочих дня",
    isFeatured: true,
  },
  {
    slug: "katalog-a4",
    categorySlug: "broshyury",
    title: "Каталог А4 на скрепке",
    shortDescription: "Многостраничный каталог, скрепление на скобу.",
    description:
      "Многостраничный каталог продукции или услуг, скрепление на металлическую скобу, полноцветная печать по всему изданию.",
    priceFrom: 350,
    priceUnit: "за экземпляр (тираж 50+)",
    options: [
      { label: "Объём", value: "от 8 до 48 страниц" },
      { label: "Скрепление", value: "на скобу" },
    ],
    minOrderQty: 50,
    turnaroundTime: "4–5 рабочих дней",
    image: "/images/gp-brochures-spbgpu.jpg",
  },
  {
    slug: "reklamnye-broshyury",
    categorySlug: "broshyury",
    title: "Рекламные брошюры",
    shortDescription: "Многостраничные рекламные брошюры для презентаций и промо-кампаний.",
    description:
      "Многостраничные рекламные брошюры для маркетинговых кампаний и презентаций продукции — печатали такие тиражи для фармацевтических и потребительских брендов.",
    priceFrom: 250,
    priceUnit: "за экземпляр (тираж 200+)",
    options: [
      { label: "Объём", value: "от 8 до 32 страниц" },
      { label: "Скрепление", value: "на скобу" },
    ],
    minOrderQty: 200,
    turnaroundTime: "4–6 рабочих дней",
    image: "/images/gp-pharma-brochures.jpg",
  },
  {
    slug: "reklamnaya-listovka",
    categorySlug: "listovki",
    title: "Рекламная листовка А5",
    shortDescription: "Яркая полноцветная печать для промо-акций.",
    description:
      "Односторонняя или двусторонняя листовка формата А5 — быстрый и недорогой инструмент для акций, открытий и рассылок.",
    priceFrom: 690,
    priceUnit: "за тираж 100 шт.",
    options: [
      { label: "Формат", value: "А4, А5, А6" },
      { label: "Бумага", value: "мелованная 130 г/м²" },
    ],
    minOrderQty: 100,
    turnaroundTime: "1 рабочий день",
  },
  {
    slug: "nastennyy-kalendar",
    categorySlug: "kalendari",
    title: "Настенный календарь",
    shortDescription: "Перекидной календарь на пружине с фирменным дизайном.",
    description:
      "Перекидной настенный календарь на пружине, 12 листов, с логотипом и фирменным стилем компании — популярный подарок клиентам к Новому году.",
    priceFrom: 450,
    priceUnit: "за экземпляр (тираж 50+)",
    options: [
      { label: "Формат", value: "А3, А2" },
      { label: "Крепление", value: "пружина, европодвес" },
    ],
    minOrderQty: 50,
    turnaroundTime: "5–7 рабочих дней",
  },
  {
    slug: "kvartalnyy-kalendar",
    categorySlug: "kalendari",
    title: "Квартальный календарь",
    shortDescription: "Три календарных блока на одной подложке с рекламным полем.",
    description:
      "Классический офисный квартальный календарь — три блока на общей подложке с местом под логотип и рекламный слоган.",
    priceFrom: 90,
    priceUnit: "за экземпляр (тираж 100+)",
    options: [
      { label: "Подложка", value: "картон, пластик" },
      { label: "Блоки", value: "стандартные, увеличенные" },
    ],
    minOrderQty: 100,
    turnaroundTime: "5–7 рабочих дней",
  },
  {
    slug: "nastolnyy-kalendar",
    categorySlug: "kalendari",
    title: "Настольный календарь-домик",
    shortDescription: "Компактный настольный календарь на пружине или скобе.",
    description:
      "Настольный календарь-домик — удобный формат для рабочего стола, часто заказывают как подарок партнёрам и клиентам к Новому году.",
    priceFrom: 150,
    priceUnit: "за экземпляр (тираж 50+)",
    options: [
      { label: "Крепление", value: "пружина, скоба" },
      { label: "Формат", value: "А5, А6" },
    ],
    minOrderQty: 50,
    turnaroundTime: "5–7 рабочих дней",
  },
  {
    slug: "karmannyy-kalendar",
    categorySlug: "kalendari",
    title: "Карманный календарь",
    shortDescription: "Карманный календарь-визитка на весь год.",
    description:
      "Карманный календарь размером с визитку — недорогой сувенир с высоким тиражом, часто заказывают вместе с визитками.",
    priceFrom: 25,
    priceUnit: "за экземпляр (тираж 500+)",
    options: [
      { label: "Бумага", value: "мелованная 300 г/м²" },
      { label: "Покрытие", value: "матовое, глянцевое" },
    ],
    minOrderQty: 500,
    turnaroundTime: "3–5 рабочих дней",
  },
  {
    slug: "podarochnyy-paket",
    categorySlug: "upakovka",
    title: "Подарочный пакет с индивидуальным дизайном",
    shortDescription: "Плотная дизайнерская бумага, ленты-ручки, тиснение логотипа.",
    description:
      "Подарочные пакеты с индивидуальным дизайном под бренд или мероприятие — плотная бумага, тканевые ручки, тиснение фольгой. Печатали такие тиражи для медийных персон и известных брендов.",
    priceFrom: 150,
    priceUnit: "за экземпляр (тираж 100+)",
    options: [
      { label: "Бумага", value: "плотная дизайнерская, ламинация" },
      { label: "Ручки", value: "лента, шнур, высечные" },
      { label: "Отделка", value: "тиснение фольгой, конгрев" },
    ],
    minOrderQty: 100,
    turnaroundTime: "7–10 рабочих дней",
    isFeatured: true,
    image: "/images/gp-gift-bag.jpg",
  },
  {
    slug: "podarochnaya-korobka",
    categorySlug: "upakovka",
    title: "Подарочная коробка",
    shortDescription: "Сборная коробка с логотипом под подарочные наборы.",
    description:
      "Сборные подарочные коробки под фирменные наборы и мерч — плотный картон, любые размеры, печать логотипа и тиснение.",
    priceFrom: 200,
    priceUnit: "за экземпляр (тираж 100+)",
    options: [
      { label: "Картон", value: "плотный мелованный, крафт" },
      { label: "Отделка", value: "тиснение, УФ-лак" },
    ],
    minOrderQty: 100,
    turnaroundTime: "7–10 рабочих дней",
  },
  {
    slug: "kraftovyy-bloknot",
    categorySlug: "bloknoty",
    title: "Блокнот на пружине",
    shortDescription: "Крафтовая или дизайнерская обложка, пружина, брендирование.",
    description:
      "Блокноты на пружине с крафтовой или дизайнерской обложкой — популярный подарок сотрудникам и клиентам с тиснением или печатью логотипа на обложке.",
    priceFrom: 120,
    priceUnit: "за экземпляр (тираж 100+)",
    options: [
      { label: "Обложка", value: "крафт-картон, дизайнерский картон" },
      { label: "Крепление", value: "пружина" },
    ],
    minOrderQty: 100,
    turnaroundTime: "5–7 рабочих дней",
    image: "/images/gp-notebooks-kraft.jpg",
  },
];

export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

export async function getCategory(slug: string): Promise<Category | undefined> {
  return CATEGORIES.find((c) => c.slug === slug);
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  if (!categorySlug) return PRODUCTS;
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export async function getProduct(
  categorySlug: string,
  slug: string,
): Promise<Product | undefined> {
  return PRODUCTS.find(
    (p) => p.categorySlug === categorySlug && p.slug === slug,
  );
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.isFeatured);
}

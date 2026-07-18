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
    description: "Настенные и настольные календари с корпоративным дизайном.",
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
      { label: "Обложка", value: "твёрдая, ламинация, тиснение" },
      { label: "Бумага блока", value: "офсет 100 г/м² / мелованная 130 г/м²" },
    ],
    minOrderQty: 30,
    turnaroundTime: "7–10 рабочих дней",
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

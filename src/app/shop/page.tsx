import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { getCategories, getFeaturedProducts, getProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Каталог услуг — Литера",
  description: "Визитки, книги, брошюры и другая полиграфия с ценами от и формой заявки.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const [categories, featured, allProducts, { service }] = await Promise.all([
    getCategories(),
    getFeaturedProducts(),
    getProducts(),
    searchParams,
  ]);

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Каталог услуг"
          title="Полиграфия для любых задач"
          description="Выберите категорию, чтобы увидеть варианты материалов, минимальный тираж и цены «от». Точный расчёт — по заявке ниже."
        />
      </Container>

      <Container className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/shop/${category.slug}`}
            className="group rounded-2xl border border-ink/10 bg-paper-dim p-6 transition-colors hover:border-accent/40"
          >
            <p className="font-display text-2xl text-ink">{category.title}</p>
            <p className="mt-2 text-sm text-ink-soft">{category.description}</p>
            <span className="mt-4 inline-block text-sm text-accent group-hover:underline">
              Смотреть варианты →
            </span>
          </Link>
        ))}
      </Container>

      {featured.length ? (
        <Container className="mt-20">
          <SectionHeading eyebrow="Популярное" title="Часто заказывают" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <Link
                key={`${product.categorySlug}-${product.slug}`}
                href={`/shop/${product.categorySlug}/${product.slug}`}
                className="rounded-2xl border border-ink/10 p-6 transition-colors hover:border-accent/40"
              >
                <p className="font-display text-xl text-ink">{product.title}</p>
                <p className="mt-2 text-sm text-ink-soft">
                  {product.shortDescription}
                </p>
                <p className="mt-4 font-mono text-sm text-ink">
                  от {product.priceFrom.toLocaleString("ru-RU")} ₽{" "}
                  <span className="text-ink-faint">{product.priceUnit}</span>
                </p>
              </Link>
            ))}
          </div>
        </Container>
      ) : null}

      <Container id="quote" className="mt-24 scroll-mt-24">
        <SectionHeading
          eyebrow="Заявка"
          title="Рассчитаем стоимость вашего тиража"
          description="Заполните форму — пришлём расчёт и цифровой макет на согласование в течение рабочего дня."
        />
        <div className="mt-8 max-w-2xl">
          <QuoteRequestForm
            services={allProducts.map((p) => ({ slug: p.slug, title: p.title }))}
            defaultService={service}
          />
        </div>
      </Container>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCategories, getCategory, getProducts } from "@/lib/catalog";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = await getCategory(slug);
  return {
    title: category ? `${category.title} — Литера` : "Категория не найдена",
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();

  const products = await getProducts(slug);

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <Link href="/shop" className="text-sm text-ink-soft hover:text-ink">
          ← Весь каталог
        </Link>
        <div className="mt-6">
          <SectionHeading eyebrow="Категория" title={category.title} description={category.description} />
        </div>
      </Container>

      <Container className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/shop/${slug}/${product.slug}`}
            className="flex flex-col rounded-2xl border border-ink/10 bg-paper-dim p-6 transition-colors hover:border-accent/40"
          >
            <p className="font-display text-xl text-ink">{product.title}</p>
            <p className="mt-2 flex-1 text-sm text-ink-soft">
              {product.shortDescription}
            </p>
            <p className="mt-4 font-mono text-sm text-ink">
              от {product.priceFrom.toLocaleString("ru-RU")} ₽{" "}
              <span className="text-ink-faint">{product.priceUnit}</span>
            </p>
          </Link>
        ))}
        {products.length === 0 ? (
          <p className="text-sm text-ink-soft">
            В этой категории пока нет позиций — свяжитесь с нами, чтобы обсудить задачу.
          </p>
        ) : null}
      </Container>
    </div>
  );
}

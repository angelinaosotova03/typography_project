import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { getCategory, getProduct, getProducts } from "@/lib/catalog";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = await getProduct(category, slug);
  return {
    title: product ? `${product.title} — Литера` : "Услуга не найдена",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const [category, product] = await Promise.all([
    getCategory(categorySlug),
    getProduct(categorySlug, slug),
  ]);

  if (!category || !product) notFound();

  return (
    <div className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href={`/shop/${categorySlug}`}
          className="text-sm text-ink-soft hover:text-ink"
        >
          ← {category.title}
        </Link>

        <h1 className="mt-6 font-display text-4xl leading-tight text-ink sm:text-5xl">
          {product.title}
        </h1>
        <p className="mt-4 text-lg text-ink-soft">{product.description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl border border-ink/10 bg-paper-dim p-6">
          <div>
            <p className="font-mono text-2xl text-ink">
              от {product.priceFrom.toLocaleString("ru-RU")} ₽
            </p>
            <p className="text-sm text-ink-faint">{product.priceUnit}</p>
          </div>
          <div className="h-10 w-px bg-ink/10" />
          <div>
            <p className="text-sm text-ink-soft">Минимальный тираж</p>
            <p className="text-sm text-ink">{product.minOrderQty} шт.</p>
          </div>
          <div className="h-10 w-px bg-ink/10" />
          <div>
            <p className="text-sm text-ink-soft">Срок изготовления</p>
            <p className="text-sm text-ink">{product.turnaroundTime}</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Варианты исполнения
          </p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {product.options.map((option) => (
              <div key={option.label}>
                <dt className="text-sm text-ink-soft">{option.label}</dt>
                <dd className="text-sm text-ink">{option.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12">
          <ButtonLink
            href={`/shop?service=${encodeURIComponent(product.title)}#quote`}
            size="lg"
          >
            Рассчитать стоимость →
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { OptionsPicker } from "@/components/shop/OptionsPicker";
import { ProductCTASection } from "@/components/shop/ProductCTASection";
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
  const [category, product, categoryProducts] = await Promise.all([
    getCategory(categorySlug),
    getProduct(categorySlug, slug),
    getProducts(categorySlug),
  ]);

  if (!category || !product) notFound();

  const related = categoryProducts.filter((p) => p.slug !== slug).slice(0, 3);

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

        <ProductGallery
          images={product.image ? [product.image] : []}
          alt={product.title}
        />

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
          <OptionsPicker options={product.options} />
        </div>

        <ProductCTASection
          productTitle={product.title}
          minOrderQty={product.minOrderQty}
        />
      </Container>

      {related.length ? (
        <Container className="mt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            Похожие товары
          </p>
          <div className="mt-6 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/shop/${categorySlug}/${item.slug}`}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-paper-dim transition-colors hover:border-accent/40"
              >
                {item.image ? (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      loading="eager"
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <p className="font-display text-xl text-ink">{item.title}</p>
                  <p className="mt-2 text-sm text-ink-soft">
                    {item.shortDescription}
                  </p>
                  <p className="mt-4 font-mono text-sm text-ink">
                    от {item.priceFrom.toLocaleString("ru-RU")} ₽{" "}
                    <span className="text-ink-faint">{item.priceUnit}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      ) : null}
    </div>
  );
}

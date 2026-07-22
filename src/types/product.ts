export type ProductOption = {
  label: string;
  value: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  categorySlug: string;
  title: string;
  shortDescription: string;
  description: string;
  priceFrom: number;
  priceUnit: string;
  options: ProductOption[];
  minOrderQty: number;
  turnaroundTime: string;
  isFeatured?: boolean;
  /** Path under /public, e.g. "/images/gp-brochures-spbgpu.jpg" */
  image?: string;
};

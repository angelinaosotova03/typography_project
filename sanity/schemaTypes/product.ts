// Reference shape for the future Sanity `product` document type.
// See ../README.md — convert to `defineType`/`defineField` from `sanity`
// once the project is connected. Field names mirror src/types/product.ts.
const product = {
  name: "product",
  title: "Товар / услуга",
  type: "document",
  fields: [
    { name: "title", title: "Название", type: "string", validation: "required" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    {
      name: "category",
      title: "Категория",
      type: "reference",
      to: [{ type: "category" }],
    },
    { name: "shortDescription", title: "Краткое описание", type: "text" },
    { name: "description", title: "Полное описание", type: "array", of: [{ type: "block" }] },
    {
      name: "images",
      title: "Изображения",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    { name: "priceFrom", title: "Цена от", type: "number" },
    { name: "priceUnit", title: "Единица цены", type: "string" },
    {
      name: "options",
      title: "Варианты исполнения",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Параметр", type: "string" },
            { name: "value", title: "Значение", type: "string" },
          ],
        },
      ],
    },
    { name: "minOrderQty", title: "Минимальный тираж", type: "number" },
    { name: "turnaroundTime", title: "Срок изготовления", type: "string" },
    { name: "isFeatured", title: "Показывать на лендинге", type: "boolean" },
    { name: "order", title: "Порядок сортировки", type: "number" },
    { name: "seoDescription", title: "SEO-описание", type: "text" },
  ],
};

export default product;

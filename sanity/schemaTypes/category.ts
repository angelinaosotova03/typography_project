// Reference shape for the future Sanity `category` document type.
// See ../README.md — convert to `defineType`/`defineField` from `sanity`
// once the project is connected. Field names mirror src/types/product.ts.
const category = {
  name: "category",
  title: "Категория",
  type: "document",
  fields: [
    { name: "title", title: "Название", type: "string", validation: "required" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "description", title: "Описание", type: "text" },
    { name: "coverImage", title: "Обложка", type: "image", options: { hotspot: true } },
    { name: "order", title: "Порядок сортировки", type: "number" },
  ],
};

export default category;

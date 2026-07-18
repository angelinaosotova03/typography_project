// Reference shape for the future Sanity `lead` document type — captures
// quote-request form submissions so the manager sees them in the same
// Studio used to edit the catalog. See ../README.md and
// src/lib/validation/leadSchema.ts (the client/server validation this
// mirrors) and src/app/api/lead/route.ts (where this would be written).
const lead = {
  name: "lead",
  title: "Заявка",
  type: "document",
  fields: [
    { name: "name", title: "Имя", type: "string" },
    { name: "phone", title: "Телефон", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "service", title: "Услуга", type: "string" },
    { name: "quantity", title: "Тираж", type: "string" },
    { name: "message", title: "Сообщение", type: "text" },
    { name: "createdAt", title: "Дата заявки", type: "datetime" },
    {
      name: "status",
      title: "Статус",
      type: "string",
      options: { list: ["новая", "в работе", "обработана"] },
    },
  ],
};

export default lead;

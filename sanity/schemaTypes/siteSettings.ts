// Reference shape for the future Sanity `siteSettings` singleton — lets the
// manager edit contacts/hero copy without a developer touching code.
// See ../README.md.
const siteSettings = {
  name: "siteSettings",
  title: "Настройки сайта",
  type: "document",
  __singleton: true,
  fields: [
    { name: "heroTitle", title: "Заголовок на главной", type: "string" },
    { name: "heroSubtitle", title: "Подзаголовок на главной", type: "text" },
    { name: "phone", title: "Телефон", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "address", title: "Адрес", type: "string" },
    {
      name: "socialLinks",
      title: "Соцсети",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Название", type: "string" },
            { name: "url", title: "Ссылка", type: "url" },
          ],
        },
      ],
    },
  ],
};

export default siteSettings;

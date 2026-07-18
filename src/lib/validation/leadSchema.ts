import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Введите имя"),
  phone: z
    .string()
    .trim()
    .min(10, "Введите телефон для связи")
    .regex(/^[+()0-9\s-]+$/, "Телефон должен содержать только цифры и + ( ) -"),
  email: z
    .string()
    .trim()
    .email("Введите корректный email")
    .optional()
    .or(z.literal("")),
  service: z.string().trim().min(1, "Выберите услугу"),
  quantity: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(5, "Опишите задачу подробнее"),
  consent: z
    .boolean()
    .refine((v) => v === true, {
      message: "Необходимо согласие на обработку персональных данных",
    }),
  // honeypot: must stay empty; bots that fill every field trip this
  company: z.string().trim().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

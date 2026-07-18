"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { leadSchema, type LeadInput } from "@/lib/validation/leadSchema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";

export function QuoteRequestForm({
  services,
  defaultService,
}: {
  services: { slug: string; title: string }[];
  defaultService?: string;
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: defaultService ?? "",
      quantity: "",
      message: "",
      consent: false,
      company: "",
    },
  });

  const onSubmit = async (data: LeadInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      reset({ ...data, name: "", phone: "", email: "", quantity: "", message: "", consent: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4 rounded-2xl border border-ink/10 bg-paper-dim p-6 sm:p-8"
      noValidate
    >
      {/* honeypot — hidden from real users, catches naive bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-ink-soft">Имя</label>
          <input className={inputClasses} {...register("name")} />
          {errors.name ? (
            <p className="mt-1 text-xs text-accent">{errors.name.message}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1.5 block text-sm text-ink-soft">Телефон</label>
          <input
            className={inputClasses}
            placeholder="+7 ("
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-accent">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-ink-soft">
            Email (необязательно)
          </label>
          <input className={inputClasses} {...register("email")} />
          {errors.email ? (
            <p className="mt-1 text-xs text-accent">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1.5 block text-sm text-ink-soft">Услуга</label>
          <select className={inputClasses} {...register("service")}>
            <option value="">Выберите услугу</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p className="mt-1 text-xs text-accent">{errors.service.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-ink-soft">
          Тираж (необязательно)
        </label>
        <input
          className={inputClasses}
          placeholder="например, 500 шт."
          {...register("quantity")}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-ink-soft">
          Опишите задачу
        </label>
        <textarea
          rows={4}
          className={cn(inputClasses, "resize-none")}
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-accent">{errors.message.message}</p>
        ) : null}
      </div>

      <label className="flex items-start gap-2.5 text-xs text-ink-soft">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-ink/30"
          {...register("consent")}
        />
        <span>
          Согласен(на) на обработку персональных данных в соответствии с{" "}
          <Link href="/privacy" className="underline hover:text-ink">
            политикой конфиденциальности
          </Link>
          .
        </span>
      </label>
      {errors.consent ? (
        <p className="-mt-2 text-xs text-accent">{errors.consent.message}</p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2">
        {isSubmitting ? "Отправляем…" : "Отправить заявку"}
      </Button>

      {status === "success" ? (
        <p className="text-sm text-ink">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-accent">
          Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.
        </p>
      ) : null}
    </form>
  );
}

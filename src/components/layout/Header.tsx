"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/#process", label: "Как мы работаем" },
  { href: "/shop", label: "Услуги" },
  { href: "/#work", label: "Работы" },
  { href: "/#contact", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl"
        >
          Литера<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/shop#quote" size="md">
            Оставить заявку
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink-soft hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/shop#quote" className="mt-2 w-full">
              Оставить заявку
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

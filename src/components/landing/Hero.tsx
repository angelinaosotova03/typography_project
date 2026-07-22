"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FloatingBadge } from "@/components/ui/FloatingBadge";
import { HeroVisual } from "@/components/landing/HeroVisual";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-block rounded-full border border-ink/15 bg-paper-dim px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
          >
            Типография полного цикла с 2010 года
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-6 font-display text-[13vw] leading-[0.95] text-ink sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            Печатаем то,
            <br />
            что держат <span className="text-accent">в руках</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-md text-lg text-ink-soft"
          >
            Визитные карточки, книги, брошюры и другая полиграфия — от
            тиража в 50 экземпляров до промышленной печати. Расчитаем
            стоимость и покажем макет до запуска в печать.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="/shop" size="lg">
              Смотреть каталог услуг
            </ButtonLink>
            <ButtonLink href="/shop#quote" size="lg" variant="ghost">
              Рассчитать стоимость
            </ButtonLink>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <HeroVisual />

          <FloatingBadge className="-left-4 top-4 hidden sm:block">
            <p className="font-mono text-2xl text-ink">24ч</p>
            <p className="text-xs text-ink-soft">срочная печать визиток</p>
          </FloatingBadge>

          <FloatingBadge className="-right-2 bottom-10 hidden sm:block">
            <p className="font-mono text-2xl text-ink">13 479</p>
            <p className="text-xs text-ink-soft">выполненных заказов</p>
          </FloatingBadge>
        </div>
      </Container>

      <TrustBar />
    </section>
  );
}

const TRUSTED_BY = [
  "Кофейня «Зёрна»",
  "Бюро «Формат»",
  "Йога-студия «Дыхание»",
  "Ресторан «Тесто»",
  "Издательство «Слово»",
];

const STATS = [
  { value: "16 лет", label: "на рынке полиграфии" },
  { value: "50%", label: "клиентов работают с нами 15+ лет" },
  { value: "от 10 000 ₽", label: "минимальная сумма заказа" },
];

function TrustBar() {
  return (
    <Container className="mt-20">
      <div className="grid grid-cols-1 gap-8 border-y border-ink/10 py-8 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl text-ink">{stat.value}</p>
            <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
        Нам доверяют печать
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {TRUSTED_BY.map((name) => (
          <span
            key={name}
            className="font-display text-lg text-ink-faint sm:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </Container>
  );
}

"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function CTAToShop() {
  return (
    <section className="border-t border-ink/10 bg-paper-dim py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-8 text-center">
        <motion.h2
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl font-display text-4xl leading-tight sm:text-5xl"
        >
          Готовы обсудить свой тираж?
        </motion.h2>
        <p className="max-w-lg text-ink-soft">
          Загляните в каталог услуг — там цены «от», сроки изготовления и
          форма заявки с расчётом стоимости под ваш заказ.
        </p>
        <ButtonLink href="/shop" size="lg">
          Перейти в каталог услуг →
        </ButtonLink>
      </Container>
    </section>
  );
}

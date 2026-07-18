"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import handPen from "../../../public/images/hand-pen.jpg";

const STEPS = [
  {
    n: "01",
    title: "Заявка",
    text: "Оставляете заявку на сайте или звоните — уточняем тираж, материалы и сроки.",
  },
  {
    n: "02",
    title: "Расчёт и макет",
    text: "Присылаем расчёт стоимости и цифровой макет на согласование в течение дня.",
  },
  {
    n: "03",
    title: "Печать",
    text: "Печатаем тираж на собственном оборудовании и контролируем цвет на каждом листе.",
  },
  {
    n: "04",
    title: "Доставка",
    text: "Забираете тираж в шоуруме или получаете доставку курьером по городу.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-ink/10 bg-ink py-24 text-paper sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Как мы работаем"
          title="Четыре шага от идеи до тиража"
          align="center"
          className="mx-auto text-paper [&_p]:text-paper/60 [&_span]:text-accent"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-paper/10 p-6"
            >
              {i === 1 ? (
                <div className="mb-4 h-14 w-14 overflow-hidden rounded-xl border border-paper/10 bg-paper">
                  <Image
                    src={handPen}
                    alt="Разработка макета вручную"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
              <p className="font-mono text-sm text-accent">{step.n}</p>
              <p className="mt-4 font-display text-xl">{step.title}</p>
              <p className="mt-2 text-sm text-paper/60">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

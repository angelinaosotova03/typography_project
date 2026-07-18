"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import magazineStack from "../../../public/images/magazine-stack.jpg";

/**
 * Brochures section: real photography with a restrained scroll-reveal,
 * replacing the earlier three-panel CSS mockup — see plan's
 * "Дизайн-ревизия" section for why.
 */
export function BrochureReveal() {
  return (
    <section className="border-t border-ink/10 bg-paper py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Брошюры и буклеты"
          title={
            <>
              Складываются в кармане,
              <br />
              раскрываются на столе
            </>
          }
          description="Буклеты, лифлеты и брошюры любой фальцовки — от простого евробуклета до сложных многостраничных раскладок. Пришлём цифровой макет перед печатью тиража."
          className="order-2 lg:order-1"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="order-1 relative mx-auto aspect-[800/852] w-full max-w-sm overflow-hidden rounded-3xl border border-ink/10 bg-paper-dim shadow-[0_25px_60px_-20px_rgba(27,23,18,0.35)] lg:order-2"
        >
          <Image
            src={magazineStack}
            alt="Стопка журналов и брошюр — образец печати брошюр"
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}

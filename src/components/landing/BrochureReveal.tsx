"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import magazineStack from "../../../public/images/magazine-stack-cutout.png";

/**
 * Brochures section: real photography, background removed so it sits
 * directly on the page instead of inside a bordered panel.
 *
 * NOTE: this specific source photo carries a faint "Dreamstime" stock
 * watermark — kept as a temporary placeholder per an explicit call with
 * the client; swap for a licensed/clean photo (or a real client job)
 * before this goes fully public. See plan's "Дизайн-ревизия" section.
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
          className="order-1 relative mx-auto w-full max-w-xs sm:max-w-sm lg:order-2"
        >
          <Image
            src={magazineStack}
            alt="Стопка журналов и брошюр — образец печати брошюр"
            sizes="(min-width: 1024px) 380px, 80vw"
            className="h-auto w-full drop-shadow-[0_25px_35px_rgba(27,23,18,0.28)]"
          />
        </motion.div>
      </Container>
    </section>
  );
}

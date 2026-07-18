"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import bookStackVintage from "../../../../public/images/book-stack-vintage-cutout.png";

/**
 * Books section: real photography, background removed so it sits directly
 * on the section's paper tone instead of inside a bordered panel, with a
 * restrained scroll-reveal (fade + rise) — see plan's "Дизайн-ревизия"
 * section for why this replaced the earlier CSS "cover flip" mockup.
 */
export function BookOpen() {
  return (
    <section className="border-t border-ink/10 bg-paper-dim py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <Image
            src={bookStackVintage}
            alt="Стопка книг в переплёте — образец печати книг"
            sizes="(min-width: 1024px) 380px, 80vw"
            className="h-auto w-full drop-shadow-[0_25px_35px_rgba(33,38,58,0.25)]"
          />
        </motion.div>

        <SectionHeading
          eyebrow="Книги и каталоги"
          title={
            <>
              От рукописи до
              <br />
              переплетённого тиража
            </>
          }
          description="Печатаем книги, каталоги и годовые отчёты любых форматов — от мягкой обложки до твёрдого переплёта с тиснением. Подбираем бумагу и переплёт под задачу и бюджет."
        />
      </Container>
    </section>
  );
}

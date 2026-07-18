"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import bookStackVintage from "../../../../public/images/book-stack-vintage.jpg";

/**
 * Books section: real photography with a restrained scroll-reveal
 * (fade + rise), replacing the earlier CSS "cover flip" + skeleton-line
 * mockup — see plan's "Дизайн-ревизия" section for why.
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
          className="relative mx-auto aspect-[1000/1051] w-full max-w-sm overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-[0_25px_60px_-20px_rgba(27,23,18,0.35)]"
        >
          <Image
            src={bookStackVintage}
            alt="Стопка книг в переплёте — образец печати книг"
            fill
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover"
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

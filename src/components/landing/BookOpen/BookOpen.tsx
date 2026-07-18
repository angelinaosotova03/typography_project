"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const coverVariants = {
  closed: { rotateY: 0 },
  open: {
    rotateY: -148,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const pageVariants = {
  closed: { opacity: 0, x: -8 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.35 },
  },
};

/**
 * Book "opening" section. CSS 3D rotateY fallback triggered on scroll-into-view
 * (see plan: interim approach until real photography of a physical book being
 * opened can drive a scroll-scrubbed video instead).
 */
export function BookOpen() {
  return (
    <section className="border-t border-ink/10 bg-paper-dim py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="closed"
          whileInView="open"
          viewport={{ once: true, amount: 0.5 }}
          className="relative mx-auto aspect-[4/3] w-full max-w-md"
          style={{ perspective: 1600 }}
        >
          {/* pages underneath */}
          <motion.div
            variants={pageVariants}
            className="absolute inset-4 rounded-lg bg-paper p-6 shadow-inner"
          >
            <div className="grid h-full grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <div className="h-2 w-3/4 rounded-full bg-ink/15" />
                <div className="h-2 w-full rounded-full bg-ink/10" />
                <div className="h-2 w-5/6 rounded-full bg-ink/10" />
                <div className="h-2 w-2/3 rounded-full bg-ink/10" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-2 w-2/3 rounded-full bg-ink/15" />
                <div className="h-2 w-full rounded-full bg-ink/10" />
                <div className="h-2 w-4/5 rounded-full bg-ink/10" />
                <div className="h-2 w-3/4 rounded-full bg-ink/10" />
              </div>
            </div>
          </motion.div>

          {/* front cover, hinges open along the left edge (the spine) */}
          <motion.div
            variants={coverVariants}
            style={{ transformOrigin: "left center" }}
            className="absolute inset-0 flex flex-col justify-between rounded-lg bg-ink p-7 text-paper shadow-[0_25px_60px_-20px_rgba(27,23,18,0.55)]"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
              твёрдый переплёт
            </p>
            <div>
              <p className="font-display text-3xl leading-tight">
                Годовой отчёт
                <br />
                в печатном виде
              </p>
              <p className="mt-3 text-sm text-paper/60">
                144 страницы · офсет 130 г/м²
              </p>
            </div>
          </motion.div>
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

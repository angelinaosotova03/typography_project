"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const panelVariants = {
  folded: (i: number) => ({
    rotateY: i === 0 ? 0 : i === 1 ? 140 : -140,
    opacity: i === 0 ? 1 : 0.4,
  }),
  unfolded: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const PANELS = [
  { title: "Обложка", note: "мелованная бумага, УФ-лак" },
  { title: "Разворот", note: "полноцветная печать 4+4" },
  { title: "Задняя панель", note: "QR-код и контакты" },
];

/**
 * Tri-fold brochure "unfolding" section — a second, distinct scroll-triggered
 * flip in addition to BookOpen, per the plan's landing sections.
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
          initial="folded"
          whileInView="unfolded"
          viewport={{ once: true, amount: 0.5 }}
          className="order-1 mx-auto flex aspect-[3/2] w-full max-w-md items-stretch gap-1 lg:order-2"
          style={{ perspective: 1400 }}
        >
          {PANELS.map((panel, i) => (
            <motion.div
              key={panel.title}
              custom={i}
              variants={panelVariants}
              style={{ transformOrigin: i === 2 ? "left center" : "right center" }}
              className={`flex flex-1 flex-col justify-between rounded-lg p-4 shadow-[0_18px_40px_-18px_rgba(27,23,18,0.4)] ${
                i === 1 ? "bg-accent text-paper" : "bg-ink text-paper"
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                {panel.title}
              </p>
              <p className="text-xs opacity-80">{panel.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

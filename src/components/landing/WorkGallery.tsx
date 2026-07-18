"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Placeholder tiles until real photos of finished print jobs are supplied —
// see plan's "Контент/ассеты" section.
const WORKS = [
  { label: "Визитки · soft-touch", tone: "bg-ink" },
  { label: "Брошюра · евробуклет", tone: "bg-accent" },
  { label: "Книга · твёрдый переплёт", tone: "bg-paper-deep" },
  { label: "Визитки · дизайнерская бумага", tone: "bg-paper-deep" },
  { label: "Каталог · А4", tone: "bg-ink" },
  { label: "Открытки · тиснение", tone: "bg-accent" },
];

export function WorkGallery() {
  return (
    <section id="work" className="border-t border-ink/10 bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Наши работы"
          title="Немного из того, что мы напечатали"
          description="Реальные примеры тиражей появятся здесь после фотосъёмки — сейчас это демонстрационная раскладка."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {WORKS.map((work, i) => (
            <motion.div
              key={work.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`flex aspect-[4/5] flex-col justify-end rounded-2xl p-4 ${work.tone}`}
            >
              <p
                className={`text-sm ${
                  work.tone === "bg-paper-deep" ? "text-ink" : "text-paper"
                }`}
              >
                {work.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

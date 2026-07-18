"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import businessCardsMockup from "../../../public/images/business-cards-mockup.jpg";
import bookStackVintage from "../../../public/images/book-stack-vintage.jpg";
import magazineStack from "../../../public/images/magazine-stack.jpg";
import handPen from "../../../public/images/hand-pen.jpg";

// Reference photography until real photos of finished client jobs are
// supplied — see plan's "Контент/ассеты" section. Honest captions below,
// no fabricated placeholder tiles (see plan's "Дизайн-ревизия" section).
const WORKS: { label: string; image: StaticImageData }[] = [
  { label: "Визитные карточки", image: businessCardsMockup },
  { label: "Книги в переплёте", image: bookStackVintage },
  { label: "Брошюры и журналы", image: magazineStack },
  { label: "Индивидуальный макет", image: handPen },
];

export function WorkGallery() {
  return (
    <section id="work" className="border-t border-ink/10 bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Наши работы"
          title="Немного из того, что мы напечатали"
          description="Референсные фото материалов и отделки — реальные примеры выполненных тиражей появятся здесь после фотосъёмки."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {WORKS.map((work, i) => (
            <motion.div
              key={work.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-paper-dim"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={work.image}
                  alt={work.label}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="px-3 py-2.5 text-sm text-ink">{work.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

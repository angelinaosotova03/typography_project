"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import businessCardsMockup from "../../../public/images/business-cards-mockup.jpg";
import bookStackVintage from "../../../public/images/book-stack-vintage.jpg";
import diplomasMsu from "../../../public/images/gp-diplomas-msu.jpg";
import brochuresSpbgpu from "../../../public/images/gp-brochures-spbgpu.jpg";
import pharmaBrochures from "../../../public/images/gp-pharma-brochures.jpg";
import giftBag from "../../../public/images/gp-gift-bag.jpg";
import notebooksKraft from "../../../public/images/gp-notebooks-kraft.jpg";

// Mix of reference photography (business cards, book stack) and real
// completed jobs from the shop's own portfolio (diplomas, brochures,
// gift bag, notebooks) — see plan's "Наполнение реальным контентом" section.
const WORKS: { label: string; image: StaticImageData }[] = [
  { label: "Визитные карточки", image: businessCardsMockup },
  { label: "Книги в переплёте", image: bookStackVintage },
  { label: "Дипломы и сертификаты", image: diplomasMsu },
  { label: "Брошюры и каталоги", image: brochuresSpbgpu },
  { label: "Рекламные брошюры", image: pharmaBrochures },
  { label: "Подарочная упаковка", image: giftBag },
  { label: "Блокноты", image: notebooksKraft },
];

export function WorkGallery() {
  return (
    <section id="work" className="border-t border-ink/10 bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Наши работы"
          title="Немного из того, что мы напечатали"
          description="Материалы, отделка и реальные примеры выполненных тиражей — от визиток и дипломов до упаковки и блокнотов."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {WORKS.map((work, i) => (
            <motion.div
              key={work.label}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-paper-dim"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={work.image}
                  alt={work.label}
                  fill
                  loading="eager"
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

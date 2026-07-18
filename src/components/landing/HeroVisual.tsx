"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import businessCardsMockup from "../../../public/images/business-cards-mockup.jpg";

/**
 * Hero visual: real business-card photography in a paper-toned frame,
 * with a restrained entrance (fade/scale) rather than the fabricated
 * CSS card-fan this replaced — see plan's "Дизайн-ревизия" section.
 * The genuine physical dynamism (cards actually fanning) stays a later
 * upgrade once real turntable photo/video of the deck exists.
 */
export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
      className="relative overflow-hidden rounded-3xl border border-ink/10 bg-paper-dim p-3 shadow-[0_30px_70px_-30px_rgba(33,38,58,0.4)] sm:p-4"
    >
      <div className="relative aspect-[735/500] w-full overflow-hidden rounded-2xl">
        <Image
          src={businessCardsMockup}
          alt="Визитные карточки на плотной бумаге — образец печати"
          fill
          sizes="(min-width: 1024px) 480px, 90vw"
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}

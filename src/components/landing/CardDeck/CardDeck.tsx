"use client";

import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useReducedMotion,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { Card } from "@/components/landing/CardDeck/Card";
import { useCardFan } from "@/components/landing/CardDeck/useCardFan";

const CARD_COUNT = 5;

/**
 * Scroll-triggered "deck of business cards" hero visual.
 *
 * Built with CSS 3D transforms + Framer Motion as the interim approach —
 * per the plan, the realistic upgrade path is replacing this with a
 * scroll-scrubbed video/frame sequence of an actual physical card deck
 * being fanned out, once that footage has been shot. The layout, scroll
 * wiring, and reduced-motion fallback below are written so that swap
 * only touches this file.
 */
export function CardDeck() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  // prefers-reduced-motion: skip scroll-scrubbing entirely and render the
  // fully fanned end-state as a static value.
  const staticFanned = useMotionValue(1);
  const progress: MotionValue<number> = prefersReducedMotion
    ? staticFanned
    : spring;

  return (
    <div
      ref={ref}
      className="relative h-full w-full"
      style={{ perspective: 1200 }}
    >
      {Array.from({ length: CARD_COUNT }).map((_, index) => (
        <CardWithFan
          key={index}
          index={index}
          total={CARD_COUNT}
          progress={progress}
        />
      ))}
    </div>
  );
}

function CardWithFan({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { rotate, x, y } = useCardFan(progress, index, total);
  return <Card index={index} rotate={rotate} x={x} y={y} zIndex={index} />;
}

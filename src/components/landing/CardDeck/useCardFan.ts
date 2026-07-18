import { MotionValue, useTransform } from "framer-motion";

export type CardFanTransform = {
  rotate: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

/**
 * Maps scroll progress (0 -> 1) to a single card's fan-out position.
 * index 0 is the top card of the stack; higher index fans further out.
 *
 * This is the CSS-transform stand-in described in the plan. Once real
 * turntable photography of the card deck exists, this hook's output can
 * be replaced by a scroll-driven video/frame index without touching the
 * surrounding layout components.
 */
export function useCardFan(
  progress: MotionValue<number>,
  index: number,
  total: number,
): CardFanTransform {
  const spread = (index - (total - 1) / 2) / total;

  const rotate = useTransform(progress, [0, 1], [0, spread * 140]);
  const x = useTransform(progress, [0, 1], [0, spread * 260]);
  const y = useTransform(
    progress,
    [0, 1],
    [index * 3, Math.abs(spread) * -60 + index * 2],
  );

  return { rotate, x, y };
}

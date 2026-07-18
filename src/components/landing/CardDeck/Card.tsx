"use client";

import { motion, MotionValue } from "framer-motion";

const PALETTE = ["bg-paper", "bg-ink", "bg-accent"] as const;

export function Card({
  index,
  rotate,
  x,
  y,
  zIndex,
}: {
  index: number;
  rotate: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  zIndex: number;
}) {
  const tone = PALETTE[index % PALETTE.length];
  const isLight = tone === "bg-paper";

  return (
    <motion.div
      style={{ rotate, x, y, zIndex }}
      className={`absolute left-1/2 top-1/2 h-[62%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border ${
        isLight ? "border-ink/15" : "border-transparent"
      } ${tone} p-4 shadow-[0_18px_40px_-16px_rgba(27,23,18,0.45)]`}
    >
      <div
        className={`flex h-full flex-col justify-between ${
          isLight ? "text-ink" : "text-paper"
        }`}
      >
        <div>
          <p className="font-display text-base leading-tight">Литера.</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest opacity-60">
            печать визиток
          </p>
        </div>
        <div className="font-mono text-[10px] opacity-60">
          мелованная 300 г/м² · soft-touch
        </div>
      </div>
    </motion.div>
  );
}

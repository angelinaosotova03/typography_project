"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Orchestrates the landing -> shop route transition (and back). Keyed on
 * pathname so AnimatePresence treats each route as an entering/exiting tree;
 * exit plays the "cards flying off" cross-fade+lift, entry settles in.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

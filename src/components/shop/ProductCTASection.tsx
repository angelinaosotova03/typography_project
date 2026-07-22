"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Quantity stepper + "Рассчитать стоимость" CTA, sharing state so the
 * chosen quantity is carried into the quote form via the query string
 * (see /shop/page.tsx reading `qty` into QuoteRequestForm's defaultQuantity).
 */
export function ProductCTASection({
  productTitle,
  minOrderQty,
}: {
  productTitle: string;
  minOrderQty: number;
}) {
  const [qty, setQty] = useState(minOrderQty);
  const step = minOrderQty >= 100 ? 50 : minOrderQty >= 20 ? 10 : 1;

  const href = `/shop?service=${encodeURIComponent(productTitle)}&qty=${qty}#quote`;

  return (
    <div className="mt-12 flex flex-wrap items-center gap-6">
      <div>
        <p className="mb-1.5 text-sm text-ink-soft">Тираж</p>
        <div className="flex items-center gap-3 rounded-full border border-ink/15 px-2 py-1.5">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(minOrderQty, q - step))}
            aria-label="Уменьшить тираж"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:bg-paper-dim hover:text-ink"
          >
            <Minus size={16} />
          </button>
          <span className="min-w-14 text-center font-mono text-sm text-ink">
            {qty.toLocaleString("ru-RU")}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + step)}
            aria-label="Увеличить тираж"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:bg-paper-dim hover:text-ink"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <ButtonLink href={href} size="lg">
        Рассчитать стоимость →
      </ButtonLink>
    </div>
  );
}

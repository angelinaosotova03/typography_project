"use client";

import { useState } from "react";
import type { ProductOption } from "@/types/product";
import { cn } from "@/lib/utils";

function splitValues(value: string): string[] {
  return value
    .split(/,|\//)
    .map((v) => v.trim())
    .filter(Boolean);
}

/**
 * Renders each option's values as tappable chips instead of a plain list —
 * a lighter version of the swatch/variant pickers on product pages like the
 * client's reference. Purely a browsing aid (highlights what you tap): some
 * option groups are true alternatives (paper weight) and some are
 * combinable finishes (embossing + lamination), so this stays a toggle
 * rather than a hard single-select to avoid implying either is exclusive.
 */
export function OptionsPicker({ options }: { options: ProductOption[] }) {
  return (
    <dl className="mt-4 grid gap-5 sm:grid-cols-2">
      {options.map((option) => (
        <OptionGroup key={option.label} option={option} />
      ))}
    </dl>
  );
}

function OptionGroup({ option }: { option: ProductOption }) {
  const values = splitValues(option.value);
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <dt className="text-sm text-ink-soft">{option.label}</dt>
      <dd className="mt-2 flex flex-wrap gap-2">
        {values.map((value, i) => (
          <button
            key={value}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            className={cn(
              "rounded-full border px-3 py-1.5 text-sm transition-colors",
              selected === i
                ? "border-accent bg-accent/10 text-ink"
                : "border-ink/15 text-ink-soft hover:border-ink/30",
            )}
          >
            {value}
          </button>
        ))}
      </dd>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Product image with a thumbnail strip — thumbnails only render when a
 * product has more than one photo, so single-photo products (most of the
 * catalog today) just show the plain image with no empty gallery chrome.
 */
export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const src = images[active] ?? images[0];

  if (!src) return null;

  return (
    <div className="mt-8">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-ink/10">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 720px, 90vw"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 ? (
        <div className="mt-3 flex gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Показать фото ${i + 1}`}
              aria-current={i === active}
              className={`relative h-16 w-20 overflow-hidden rounded-lg border transition-colors ${
                i === active ? "border-accent" : "border-ink/15 hover:border-ink/30"
              }`}
            >
              <Image src={img} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

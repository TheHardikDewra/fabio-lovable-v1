import { useState } from "react";
import galleryHero from "@/assets/gallery-hero.png";
import galleryPlaque from "@/assets/gallery-plaque.png";
import galleryIngredients from "@/assets/gallery-ingredients.jpeg";
import galleryTimeline from "@/assets/gallery-timeline.png";
import galleryResults from "@/assets/gallery-results.jpeg";
import galleryStudies from "@/assets/gallery-studies.png";
import galleryReview from "@/assets/gallery-review.png";
import galleryGuarantee from "@/assets/gallery-guarantee.png";

const IMAGES = [
  galleryHero,
  galleryPlaque,
  galleryIngredients,
  galleryTimeline,
  galleryResults,
  galleryStudies,
  galleryReview,
  galleryReview,
  galleryReview,
  galleryGuarantee,
];

export function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full">
      <div className="relative -mx-4 sm:mx-0 sm:rounded-lg overflow-hidden bg-soft-pink">
        <div className="w-full aspect-square">
          <img
            src={IMAGES[active]}
            alt="Product hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-3 flex gap-1.5 sm:gap-2 px-4 sm:px-0 -mx-4 sm:mx-0 pb-1 overflow-x-auto">
        {IMAGES.map((src, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActive(idx)}
            className={`flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-lg border-2 overflow-hidden transition-colors ${
              active === idx ? "border-rose-deep" : "border-border"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

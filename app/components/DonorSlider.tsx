"use client";

import { useState } from "react";

const donors = [
  ["/images/donors/edmund-rice-foundation.png", "Edmund Rice Foundation"],
  ["/images/donors/misean-cara.jpg", "Misean Cara"],
  ["/images/donors/edmund-rice-network.jpg", "Edmund Rice Network"],
] as const;

export function DonorSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((activeIndex - 1 + donors.length) % donors.length);
  };

  const showNext = () => {
    setActiveIndex((activeIndex + 1) % donors.length);
  };

  const visibleDonors = [0, 1, 2].map(
    (offset) => donors[(activeIndex + offset) % donors.length],
  );

  return (
    <div className="donor-slider" aria-label="Key donors and partners">
      <button
        className="donor-arrow donor-arrow-previous"
        type="button"
        aria-label="Previous donor"
        onClick={showPrevious}
      >
        ←
      </button>

      <div className="donor-track">
        {visibleDonors.map(([src, name]) => (
          <div className="donor-slide" key={src}>
            <img src={src} alt={name} loading="eager" decoding="async" />
          </div>
        ))}
      </div>

      <button
        className="donor-arrow donor-arrow-next"
        type="button"
        aria-label="Next donor"
        onClick={showNext}
      >
        →
      </button>

      <div className="donor-dots" aria-label="Choose donor">
        {donors.map(([src, name], index) => (
          <button
            key={src}
            type="button"
            aria-label={`Show ${name}`}
            aria-current={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

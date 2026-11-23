"use client";

import { useState } from "react";

const tabs = ["Photos", "Videos", "Posters"] as const;
type GalleryTab = (typeof tabs)[number];

export function GalleryTabs() {
  const [activeTab, setActiveTab] = useState<GalleryTab>("Photos");
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    ["01-menstrual-support.jpg", "Menstrual support"],
    ["02-community-camps.jpg", "Community camps"],
    ["03-school-mentorship.jpg", "School mentorship"],
    ["04-child-learning.jpg", "Child learning"],
    ["05-youth-mentorship.jpg", "Youth mentorship"],
    ["06-community-environment.jpg", "Community environment"],
    ["07-school-girls.jpg", "School girls"],
    ["08-school-boys.jpg", "Positive masculinity"],
    ["09-young-mothers.jpg", "Young mothers"],
    ["10-persons-with-disabilities.jpg", "Disability inclusion"],
    ["11-clemencia.jpg", "Clemencia's livelihood journey"],
    ["12-savings-lending.jpg", "SILC savings and lending"],
    ["13-child-rights.jpg", "Child rights"],
    ["14-girls-rights.jpg", "Girls' rights"],
    ["15-gender-equality.jpg", "Gender equality"],
    ["16-environmental-care.jpg", "Environmental care"],
  ] as const;

  const videos = [
    ["zutoP1zJAHI", "YouTube Feature 1"],
    ["f2IagOTREg8", "YouTube Feature 2"],
    ["sheA9KAl0OE", "YouTube Feature 3"],
    ["MrUpiKNMa-A", "YouTube Feature 4"],
  ] as const;

  const posters = [
    ["CHILD-SAFEGUARDING-POLICY.jpg", "Child safeguarding policy"],
    ["GIRL-POWER.png", "Girl power"],
    ["GO-GIRL-YOU-CAN.png", "Go girl, you can"],
    ["MARIAS-SAFETY-NETWORK-1.jpg", "Maria's safety network"],
    ["SHAOING-FUTURES.png", "Shaping futures"],
    ["SHE-MOTIVATE.png", "She motivate"],
    ["TALKING-ABOUT-PERIODS-IS-NOT-SHAMEFUL.jpg", "Talking about periods"],
    [
      "TIPS-TO-MOTIVATE-YOUR-CHILD-TO-LEARN.jpg",
      "Tips for motivating children",
    ],
    ["UNLEASH-HER-POTENTIAL.png", "Unleash her potential"],
    ["WE-CAN-DO-IT.png", "We can do it"],
    ["WOMEN-EMPOWER-WOMEN.png", "Women empower women"],
    ["women's-day-design.png", "Women's Day"],
  ] as const;

  return (
    <div>
      <div className="section-heading">
        <div>
          <p className="eyebrow dark">Gallery</p>
          <h2>See community action in practice.</h2>
        </div>
        <div
          className="gallery-tabs"
          role="tablist"
          aria-label="Gallery sections"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls={`gallery-panel-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "Photos" && (
        <div className="gallery-slideshow" id="gallery-panel-photos" role="tabpanel" aria-label="Photo slideshow">
          <button
            className="gallery-slide-arrow previous"
            type="button"
            aria-label="Previous photo"
            onClick={() => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length)}
          >
            ←
          </button>
          <div className="gallery-slide-frame">
            <img
              src={`/images/gallery/photos/${photos[photoIndex][0]}`}
              alt={photos[photoIndex][1]}
              loading="eager"
              decoding="async"
            />
          </div>
          <button
            className="gallery-slide-arrow next"
            type="button"
            aria-label="Next photo"
            onClick={() => setPhotoIndex((photoIndex + 1) % photos.length)}
          >
            →
          </button>
          <div className="gallery-dots" aria-label="Choose photo">
            {photos.map(([filename, alt], index) => (
              <button
                key={filename}
                type="button"
                aria-label={`Show photo ${index + 1}: ${alt}`}
                aria-current={photoIndex === index}
                onClick={() => setPhotoIndex(index)}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === "Posters" && (
        <div className="poster-grid" id="gallery-panel-posters" role="tabpanel" aria-label="Posters">
          {posters.map(([filename, caption]) => (
            <figure key={filename}>
              <img
                src={`/images/gallery/posters/${filename}`}
                alt={caption}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      )}

      {activeTab === "Videos" && (
        <div className="video-grid" id="gallery-panel-videos" role="tabpanel">
          {videos.map(([videoId, title]) => (
            <article className="video-card" key={videoId}>
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title={title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

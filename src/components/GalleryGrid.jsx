"use client";

import { useState } from "react";

const looks = [
  { category: "Bridal", image: "/images/she-red-bride.webp", title: "The Maharani Edit", className: "portrait" },
  { category: "Soft Glam", image: "/images/she-makeup-skin.webp", title: "Barely-there radiance", className: "portrait" },
  { category: "Hair", image: "/images/she-makeup-hair.webp", title: "Gloss and movement", className: "portrait" },
  { category: "Bridal", image: "/images/she-makeup-hero.webp", title: "Champagne bride", className: "wide" },
  { category: "Behind the scenes", image: "/images/she-artist-at-work.webp", title: "The quiet before", className: "wide" },
  { category: "Studio", image: "/images/she-salon-interior.webp", title: "Inside She", className: "wide" },
  { category: "Soft Glam", image: "/images/she-makeup-skin.webp", title: "Skin first", className: "square crop-left" },
  { category: "Bridal", image: "/images/she-red-bride.webp", title: "Wine & gold", className: "square crop-top" },
  { category: "Hair", image: "/images/she-makeup-hair.webp", title: "Signature waves", className: "square crop-top" },
];

const filters = ["All", "Bridal", "Soft Glam", "Hair", "Studio"];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? looks : looks.filter((look) => active === "Studio" ? ["Studio", "Behind the scenes"].includes(look.category) : look.category === active);

  return (
    <>
      <div className="gallery-filters" aria-label="Filter gallery">
        {filters.map((filter) => (
          <button className={active === filter ? "active" : ""} type="button" onClick={() => setActive(filter)} key={filter}>{filter}</button>
        ))}
      </div>
      <div className="lookbook-grid">
        {visible.map((look, index) => (
          <figure className={`lookbook-card ${look.className}`} key={`${look.title}-${index}`}>
            <img src={look.image} alt={look.title} />
            <figcaption><span>{look.category}</span><strong>{look.title}</strong></figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

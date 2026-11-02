"use client";

import "./Gallery.css";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Inside Our Workshop",
    category: "Workshop",
    image: "/images/gallery/workshop-owner.webp",
    alt: "Sultan Brothers workshop owner beside industrial diesel generator equipment",
    description: "Our workshop and engineering environment.",
  },
  {
    id: 2,
    title: "Diesel Engine Repair",
    category: "Repair",
    image: "/images/gallery/engine-repair.webp",
    alt: "Diesel engine repair and inspection inside a generator workshop",
    description: "Hands-on diesel engine repair work.",
  },
  {
    id: 3,
    title: "Complete Engine Overhauling",
    category: "Overhauling",
    image: "/images/gallery/engine-overhauling.webp",
    alt: "Industrial diesel engine undergoing mechanical overhauling",
    description: "Engine components and overhaul work.",
  },
  {
    id: 4,
    title: "Generator Inspection",
    category: "Repair",
    image: "/images/gallery/generator-inspection.webp",
    alt: "Industrial diesel generator inspection and mechanical checking",
    description: "Inspection of generator equipment.",
  },
  {
    id: 5,
    title: "Engine Components",
    category: "Overhauling",
    image: "/images/gallery/engine-components.webp",
    alt: "Diesel engine components and mechanical spare parts",
    description: "Mechanical components and equipment.",
  },
  {
    id: 6,
    title: "Generator Collection",
    category: "Generators",
    image: "/images/gallery/generator-collection.webp",
    alt: "Industrial diesel generator sets at a power engineering workshop",
    description: "Industrial diesel generator equipment.",
  },
];

const categories = ["All", "Workshop", "Repair", "Overhauling", "Generators"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const closeLightbox = () => setSelectedImage(null);

  const showNext = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id,
    );

    const nextIndex = (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id,
    );

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        {/* SECTION HEADING */}

        <motion.div
          className="gallery-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gallery-eyebrow">
            <Images size={15} />
            OUR WORKSHOP & EQUIPMENT
          </span>

          <h2>
            A Closer Look at
            <span> Our Work</span>
          </h2>

          <p>
            Explore our generator equipment, workshop environment and diesel
            engine engineering activities.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}

        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.button
                layout
                key={item.id}
                type="button"
                className={`gallery-card gallery-card-${item.id}`}
                onClick={() => setSelectedImage(item)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="gallery-image"
                  />

                  <div className="gallery-image-overlay">
                    <span className="gallery-category">{item.category}</span>

                    <span className="gallery-expand">
                      <ArrowUpRight size={19} />
                    </span>

                    <div className="gallery-card-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CTA */}

        <motion.div
          className="gallery-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span>LOOKING FOR GENERATOR SOLUTIONS?</span>
            <h3>Let's Discuss Your Requirements.</h3>
          </div>

          <a href="#contact" className="gallery-contact-btn">
            Contact Sultan Brothers
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* IMAGE LIGHTBOX */}

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close image"
              >
                <X size={25} />
              </button>

              <button
                className="lightbox-previous"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={27} />
              </button>

              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="lightbox-image">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    fill
                    sizes="90vw"
                    className="lightbox-photo"
                  />
                </div>

                <div className="lightbox-caption">
                  <span>{selectedImage.category}</span>
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </div>
              </motion.div>

              <button
                className="lightbox-next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={27} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

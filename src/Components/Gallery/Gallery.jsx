import React, { useRef, useState } from "react";
import { useGalleryAnimation } from "../Hooks/useGalleryAnimation.js";
import { galleryItems } from "../../data/galleryData.js";
import Masonry from "../Masonry/Mansonry.jsx";
import GalleryHeader from "./GalleryHeader";
import GalleryButton from "./GalleryButton";
import GalleryBackground from "./GalleryBackground";

const Gallery = ({ initialCount = 12 }) => {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  useGalleryAnimation(sectionRef);

  const displayedItems = showAll
    ? galleryItems
    : galleryItems.slice(0, initialCount);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setTimeout(() => {
      const gallerySection = document.getElementById("Gallery");
      if (gallerySection) {
        window.scrollTo({
          top: gallerySection.offsetTop,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <section
      id="Gallery"
      ref={sectionRef}
      className="relative w-full flex flex-col items-center 
      bg-gradient-to-b from-[#f5f2ec] to-[#faf8f5] py-12 sm:py-16 md:py-24 
      px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
    >
      <GalleryBackground />

      <GalleryHeader />

      <div className="w-full sm:w-[90%] md:w-[90%] mb-8">
        <Masonry
          items={displayedItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.1}
          scaleOnHover={true}
          hoverScale={0.97}
          colorShiftOnHover={false}
        />
      </div>

      <GalleryButton
        showAll={showAll}
        onShowMore={handleShowMore}
        onShowLess={handleShowLess}
        hasMore={galleryItems.length > initialCount}
      />
    </section>
  );
};

export default Gallery;

import React from "react";
import TextType from "../TextType";

const GalleryHeader = () => {
  return (
    <div className="text-center mb-12 sm:mb-14 md:mb-16 px-2 sm:px-4">
      <h2 className="gallery-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
        Explore Our{" "}
        <span className="text-[#937A4B]">
          <TextType
            text={["Gallery", "Moments"]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor={true}
            loop={true}
          />
        </span>
      </h2>

      <p className="gallery-heading text-gray-600 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
        Step into the world of{" "}
        <span className="text-[#937A4B] font-semibold">
          Asansol Trekkers Club
        </span>{" "}
        — where every photograph tells a story of adventure, friendship, and
        nature's timeless beauty.
      </p>
    </div>
  );
};

export default GalleryHeader;

import React from "react";

const GalleryButton = ({ showAll, onShowMore, onShowLess, hasMore }) => {
  if (!hasMore && !showAll) return null;

  return (
    <div className="w-full flex justify-center pb-8">
      {!showAll ? (
        <button
          onClick={onShowMore}
          className="group relative px-8 py-4 bg-[#937A4B] text-white font-semibold text-lg rounded-full 
          shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#7a6340] 
          transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Show More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#937A4B] to-[#b89e6b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      ) : (
        <button
          onClick={onShowLess}
          className="group relative px-8 py-4 bg-gray-700 text-white font-semibold text-lg rounded-full 
          shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-800 
          transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">Show Less</span>
        </button>
      )}
    </div>
  );
};

export default GalleryButton;

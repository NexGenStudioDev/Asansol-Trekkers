import React from "react";

const GalleryBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse" />
    </>
  );
};

export default GalleryBackground;

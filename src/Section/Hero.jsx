import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import back from "../assets/back.jpg"; // rename your image properly

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      id="Home"
      className="relative w-full flex items-center justify-center bg-black"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Full rectangular image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={back}
          alt="Hero Background"
          className="max-w-full max-h-full object-contain"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
          25+ Years of Excellence <br className="hidden sm:block" />
          <span className="text-[#D0B77A]">
            in Rock Climbing & Adventurous Sports
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow">
          Discover breathtaking destinations with{" "}
          <span className="font-semibold">Asansol Trekkers Club</span>. Join us
          for unforgettable adventures from lush valleys to snow-capped peaks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center">
          <button className="bg-[#937A4B] hover:bg-[#a08552] text-white px-8 py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition duration-300 shadow-lg">
            Explore Now
          </button>
          <button className="bg-white text-[#937A4B] hover:bg-gray-100 px-8 py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

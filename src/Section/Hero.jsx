import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import back from "../assets/back.jpg";

const Hero = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Highlight heading with zoom animation
    gsap.fromTo(
      headingRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
    );

    // Animate subheading
    gsap.fromTo(
      subHeadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, delay: 1, duration: 1.2, ease: "power3.out" }
    );

    // Animate paragraph and buttons
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: 2, duration: 1.2, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      id="Home"
      className="relative w-full flex items-center justify-center bg-black overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background */}
      <img
        src={back}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 md:px-16">
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg"
        >
          <span className="text-[#FFD700] text-5xl sm:text-6xl md:text-7xl animate-pulse">
            25 Years
          </span>{" "}
          of Excellence
        </h1>

        {/* Subheading with spacing fix */}
        <h2
          ref={subHeadingRef}
          className="text-[#D0B77A] font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide mt-2"
        >
          in <span className="text-white">Rock Climbing</span> &{" "}
          <span className="text-white">Adventurous Sports</span>
        </h2>

        {/* Description and Buttons */}
        <div ref={contentRef} className="mt-8">
          <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Discover breathtaking destinations with{" "}
            <span className="font-semibold text-[#FFD700]">
              Asansol Trekkers Club
            </span>
            . Join us for unforgettable adventures from lush valleys to
            snow-capped peaks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#937A4B] hover:bg-[#a08552] text-white px-8 py-3 rounded-md text-base font-medium transition duration-300 shadow-lg">
              Explore Now
            </button>
            <button className="bg-white text-[#937A4B] hover:bg-gray-100 px-8 py-3 rounded-md text-base font-medium transition duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

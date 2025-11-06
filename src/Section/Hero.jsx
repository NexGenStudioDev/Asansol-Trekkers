import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0.2, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "power3.out" }
    );
  }, []);

  const toggleVideoPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="Home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image / Video */}
      <img
        src="https://static2.tripoto.com/media/filter/tst/img/765686/TripDocument/1564738457_1564738455215.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10 lg:px-16"
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
          25+ Years of Excellence <br className="hidden sm:block" />
          <span className="text-[#D0B77A]">in Trekking</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed drop-shadow">
          Discover breathtaking destinations with{" "}
          <span className="font-semibold">Asansol Trekkers</span>. Join us for
          unforgettable adventures — from lush valleys to snow-capped peaks.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8">
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

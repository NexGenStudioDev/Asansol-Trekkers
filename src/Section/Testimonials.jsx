import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaQuoteLeft } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Somnath Mukherjee",
      role: "B.Tech Student",
      message:
        "Being a beginner, I was nervous at first, but the Asansol Trekker team made everything easy and safe. The way they handle logistics and motivate you is impressive",
      image: "https://avatars.githubusercontent.com/u/176110876?v=4",
    },
    {
      name: "Abhishek Gupta",
      role: "Student",
      message:
        "Asansol Trekker gave me my first real taste of adventure! The team’s organization, safety, and energy were amazing. Every trek felt like a family trip filled with laughter and memories",
      image: "https://avatars.githubusercontent.com/u/122656682?v=4",
    },
    {
      name: "Anjali Tomar",
      role: "Student",
      message:
        "I joined Asansol Trekker to escape my routine life — now it’s become part of my lifestyle. Every journey reminds me that happiness lies in the mountains and good company.",
      image: "https://avatars.githubusercontent.com/u/160884550?v=4",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ Scroll animation with safe defaults
  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // ✅ Animate on slide change
  useEffect(() => {
    if (!testimonialRef.current) return;
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, [currentPage]);

  const handleNext = () => setCurrentPage((p) => (p + 1) % testimonials.length);
  const handlePrev = () =>
    setCurrentPage((p) => (p - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentPage];

  return (
    <section
      ref={sectionRef}
      id="Testimonials"
      className="relative z-10 bg-gray-50 py-16 sm:py-20 md:py-28"
    >
      {/* 🌤️ Background Glow */}
      <div className="absolute -top-10 -left-10 w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem] bg-[#E7DCC3]/40 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem] bg-[#b89e6b]/20 blur-3xl rounded-full pointer-events-none" />

      {/* 🧭 Section Heading */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#1E293B] leading-snug">
          What Our <span className="text-[#A2844E]">Adventurers Say</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Real stories from trekkers who turned their adventures with{" "}
          <span className="text-[#A2844E] font-semibold">Asansol Trekkers</span>{" "}
          into lifelong memories.
        </p>
      </div>

      {/* 🗣️ Testimonial Card */}
      <div
        ref={testimonialRef}
        className="relative z-10 w-[85%] max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
        p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-14 transition-transform duration-700 hover:scale-[1.02]"
      >
        {/* Text */}
        <div className="md:w-2/3 text-center md:text-left flex flex-col justify-center">
          <FaQuoteLeft className="text-[#A2844E]/60 text-3xl mb-3 md:mb-4 mx-auto md:mx-0" />
          <p className="text-gray-700 text-lg sm:text-xl italic mb-5 leading-relaxed">
            “{current.message}”
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#1E293B]">
            {current.name}
          </h3>
          <p className="text-[#A2844E] text-sm sm:text-base font-medium mt-1">
            {current.role}
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-[220px] sm:w-[260px] md:w-[300px] aspect-square bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 flex flex-col flex-row justify-center items-center gap-5 mt-12 sm:mt-14 px-4">
        <button
          onClick={handlePrev}
          className="bg-[#1E293B] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#A2844E] transition-all text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
        >
          ← Prev
        </button>

        <div className="flex gap-2 sm:gap-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                i === currentPage
                  ? "bg-[#A2844E] scale-125 shadow-md"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-[#1E293B] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#A2844E] transition-all text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

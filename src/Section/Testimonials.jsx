import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "../Components/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Student",
      message:
        "The courses offered were well structured and easy to follow. I’ve learned so much in just a few weeks!",
      image:
        "https://www.india.com/wp-content/uploads/2017/10/Bigg-Boss-Tamil-Winner-Arav-Aarav.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Teacher",
      message:
        "The platform is super intuitive, and my students absolutely love the interactive lessons!",
      image: "https://static.toiimg.com/photo/79283856.cms",
    },
    {
      name: "Rohan Gupta",
      role: "Parent",
      message:
        "I can easily track my child’s progress. The app makes learning fun and effective.",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialRef = useRef(null);
  const sectionRef = useRef(null);

  // Animate section when it scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // start when 80% of section enters viewport
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Animate testimonial card change
  useEffect(() => {
    if (!testimonialRef.current) return;

    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentPage(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentPage];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-linear-to-b from-[#f5f2ec] to-[#f9f7f4]"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* === Heading === */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <span className="text-[#1E293B]">Customer&nbsp;</span>
          <span className="text-[#A2844E]">Testimonials</span>
        </h2>

        <p className="text-gray-500 mb-12 text-base sm:text-lg">
          See what our happy learners have to say about their experience.
        </p>

        {/* === Testimonial Card === */}
        <div ref={testimonialRef}>
          <TestimonialCard
            image={current.image}
            message={current.message}
            name={current.name}
            role={current.role}
          />
        </div>

        {/* === Pagination Controls === */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="bg-[#1E293B] text-white px-4 py-2 rounded-full hover:bg-[#A2844E] transition-all"
          >
            Prev
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentPage ? "bg-[#A2844E]" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-[#1E293B] text-white px-4 py-2 rounded-full hover:bg-[#A2844E] transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

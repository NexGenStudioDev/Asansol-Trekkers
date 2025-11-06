import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TourCard from "../Components/TourCard";

const Team = () => {
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  const teamMembers = [
    {
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      title: "Sarah Johnson",
      label: "CEO",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614289371518-90e85b33e2cf?auto=format&fit=crop&w=800&q=80",
      title: "Emily Carter",
      label: "Marketing Head",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      title: "Jessica Adams",
      label: "Tour Manager",
    },
    {
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328a8f3a?auto=format&fit=crop&w=800&q=80",
      title: "Michael Lee",
      label: "Travel Consultant",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614289299404-65f83a3c1193?auto=format&fit=crop&w=800&q=80",
      title: "Olivia Brown",
      label: "Operations",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614289299404-65f83a3c1193?auto=format&fit=crop&w=800&q=80",
      title: "Olivia Brown",
      label: "Operations",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614289299404-65f83a3c1193?auto=format&fit=crop&w=800&q=80",
      title: "Olivia Brown",
      label: "Operations",
    },
    {
      image:
        "https://images.unsplash.com/photo-1614289299404-65f83a3c1193?auto=format&fit=crop&w=800&q=80",
      title: "Olivia Brown",
      label: "Operations",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const cards = carousel.querySelectorAll(".carousel-card");
    const totalWidth = carousel.scrollWidth / 2;

    // GSAP infinite scrolling animation
    const animation = gsap.to(cards, {
      x: `-=${totalWidth}`,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    animationRef.current = animation;

    // Pause on hover
    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.resume();

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      animation.kill();
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* === Heading === */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">
          <span className="text-[#1E293B]">Our&nbsp;</span>
          <span className="text-[#A2844E]">Team</span>
        </h2>

        <p className="text-gray-500 mb-12 text-base sm:text-lg">
          The passionate people who make your travel experiences unforgettable.
        </p>

        {/* === Carousel Wrapper (Wider: 92%) === */}
        <div className=" w-[85%] mx-auto">
          <div
            ref={carouselRef}
            className="flex gap-8  mx-8 sm:mx-12 cursor-pointer"
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="carousel-card flex-shrink-0 w-[300px] sm:w-[320px]"
              >
                <TourCard
                  image={member.image}
                  title={member.title}
                  label={member.label}
                  height="h-[400px]"
                  textAlign="center"
                  textSize="text-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

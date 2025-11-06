import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TourCard from "../Components/TourCard";

const Team = () => {
  const trackRef = useRef(null);
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
  ];

  useEffect(() => {
    const track = trackRef.current;

    const clones = track.innerHTML;
    track.innerHTML += clones;

    const totalWidth = track.scrollWidth / 2;

    const animation = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // seamless wrap
      },
    });

    animationRef.current = animation;

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.resume();

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
      animation.kill();
    };
  }, []);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#f9f7f4] to-[#f3efe9] overflow-hidden"
      id="Team"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-gray-800">Meet Our </span>
          <span className="text-[#A2844E]">Team</span>
        </h2>

        <p className="text-gray-600 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          Passionate travel experts dedicated to making your adventures
          unforgettable.
        </p>

        <div className="relative w-[90%] sm:w-[85%] mx-auto">
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-10 w-max"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] carousel-card"
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

      <div className="absolute top-0 left-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />
    </section>
  );
};

export default Team;

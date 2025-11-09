import React, { useRef, useEffect } from "react";
import TourCard from "../Components/TourCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BaliPassTrek from "../assets/img10.jpg";
// import dighaCoastal from "../assets/Coastal.png";
// import beroHills from "../assets/beroHill.png";
import ayodhyaHills from "../assets/ayodhyaHill.png";
import grp from "../assets/grp.jpg"; // ✅ background image import

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  // {
  //   name: "Chandipur to Digha Coastal Trek",
  //   img: dighaCoastal,
  //   tours: "1 trek completed",
  // },
  {
    name: "Amarnath Yatra",
    img: "https://i.pinimg.com/1200x/b7/2d/a6/b72da6962a0c68164c2b835cc948ab0b.jpg",
    tours: "2 treks completed",
  },
  // {
  //   name: "Bero Hill, Purulia",
  //   img: beroHills,
  //   tours: "3 treks completed",
  // },
  {
    name: "Ayodhya Hill, Purulia",
    img: ayodhyaHills,
    tours: "4 treks completed",
  },
  {
    name: "Bali Pass Trek",
    img: BaliPassTrek,
    tours: "2 treks completed",
  },
  {
    name: "Kedartal Trek",
    img: "https://i.pinimg.com/736x/fb/b9/79/fbb979be3cf6dbdaa257f0cc22525784.jpg",
    tours: "1 trek completed",
  },
];

const PopularDestinations = () => {
  const DestinationRef = useRef(null);

  useEffect(() => {
    gsap.to(DestinationRef.current, {
      scrollTrigger: {
        trigger: DestinationRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={DestinationRef}
      id="Destinations"
      className="relative w-full min-h-screen py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* === Background Image === */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20 brightness-[0.75]"
        style={{ backgroundImage: `url(${grp})` }}
      ></div>

      {/* === Soft Overlay for readability === */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* === Animated Background Glow === */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#E7DCC3]/30 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b89e6b]/20 blur-3xl rounded-full -z-10 animate-pulse delay-200" />

      {/* === Heading Section === */}
      <div className="text-center mb-16 max-w-2xl text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E7DCC3] leading-tight tracking-tight">
          Popular Destinations
        </h1>
        <p className="text-[1.1rem] mt-4 opacity-90">
          Explore our most visited and loved travel locations around the world 🌍
        </p>
      </div>

      {/* === Cards Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {destinations.map((destination, index) => (
          <TourCard
            key={index}
            image={destination.img}
            title={destination.name}
            label={destination.tours}
            height="h-[320px]"
            textAlign="left"
            textSize="text-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;

import React, { useRef, useEffect } from "react";
import TourCard from "../Components/TourCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BaliPassTrek from "../assets/img10.jpg";
import dighaCoastal from "../assets/Coastal.png";
import beroHills from "../assets/beroHill.png";
import ayodhyaHills from "../assets/ayodhyaHill.png";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    name: "Chandipur to Digha Coastal Trek",
    img: dighaCoastal,
    tours: "1 trek completed",
  },
  {
    name: "Amarnath Yatra",
    img: "https://i.pinimg.com/1200x/b7/2d/a6/b72da6962a0c68164c2b835cc948ab0b.jpg",
    tours: "2 treks completed",
  },
  {
    name: "Bero Hill, Purulia",
    img: beroHills,
    tours: "3 treks completed",
  },
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
      className="relative w-full min-h-screen 
       bg-gradient-to-b from-[#f5f2ec] to-[#faf8f5]  py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center overflow-hidden "
    >
      {/* === Heading Section === */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-black">Popular </span>
          <span className="text-[#937A4B]">Destinations</span>
        </h1>
        <p className="text-[1.1rem] mt-4 text-gray-700 opacity-90">
          Explore our most visited and loved travel locations around the world
          🌍
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

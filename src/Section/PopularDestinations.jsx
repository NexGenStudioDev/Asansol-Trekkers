import React from "react";
import TourCard from "../Components/TourCard";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
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
    name: "Amarnath Yatra ",
    img: "https://asansoltrekker.in/images/amarnath-trek.jpg", // replace with actual hosted image
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
    name: "Himalayan Trek",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&q=80",
    tours: "1 treks completed",
  },
];

const PopularDestinations = () => {
  let DestinationRef = useRef(null);

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
      className="relative w-full min-h-screen bg-linear-to-b from-[#f5f2ec] to-[#f9f7f4] py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center overflow-hidden"
    >
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />

      {/* Heading Section */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#937A4B] leading-tight tracking-tight">
          Popular Destinations
        </h1>
        <p className="text-[1.1rem] text-gray-600 mt-4">
          Explore our most visited and loved travel locations around the world
          🌍
        </p>
      </div>

      {/* Cards Grid */}
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

      {/* Call-to-Action */}
      {/* <div className="mt-16">
        <button className="bg-[#937A4B] hover:bg-[#7d673f] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          View All Tours
        </button>
      </div> */}
    </section>
  );
};

export default PopularDestinations;

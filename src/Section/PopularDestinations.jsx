import React from "react";
import TourCard from "../Components/TourCard";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const destinations = [
  {
    name: "Paris",
    img: "https://image.urlaubspiraten.de/720/image/upload/v1603284015/mediavault_images/avhrvmwfdlndjdwwxhsy.jpg",
    tours: "5 tours",
  },
  {
    name: "New York",
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bd/6f/17.jpg",
    tours: "8 tours",
  },
  {
    name: "Tokyo",
    img: "https://t3.ftcdn.net/jpg/00/83/45/28/360_F_83452854_Epa5N806VaHrsnr5oBhUYVSEIqWqJGfO.jpg",
    tours: "6 tours",
  },
  {
    name: "Sydney",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
    tours: "4 tours",
  },
  {
    name: "Rome",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    tours: "7 tours",
  },
  {
    name: "Bali",
    img: "https://t3.ftcdn.net/jpg/01/03/58/72/360_F_103587221_TkNTFDBswYYpCZ2sbsmvZxHFtBvXLHff.jpg",
    tours: "3 tours",
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
    <section ref={DestinationRef} className="relative w-full min-h-screen bg-linear-to-b from-[#f5f2ec] to-[#f9f7f4] py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />

      {/* Heading Section */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#937A4B] leading-tight tracking-tight">
          Popular Destinations
        </h1>
        <p className="text-[1.1rem] text-gray-600 mt-4">
          Explore our most visited and loved travel locations around the world 🌍
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

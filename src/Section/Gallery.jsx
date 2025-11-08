import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Masonry from "../Components/Masonry";
import TextType from "../Components/TextType";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.jpg";
import image9 from "../assets/img9.jpg";
import image11 from "../assets/img11.jpg";
import image12 from "../assets/img12.jpg";
import image13 from "../assets/img13.jpg";
import image14 from "../assets/img14.jpg";
import image15 from "../assets/img15.jpg";
import image16 from "../assets/img16.jpg";
import image17 from "../assets/img17.jpg";
import image18 from "../assets/img18.jpg";
import image19 from "../assets/img19.jpg";
import image20 from "../assets/img20.jpg";

gsap.registerPlugin(ScrollTrigger);
const items = [
  {
    id: "1",
    img: image19,
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: image2,
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: image4,
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: image20,
    url: "https://example.com/four",
    height: 350,
  },
  {
    id: "5",
    img: image5,
    url: "https://example.com/five",
    height: 450,
  },
  {
    id: "6",
    img: image6,
    url: "https://example.com/six",
    height: 380,
  },
  {
    id: "7",
    img: image7,
    url: "https://example.com/seven",
    height: 260,
  },
  {
    id: "8",
    img: image8,
    url: "https://example.com/eight",
    height: 600,
  },
  {
    id: "9",
    img: image9,
    url: "https://example.com/nine",
    height: 340,
  },
  {
    id: "10",
    img: image13,
    url: "https://example.com/ten",
    height: 460,
  },
  {
    id: "11",
    img: image11,
    url: "https://example.com/eleven",
    height: 500,
  },
  {
    id: "12",
    img: image12,
    url: "https://example.com/twelve",
    height: 650,
  },
  {
    id: "13",
    img: image1,
    url: "https://example.com/thirteen",
    height: 320,
  },
  {
    id: "14",
    img: image14,
    url: "https://example.com/fourteen",
    height: 420,
  },
  {
    id: "15",
    img: image15,
    url: "https://example.com/fifteen",
    height: 370,
  },
  {
    id: "16",
    img: image16,
    url: "https://example.com/sixteen",
    height: 550,
  },
  {
    id: "17",
    img: image17,
    url: "https://example.com/seventeen",
    height: 300,
  },
  {
    id: "18",
    img: image18,
    url: "https://example.com/eighteen",
    height: 480,
  },
];

const Gallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in effect for section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Heading Animation
      gsap.from(".gallery-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Gallery"
      ref={sectionRef}
      className="relative w-full flex flex-col items-center min-h-screen 
      bg-gradient-to-b from-[#f5f2ec] to-[#faf8f5] py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 
      overflow-hidden "
    >
      <div className="absolute top-0 left-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />

      <div className="text-center mb-12 sm:mb-14 md:mb-16 px-2 sm:px-4">
        <h2 className="gallery-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Explore Our{" "}
          <span className="text-[#937A4B]">
            <TextType
              text={["Gallery", "Gallery", "Gallery"]}
              typingSpeed={60}
              pauseDuration={1500}
              showCursor={true}
              loop={true}
            />
          </span>
        </h2>

        <p className="gallery-heading text-gray-600 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
          Step into the world of{" "}
          <span className="text-[#937A4B] font-semibold">Asansol Trekkers Club is</span>{" "}
          where every photograph tells a story of adventure, friendship, and
          nature’s timeless beauty.
        </p>
      </div>

      <div className="w-full sm:w-[90%] md:w-[90%]">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.1}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.97}
          blurToFocus={true}
          colorShiftOnHover={true}
        />
      </div>
    </section>
  );
};

export default Gallery;

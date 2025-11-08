import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fire from "../assets/img19.jpg";
import mountains from "../assets/img2.jpg";
import snow from "../assets/img7.jpg";
import greenTrek from "../assets/img5.jpg";

gsap.registerPlugin(ScrollTrigger);

const ContactGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const images = gallery.querySelectorAll("img");
    if (images.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(images, {
        opacity: 0,
        y: 50,
        scale: 1.05,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gallery,
          start: "top 85%", // animation starts when 85% of the section enters the viewport
          toggleActions: "play none none reverse", // play on enter, reverse on leave
        },
      });
    }, gallery);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={galleryRef}
      className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-[500px] md:h-[700px]"
    >
      {/* Image 1 */}
      <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-md">
        <img
          src={snow}
          alt="Mountain Trek"
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Image 2 */}
      <div className="col-span-1 overflow-hidden rounded-2xl shadow-md">
        <img
          src={fire}
          alt="Trail Path"
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Image 3 */}
      <div className="col-span-1 overflow-hidden rounded-2xl shadow-md">
        <img
          src={greenTrek}
          alt="Forest Trek"
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Image 4 */}
      <div className="col-span-2 overflow-hidden rounded-2xl shadow-md">
        <img
          src={mountains}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>
    </div>
  );
};

export default ContactGallery;

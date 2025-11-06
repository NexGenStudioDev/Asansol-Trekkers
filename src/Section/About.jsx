import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      imageRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    ).fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    return () => tl.kill();
  }, []);

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Soft glowing background blob */}
      <div className="absolute -z-10 w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] bg-[#E7DCC3]/50 blur-3xl rounded-full top-10 left-10 animate-pulse" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20 px-6 sm:px-8 md:px-12 lg:px-20">
        
        {/* ---------- Image Section ---------- */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 flex justify-center items-center relative"
        >
          <div className="relative w-[85%] sm:w-[75%] md:w-[90%] max-w-md aspect-square">
            <img
              src="https://previews.123rf.com/images/yupiramos/yupiramos1811/yupiramos181105195/111553727-avatar-boy-travel-trip-airport-and-vacation-theme-colorful-design-vector-illustration.jpg"
              alt="About Asansol Trekkers"
              className="w-full h-full object-cover rounded-lg border-4 border-white shadow-xl scale-x-[-1]"
            />
          </div>
        </div>

        {/* ---------- Text Section ---------- */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 text-center md:text-left space-y-5 sm:space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
            About{" "}
            <span className="text-[#937A4B]">
              Asansol Trekkers
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
            For over{" "}
            <span className="font-semibold text-[#937A4B]">25 years</span>,{" "}
            <strong>Asansol Trekkers</strong> has guided explorers through
            breathtaking trails and unforgettable adventures. Each journey is
            designed to reconnect you with nature and inspire your inner
            wanderer.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Whether you’re taking your first trek or chasing your next summit,
            our passionate community ensures every experience is{" "}
            <span className="font-medium text-[#937A4B]">safe</span>,{" "}
            <span className="font-medium text-[#937A4B]">memorable</span>, and{" "}
            <span className="font-medium text-[#937A4B]">life-changing</span>.
            Join us and start writing your adventure story today.
          </p>

          <div className="pt-2 sm:pt-4">
            <button
              type="button"
              className="bg-[#937A4B] hover:bg-[#7c673f] text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3.5 md:py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Join the Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

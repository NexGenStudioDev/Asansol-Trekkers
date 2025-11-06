import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHiking, FaLeaf, FaUmbrellaBeach } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 1,
    title: "Mountain Adventure",
    description:
      "Join us for an exhilarating 5-day trek through the majestic Himalayas. Discover breathtaking trails and create lifelong memories.",
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1080&q=80",
    link: "https://dev.to/abhishekg/mountain-adventure",
    icon: <FaHiking className="text-3xl text-[#937A4B]" />,
  },
  {
    id: 2,
    title: "Beach Cleanup Drive",
    description:
      "Be a part of our community initiative to clean the beautiful beaches of Goa. Together, we can protect marine life and our planet.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&q=80",
    link: "https://dev.to/abhishekg/beach-cleanup-drive",
    icon: <FaUmbrellaBeach className="text-3xl text-[#937A4B]" />,
  },
  {
    id: 3,
    title: "Forest Exploration",
    description:
      "Explore the dense forests of the Amazon with our expert guides. Experience nature in its purest form on this adventure of a lifetime.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=80",
    link: "https://dev.to/abhishekg/forest-exploration",
    icon: <FaLeaf className="text-3xl text-[#937A4B]" />,
  },
];

const UpcomingEvent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".event-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-[#faf8f5] to-[#f3efe9] overflow-hidden"
    >
      {/* ----- Heading ----- */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Upcoming <span className="text-[#937A4B]">Events</span>
        </h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Explore thrilling adventures, community events, and eco-friendly
          explorations guided by our passionate experts.
        </p>
      </div>

      {/* ----- Event Cards ----- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 justify-items-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group w-[90%] sm:w-[95%] md:w-[90%] lg:w-[95%] xl:w-[90%]"
          >
            {/* Image Section */}
            <div className="relative w-full h-56 sm:h-60 md:h-64 lg:h-72 overflow-hidden">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transform transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                {event.icon}
                <h2 className="text-xl sm:text-2xl font-bold text-[#937A4B]">
                  {event.title}
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                {event.description}
              </p>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#937A4B] font-semibold text-base sm:text-lg hover:gap-3 transition-all duration-300"
              >
                Learn More <BsArrowRightCircle className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ----- Background Blobs ----- */}
      <div className="absolute top-0 left-0 w-[12rem] sm:w-[16rem] md:w-[20rem] h-[12rem] sm:h-[16rem] md:h-[20rem] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />
    </section>
  );
};

export default UpcomingEvent;

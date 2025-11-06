import React from "react";
import { FaHiking, FaLeaf, FaUmbrellaBeach } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";

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
  return (
    <section className="relative w-full min-h-[80vh]  py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Upcoming <span className="text-[#937A4B]">Events</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Explore thrilling adventures, community events, and eco-friendly
          explorations guided by our experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5  ">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all w-[85%] duration-500 overflow-hidden group"
          >
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transform transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                {event.icon}
                <h2 className="text-2xl font-bold text-[#937A4B]">
                  {event.title}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                {event.description}
              </p>

              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#937A4B] font-semibold text-lg hover:gap-3 transition-all duration-300"
              >
                Learn More <BsArrowRightCircle className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#E7DCC3]/40 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />
    </section>
  );
};

export default UpcomingEvent;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-[999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-10 md:px-[3vw] py-3 md:py-4">
        {/* === Logo Section === */}
        <div className="flex items-center space-x-3 cursor-pointer select-none">
          <img
            src="https://img.freepik.com/premium-vector/man-walks-with-backpack_585255-8930.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Travel Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#937A4B]">
            Asansol Trekkers
          </h1>
        </div>

        {/* === Desktop Links === */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-gray-700 text-base md:text-lg font-medium">
          {[
            "Home",
            "About",
            "Destinations",
            "Gallery",
            "Team",
            "Event",
            "Testimonials",
          ].map((link, i) => (
            <a
              key={i}
              href={`#${link}`}
              className="cursor-pointer hover:text-[#937A4B] transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* === Desktop Button === */}
        <div className="hidden min-[1098px]:block">
          <a
            href="#Contact"
            className="bg-[#937A4B] text-white px-5 py-2 rounded-md text-sm md:text-base font-semibold shadow-md hover:bg-[#7a623b] transition duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* === Mobile Menu Icon === */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* === Mobile Dropdown Menu === */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 flex flex-col items-center py-6 animate-fadeIn">
          <ul className="flex flex-col space-y-4 text-gray-700 text-lg font-medium">
            {[
              "Home",
              "About",
              "Destinations",
              "Gallery",
              "Team",
              "Event",
              "Testimonials",
            ].map((link, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#937A4B] transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>

          <a
            href="#Contact"
            className="bg-[#937A4B] text-white px-8 py-3 mt-6 rounded-md font-medium text-base shadow-md hover:bg-[#7a623b] transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;

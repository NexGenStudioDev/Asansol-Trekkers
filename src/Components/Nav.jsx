import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-white shadow-md border-b border-gray-200 z-[999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-5">
        <div className="flex items-center space-x-2 cursor-pointer select-none">
          <img
            src="https://img.freepik.com/premium-vector/man-walks-with-backpack_585255-8930.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Travel Logo"
            className="w-16 h-16 md:w-12 md:h-12 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-extrabold text-[#937A4B]">
            Asansol Trekkers
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {["Home", "About", "Destinations", "Services", "Contact"].map(
            (link, i) => (
              <span
                key={i}
                className="cursor-pointer hover:text-[#937A4B] transition duration-300"
              >
                {link}
              </span>
            )
          )}
        </div>

        <div className="hidden md:block">
          <button className="bg-[#937A4B] text-white px-6 py-2 rounded-md font-medium shadow-md hover:bg-[#7a623b] transition duration-300">
            Get In Touch
          </button>
        </div>

        <div className="min-[1098px]:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 flex flex-col items-center py-6 animate-fadeIn">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            {["Home", "About", "Destinations", "Services", "Contact"].map(
              (link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-[#937A4B] transition duration-300"
                >
                  {link}
                </li>
              )
            )}
          </ul>

          <button className="bg-[#937A4B] text-white px-8 py-3 mt-6 rounded-md font-medium shadow-md hover:bg-[#7a623b] transition duration-300">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;

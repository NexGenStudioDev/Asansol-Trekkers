import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Track scrolling and set active section dynamically
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "Home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Destinations",
    "Gallery",
    "Team",
    "Event",
    "Testimonials",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-[#e5decf] shadow-sm z-[999] transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-10 md:px-[3vw] py-3 md:py-4">
        {/* === Logo Section === */}
        <div className="flex items-center space-x-3 cursor-pointer select-none">
          <img
            src={logo}
            alt="Asansol Trekkers Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#937A4B] tracking-wide">
            Asansol Trekkers
          </h1>
        </div>

        {/* === Desktop Links === */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-gray-700 text-base md:text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`relative cursor-pointer transition duration-300 ${
                activeSection === link
                  ? "text-[#937A4B] font-semibold"
                  : "text-gray-700 hover:text-[#937A4B]"
              }`}
            >
              {link}
              {/* Animated underline */}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] rounded-full bg-[#937A4B] transition-all duration-300 ${
                  activeSection === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
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
        <div className="absolute top-full left-0 w-full bg-white/95 shadow-lg border-t border-gray-200 flex flex-col items-center py-6 animate-fadeIn">
          <ul className="flex flex-col space-y-4 text-gray-700 text-lg font-medium">
            {navLinks.map((link) => (
              <li
                key={link}
                className={`cursor-pointer transition duration-300 ${
                  activeSection === link
                    ? "text-[#937A4B] font-semibold"
                    : "hover:text-[#937A4B]"
                }`}
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

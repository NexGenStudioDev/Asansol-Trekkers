import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-section", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-white text-gray-800 w-full">
      {/* === Top Banner === */}
      <div className="bg-black text-white py-8 px-4 flex flex-col items-center justify-center space-y-3 text-center">
        <p className="text-lg md:text-xl font-medium leading-snug">
          Don&apos;t Know Which Destination To Choose?
        </p>
        <a
          href="tel:8585773477"
          className="text-2xl md:text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition-transform duration-300 hover:scale-105"
        >
          Call Us (+91) 80809898XX
        </a>
      </div>

      {/* === Footer Main === */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-10 lg:px-20 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
        {/* Logo + Description */}
        <div className="footer-section text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-4 flex justify-center sm:justify-start items-center gap-2">
            Asansol Trekkers <span>🌍</span>
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed text-sm md:text-base">
            Celebrating 25 years of crafting unforgettable, adventure,
            discipline and community service.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 text-gray-600">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                href={"#"}
                key={i}
                className="cursor-pointer p-2 rounded-full bg-gray-100 hover:bg-yellow-400 hover:text-white transition-transform transform hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div className="footer-section text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Destinations</h3>
          <ul className="space-y-2 text-gray-600">
            {["Himalayan", "Ladakh", "Ayodhya", "Maharashtra", "Karnataka"].map(
              (place, i) => (
                <li
                  key={i}
                  className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer text-sm md:text-base"
                >
                  <a href="#Destinations">{place}</a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-section text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-600">
            {["Home", "About", "Event", "Gallery", "Contact"].map((link, i) => (
              <li
                key={i}
                className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer text-sm md:text-base"
              >
                <a href={`#${link}`}> {link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex justify-center sm:justify-start items-center gap-2 text-sm md:text-base">
              <FaPhoneAlt className="text-yellow-500" /> (+91) 80809898XX
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2 text-sm md:text-base break-words">
              <FaEnvelope className="text-yellow-500" />{" "}
              info@asansoltrekkers.com
            </li>
            <li className="flex justify-center sm:justify-start items-start gap-2 text-sm md:text-base leading-snug">
              <FaMapMarkerAlt className="text-yellow-500 mt-1" />
              Asansol, West Bengal,
              <br />
              India, 713301
            </li>
          </ul>
        </div>
      </div>

      {/* === Bottom Copyright === */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-xs md:text-sm">
        © Copyright <span className="font-medium"></span> 2024. All Rights
        Reserved. |
        <span className="text-yellow-500 font-medium"> Asansal Trekkers</span>
      </div>
    </footer>
  );
}

export default Footer;

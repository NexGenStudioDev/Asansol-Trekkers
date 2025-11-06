import React from "react";
import ContactGallery from "../Components/ContactGallery";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-24 items-start">
        {/* === Left: Trekking Gallery === */}
        <div className="order-1 lg:order-1">
          <ContactGallery />
        </div>

        {/* === Right: Contact Form === */}
        <div className="order-2 lg:order-2 w-full">
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-3">
              <span className="text-[#1E293B]">Get in&nbsp;</span>
              <span className="text-[#A2844E]">Touch</span>
            </h2>
            <p className="text-gray-500">
              We’d love to hear from you! Fill out the form and our team will
              get back to you shortly.
            </p>
          </div>

          <form
            className="bg-white shadow-lg rounded-2xl p-10 md:p-14 space-y-9 text-left w-full max-w-4xl"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#A2844E] focus:ring-2 focus:ring-[#A2844E]/40 outline-none transition text-gray-700"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#A2844E] focus:ring-2 focus:ring-[#A2844E]/40 outline-none transition text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#A2844E] focus:ring-2 focus:ring-[#A2844E]/40 outline-none transition text-gray-700"
                required
              />
            </div>

            {/* Message */}
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-[#A2844E] focus:ring-2 focus:ring-[#A2844E]/40 outline-none transition resize-none text-gray-700"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="bg-[#A2844E] text-white font-semibold px-10 py-4 rounded-full shadow-md hover:bg-[#8C6F3C] transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

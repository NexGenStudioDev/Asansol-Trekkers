import React from "react";

const TestimonialCard = ({ image, message, name, role }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 max-w-5xl mx-auto">
      <img
        src={image}
        alt={name}
        className="w-52 h-48 rounded-lg  mx-auto mb-6 object-cover"
      />
      <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">
        “{message}”
      </p>
      <h3 className="text-xl font-bold text-[#1E293B]">{name}</h3>
      <p className="text-[#A2844E] font-medium">{role}</p>
    </div>
  );
};

export default TestimonialCard;

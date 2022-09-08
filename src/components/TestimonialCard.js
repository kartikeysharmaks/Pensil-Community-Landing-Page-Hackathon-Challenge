import React from "react";

const TestimonialCard = ({ imgSrc, name, text }) => {
  return (
    <div className="bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer m-5 p-5 rounded-xl flex flex-col flex-wrap sm:items-start items-center justify-evenly">
      <img src={imgSrc} alt={name + "testimonial"} className="h-[85px] w-[85px] rounded-full p-2" />
      <div className="lg:text-2xl sm:text-xl text-lg font-semibold p-1">{name}</div>
      <div className="lg:text-xl sm:text-lg text-base text-gray-600 p-1 text-center sm:text-justify">{text}</div>
    </div>
  );
};

export default TestimonialCard;
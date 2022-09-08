import React from "react";
import { javascriptsample } from "../assets";

const CommunityAbout = () => {
  return (
    <div className="sm:pt-10 pb-10 bg-gray-100">
      <div className="w-[95% ] mx-auto sm:my-4 my-1 pt-4 lg:text-6xl sm:text-4xl text-3xl text-pink-400 font-bold text-center">
        <span className="text-blue-900">One </span> platform{" "}
        <span className="text-blue-900">for</span> all <br />{" "}
        <span className="text-blue-900 p-4"> your</span>community
        <span className="text-blue-900"> needs</span>
      </div>
      <div className="sm:pb-6 pb-4 sm:pt-5 pt-1 text-center text-gray-500 font-normal lg:text-2xl sm:text-xl text-lg sm:w-[60%] w-[90%] mx-auto">
        Welcome to Javascript community. The best Js community for Front end
        Developers. To Talk make Friends around js Eco-System.
      </div>
      <div className="flex flex-row items-center justify-center sm:pt-6 pt-2 sm:pb-7 pb-8">
        <button
          type="button"
          className="sm:py-4 py-2 sm:px-6 px-3 bg-gray-500 text-white font-semibold sm:text-xl text-lg rounded-xl hover:bg-gradient-to-r from-blue-900 to to-pink-500"
        >
          Explore Now <span></span>
        </button>
      </div>
      <img
        src={javascriptsample}
        alt="about-community"
        className="h-[80%] w-[80%] sm:my-8 mx-auto p-8 bg-gradient-to-tr from-blue-900 to-pink-500 rounded-2xl"
      />
    </div>
  );
};

export default CommunityAbout;

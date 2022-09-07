import React from "react";
import { user } from "../assets";

const GroupCard = ({ title, image, description, peopleinagroup }) => {
  return (
    <div className="lg:px-6 sm:px-2 px-4 sm:pt-5 pt-3 sm:pb-2 pb-1 my-4 mx-1 sm:mx-4 bg-white hover:bg-gray-200 hover:scale-105 duration-300 rounded-xl flex flex-col items-center justify-evenly border-1 border-gray-400 shadow-xl">
      <img src={image} alt="html" className="sm:h-[80px] sm:w-[80px] h-[60px] w-[60px]" />
      <div className="font-medium lg:text-3xl sm:text-2xl text-xl sm:my-4 my-2">
        {title}
      </div>
      <div className="w-[90%] font-normal lg:text-2xl sm:text-xl text-lg text-center">
        {description}
      </div>
      <div className="w-[90%] sm:my-3 my-1">
        <div className="flex items-center justify-between pb-4 mt-3">
          <div className="flex items-center">
            <div className="mr-2 font-semibold sm:text-lg text-base">{peopleinagroup}</div>
            <div className="flex items-center justify-center">
              <img
                src={user}
                alt="usersinagroup"
                className="h-[15px] w-[15px]"
              />
            </div>
          </div>
          <button
            type="button"
            className="sm:px-4 sm:py-2 px-2 py-1 bg-blue-500 rounded-lg text-white sm:text-2xl text-xl font-medium hover:bg-blue-700"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
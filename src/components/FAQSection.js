import React, { useState } from "react";
import { down, up } from "../assets";

const FAQSection = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  return (
    <div className="w-full h-full bg-white pb-10 mb-5">
      <div className="text-center sm:text-6xl text-3xl text-blue-900 font-bold sm:py-8 pt-10 pb-5">
        Frequently Asked Questions
      </div>
      <div className="lg:text-3xl sm:text-2xl text:xl sm:p-6 p-2 w-[85%] sm:w-[60%] text-center mx-auto font-normal text-gray-600">
        Any question? Leave it here, we will help you out.
      </div>
      <div className="flex flex-col border-b-2 py-5 w-[80%] lg:w-[60%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="lg:text-2xl sm:text-xl text-lg text-gray-700">
            Will i get access to all the missed video lectures and notes if i
            join now?
          </div>
          <button
            type="button"
            value={toggle1}
            onClick={() => setToggle1(!toggle1)}
            className="p-2 bg-gray-50 rounded-full ml-5"
          >
            <img
              src={toggle1 ? up : down}
              alt="tap-down"
              className="h-[25px] w-[25px]"
            />
          </button>
        </div>
        {toggle1 && (
          <div className="flex lg:text-2xl sm:text-xl text-lg text-gray-500 mt-4">
            Yes, you will get all the access.
          </div>
        )}
      </div>
      <div className="flex flex-col border-b-2 py-5 w-[80%] lg:w-[60%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="lg:text-2xl sm:text-xl text-lg text-gray-700">
            Joining groups will require any subscription or it's free?
          </div>
          <button
            type="button"
            value={toggle2}
            onClick={() => setToggle2(!toggle2)}
            className="p-2 bg-gray-50 rounded-full ml-5"
          >
            <img
              src={toggle2 ? up : down}
              alt="tap-down"
              className="h-[25px] w-[25px]"
            />
          </button>
        </div>
        {toggle2 && (
          <div className="flex lg:text-2xl sm:text-xl text-lg text-gray-500 mt-4">
            It's totally free.
          </div>
        )}
      </div>
      <div className="flex flex-col border-b-2 py-5 w-[80%] lg:w-[60%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="lg:text-2xl sm:text-xl text-lg text-gray-700">
            Can anyone number of people be able to access the content of same
            account?
          </div>
          <button
            type="button"
            value={toggle3}
            onClick={() => setToggle3(!toggle3)}
            className="p-2 bg-gray-50 rounded-full ml-5"
          >
            <img
              src={toggle3 ? up : down}
              alt="tap-down"
              className="h-[25px] w-[25px]"
            />
          </button>
        </div>
        {toggle3 && (
          <div className="flex lg:text-2xl sm:text-xl text-lg text-gray-500 mt-4">
            No, only two people can access content at a time.
          </div>
        )}
      </div>
      <div className="flex flex-col border-b-2 py-5 w-[80%] lg:w-[60%] mx-auto">
        <div className="flex items-center justify-between">
          <div className="lg:text-2xl sm:text-xl text-lg text-gray-700">
            Is there any subscription needed to join pensil community?
          </div>
          <button
            type="button"
            value={toggle4}
            onClick={() => setToggle4(!toggle4)}
            className="p-2 bg-gray-50 rounded-full ml-5"
          >
            <img
              src={toggle4 ? up : down}
              alt="tap-down"
              className="h-[25px] w-[25px]"
            />
          </button>
        </div>
        {toggle4 && (
          <div className="flex lg:text-2xl sm:text-xl text-lg text-gray-500 mt-4">
            Yes, there is a monthly subscription of 200 rupees.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;

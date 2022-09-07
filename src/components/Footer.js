import React from "react";
import { facebook, instagram, linkedin, logo1, twitter } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-6 border-t-2 border-gray-200 bg-gray-800">
      <div className="flex items-center justify-center mt-8 mb-4">
        <img
          src={logo1}
          alt="logo"
          className="h-[100%] w-[100%] max-w-[250px] object-contain"
        />
      </div>
      <div>
        <ul className="flex-col text-center lg:flex sm:flex-row flex-1 flex-wrap sm:items-center sm:justify-center space-y-1 space-x-4 lg:space-x-10 font-medium text-base sm:text-xl text-gray-500">
          <li>Home</li>
          <li>Disclaimer</li>
          <li>Cookie Policy</li>
          <li>Return Policy</li>
          <li>Terms of service</li>
          <li>Private Policy</li>
          <li>Report Bugs</li>
        </ul>
      </div>
      <div className="flex justify-center items-center space-x-10 pt-4">
        <img
          src={instagram}
          alt="instagram"
          className="h-[26px] w-[26px] opacity-50"
        />
        <img
          src={facebook}
          alt="facebook"
          className="h-[25px] w-[25px] opacity-50"
        />
        <img
          src={twitter}
          alt="twitter"
          className="h-[26px] w-[26px] opacity-50"
        />
        <img
          src={linkedin}
          alt="linkedin"
          className="h-[26px] w-[26px] opacity-50"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center pt-4 pb-8 sm:font-normal text-sm text-center sm:text-xl text-gray-500 ">
        2022 Community Technologies Private Limited. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { call, code, demo } from "../assets";
import CTACard from "./CTACard";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-evenly my-5 bg-transparent sm:pt-6 sm:py-4">
      <div className="font-bold sm:text-6xl text-3xl text-center text-blue-900 flex items-center justify-center">
        Get in touch with Us
      </div>
      <div className="lg:text-3xl sm:text-2xl text-xl text-center text-gray-600 w-[85%] lg:w-[60%] mx-auto sm:py-5 py-4 px-2 sm:mb-4 mb-1">
        Be a part of our community. Learn and grow with us. Also participate in the community fest. To get all updates follow us on instagram, facebook and all social media handles. 
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 sm:m-auto sm:my-8 my-4 w-[85%]">
        <CTACard
          title={"Code with Us"}
          content={
            "We are a community of over 10000+ active programmers who learn and teach everyday, be a part of us."
          }
          imgsrc={code}
        />
        <CTACard
          title={"Request a Demo"}
          content={"We will happy to guide you throughout your coding journey."}
          imgsrc={demo}
        />
        <CTACard
          title={"Want to know more about our Courses?"}
          content={
            "Request a call. We will shortly get back in touch with you."
          }
          imgsrc={call}
        />
      </div>
    </div>
  );
};

export default CTA;

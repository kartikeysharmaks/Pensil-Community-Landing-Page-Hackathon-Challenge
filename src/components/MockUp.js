import React from "react";
import { mockUp } from "../assets";

const MockUp = () => {
  return (
    <div className="flex">
      
      <img
        src={mockUp}
        alt="community"
        className="sm:h-[60%] sm:w-[60%] h-[85%] w-[85%] mx-auto"
      />
     
    </div>
  );
};

export default MockUp;
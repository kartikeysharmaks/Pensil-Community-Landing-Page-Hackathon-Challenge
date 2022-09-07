import React from "react";

const Owner = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-white">
      <div className="font-bold lg:text-8xl italic sm:text-5xl text-4xl text-blue-900 text-center sm:py-8 pt-10 pb-5">
        <span className="text-pink-500 ml-1">C</span>E
        <span className="text-pink-500 ml-1">O</span> of
        <span className="text-pink-500 ml-1"> P</span>E
        <span className="text-pink-500 ml-1">N</span>C
        <span className="text-pink-500 ml-1">I</span>L
      </div>
      <div className="p-5 rounded-full bg-gray-200 mt-10">
        <img
          src="https://yt3.ggpht.com/a/AATXAJygJrT2cs6jKFWU1uNCF-l85mvX56-emOWcTw=s900-c-k-c0xffffffff-no-rj-mo"
          alt="hiteshchaudharyowner"
          className="sm:h-[500px] h-[300px] sm:w-[500px] w-[300px] rounded-full p-5 bg-gray-100"
        />
      </div>
      <div className="mt-5">
        <div className="text-center font-bold sm:text-4xl text-3xl pt-4 pb-2">
          Hitesh Chaudhary
        </div>
        <div className="w-[80%] sm:w-[60%] mx-auto text-center font-normal text-gray-600 lg:text-2xl sm:text-xl text-lg pt-3 pb-8">
          Hey there everyone! I'm Hitesh Choudhary, Teacher by ♥️ and programmer
          by profession. I write code and I make youtube videos I like to make
          videos related to code and tech in my free time. I also lead a few
          tech teams in startups, help in hiring talent for companies. I am also
          on a part time traveller, with 31 countries checked off so far!
        </div>
      </div>
    </div>
  );
};

export default Owner;

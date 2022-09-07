import React from "react";
import { down, t1, t2, t3, t4 } from "../assets";
import FeedCard from "./FeedCard";

const CommunityFeed = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 h-full w-full">
      <div className="flex flex-row items-center sm:my-6 my-5 pt-8 sm:text-6xl text-3xl text-center font-bold sm:p-6 p-4 text-blue-900">
        Community Feed
      </div>
      <div className="sm:pt-[20px] sm:pb-50px px-[10px] py-[30px] rounded-2xl">
        <div className="font-normal sm:p-3 p-2 text-gray-900 flex space-x-2 items-center justify-start lg:w-[80%] lg:mx-auto ">
          <div className="cursor-pointer sm:text-2xl text-xl font-semibold">Recent chats from the group </div>{" "}
          <img
            src={down}
            alt="arrow-down"
            className="h-[20px] w-[20px] mt-1 cursor-pointer"
          />
        </div>
        <FeedCard
          description={
            "I love React JS but I am not that good in React Native. I really want to learn it to develop mobile native apps both ios and android."
          }
          title="Sarosh Dev"
          imgSrc={t4}
        />
        <FeedCard
          description={
            "How to use vanillaJS design in NEXTJS? Use TypeScript as your preprocessor."
          }
          title="Vishal Singh"
          imgSrc={t1}
        />
        <FeedCard
          description={
            "How to use hooks in react? Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component."
          }
          title="Ram Manjhrekar"
          imgSrc={t2}
        />
        <FeedCard
          description={
            "Which is better Redux or React Context API? So, what should you choose? Context API or Redux?"
          }
          title="Utkarsh Gautam"
          imgSrc={t3}
        />
        <FeedCard
          description={
            "How much DSA would be okay for frontend engineering role? I have covered all the basics of programming with some knowledge of data structures and algorithms."
          }
          title="Sarosh Dev"
          imgSrc={t4}
        />
        <FeedCard
          description={
            "Can anyone suggest me a roadmap how to start and learn all the neccessary conditions to be a full stack developer?"
          }
          title="Utkarsh Gautam"
          imgSrc={t3}
        />
        <div className="pt-5 mt-5 flex items-center justify-center">
          <button
            type="button"
            className="sm:py-3 py-2 sm:px-5 px-3 rounded-xl border-2 border-gray-400 text-xl text-gray-700"
          >
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeed;

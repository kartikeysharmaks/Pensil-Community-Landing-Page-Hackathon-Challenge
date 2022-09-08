import React, { useState } from "react";
import {
  communityprinciples,
  discord,
  onlinecourses,
  ops,
  pensil,
  pythonblog,
  socialmedia,
  tech,
} from "../assets";
import BlogCard from "./BlogCard";

const CommunityBlogs = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:py-10 py-4 sm:px-6 flex flex-col">
      <div className="flex items-center justify-center font-bold lg:text-6xl sm:text-4xl text-3xl text-blue-900 mt-5 mb-8">
        Community Blogs
      </div>
      <div className="grid xxl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 w-[85%] mx-auto">
        <BlogCard
          content={
            "Choose a modern and powerfull customizable community platform. Save your budget and resource to invest in community development"
          }
          title={"Pensil, a powerful alternative tool to Vanilla Forums"}
          imgSrc={pensil}
        />
        <BlogCard
          content={
            "Community operations enables CMs to operate the vehicle and ensure that is stays on the road by making sure all of the gears are proper sized, greased, screwed in correctly, and linked to the proper circuits."
          }
          title={"Life of community ops manager"}
          imgSrc={ops}
        />
        <BlogCard
          content={
            "As you all know, Visuals have become a critical part of social media marketing, with the fastest growing social media networks (TikTok, Instagram, and Snapchat) putting a large emphasis on image and video."
          }
          title={"How to use social media effectively?"}
          imgSrc={socialmedia}
        />
        <BlogCard
          content={
            "I’ll say it again: Python is a bad programming language, and the only reason it’s so popular today is because Google pushed it so hard in the first decade of the 2000s"
          }
          title={"Python is a Bad Programming Language?"}
          imgSrc={pythonblog}
        />
        <BlogCard
          content={
            "Technology is evolving so fast because of a phenomenon known as Accelerating Change. Each technological improvement can create the next, stronger generations of technology at a faster rate. As each generation of technology is better than the last, it builds new technology faster. "
          }
          title={"Why technology evolving so fast?"}
          imgSrc={tech}
        />
        <BlogCard
          content={
            "We place honesty and integrity in our teaching, learning, research and administration at the highest level. We recognize the intrinsic relationship between diversity and excellence in all our endeavors."
          }
          title={
            "The principles and community guidlines you must know before joining"
          }
          imgSrc={communityprinciples}
        />
        {toggle && (
          <>
            <BlogCard
              content={
                "A quick look at launching an online course Creating and running an online course had become a lucrative side hustle, from which many people move to full time online teaching. Here is a quick look at the steps to keep in mind while creating an online course."
              }
              title={"A quick look at launching an online course"}
              imgSrc={onlinecourses}
            />
            <BlogCard
              content={
                "From voice notes and scheduling to managing chats and forums- there are a lot of issues associated with using Discord from community building"
              }
              title={
                "Why Discord is not the best Tool for your Community/Online Courses"
              }
              imgSrc={discord}
            />
          </>
        )}
      </div>
      <div className="flex justify-center items-center m-4 p-5">
        <button
          type="button"
          value={toggle}
          onClick={(e) => setToggle(!toggle)}
          className={`sm:py-4 py-2 sm:px-6 px-3 rounded-xl sm:text-2xl text-xl font-semibold text-white bg-blue-500  hover:bg-pink-400`}
        >
         {toggle ? "Show less" : "Read More"} 
        </button>
      </div>
    </div>
  );
};

export default CommunityBlogs;

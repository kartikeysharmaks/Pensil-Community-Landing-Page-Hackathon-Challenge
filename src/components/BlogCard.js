import React from "react";

const BlogCard = ({ imgSrc, title, content }) => {
  return (
    <div className="flex flex-col items-start justify-between sm:p-4 p-2 bg-slate-100 my-4 mx-2 sm:mx-4 rounded-lg cursor-pointer hover:scale-105 duration-300">
      <img
        src={imgSrc}
        alt="communityblogsimages"
        className="sm:h-[450px] sm:w-[600px] h-[300px] w-[600] object-cover rounded-lg p-auto m-auto"
      />
      <div className="sm:p-2 sm:m-2 m-1 p-1 font-semibold text-xl sm:text-3xl">{title}</div>
      <div className="sm:p-2 sm:m-2 m-1 p-1 font-normal text-base sm:text-xl ">{content}</div>
    </div>
  );
};

export default BlogCard;
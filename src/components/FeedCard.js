import React from 'react'

const FeedCard = ({description, imgSrc, title}) => {
  return (
    <div className='flex items-center justify-start lg:w-[80%] mx-auto border-b-2 border-gray-300 sm:p-5 py-4'>
        <img src={imgSrc} alt="feed" className="sm:h-[80px] h-[60px] sm:w-[80px] w-[60px] rounded-full sm:p-2"/>
        <div className='flex flex-col sm:p-2 sm:ml-5 ml-3'>
            <div className='lg:text-2xl sm:text-xl text-lg font-semibold'>
                {title}
            </div>
            <div className='lg:text-2xl sm:text-xl text-lg opacity-80'>
                {description}
            </div>
        </div>
    </div>
  );
};

export default FeedCard;
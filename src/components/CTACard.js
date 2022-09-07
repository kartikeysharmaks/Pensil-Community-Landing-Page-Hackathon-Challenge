import React from 'react';

const CTACard = ({title, content, imgsrc}) => {
  return (
    <div className='flex flex-col items-start justify-evenly p-5 bg-gray-50 mx-8 mb-8 cursor-pointer hover:bg-purple-100 rounded-lg border-1 border-gray-300 shadow-lg hover:shadow-xl'>
        <img src={imgsrc} alt="icons" className='sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] object-contain sm:m-4 m-2' />
        <div className='sm:mx-4 mx-2 font-medium lg:text-3xl text-xl sm:my-2 my-1'>
            {title}
        </div>
        <div className='sm:mx-4 mx-2 lg:text-2xl text-lg sm:my-2 my-1 text-gray-700'>
            {content}
        </div>
    </div>
  );
};

export default CTACard;
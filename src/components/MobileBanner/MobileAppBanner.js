import React from 'react';
import './MobileAppBanner.css';

const MobileAppBanner = () => {
  return (
    <div className='mobile-app relative'>
      <div className='hidden 2xl:flex w-[700px] absolute top-[22%] lg:left-[10%] left-0 font-bold sm:text-6xl text-3xl text-white'>
         Mobile App for your Community 
      </div>
      <div className='hidden 2xl:flex absolute top-[50%]  lg:left-[10%] left-0 w-[700px] text-white font-normal sm:text-2xl text-xl'>
      Get complete custom branded app for you community & give your community the experince they deserve.
      </div>
      <button className='hidden 2xl:flex absolute top-[68%] lg:left-[10%] left-0 bg-blue-500 px-5 py-4 text-white font-medium text-2xl rounded-xl'>
        Download Now
      </button>
    </div>
  );
};

export default MobileAppBanner;
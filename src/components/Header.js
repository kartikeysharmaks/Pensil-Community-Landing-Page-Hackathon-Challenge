import React from 'react'
import { logo1, menu } from '../assets';

const Header = () => {
  return (
    <nav className='flex items-center p-3 sm:p-4 sticky top-0 z-50 bg-white border-b shadow-md'>
        <div className='flex items-center space-x-2 cursor-pointer'>
           <img src={logo1} alt="logo" className='h-[100%] w-[100%]  object-contain mr-2'/>
        </div>
        <div className='flex flex-1'>
            <ul className='hidden lg:flex flex-1 flex-wrap items-center justify-center lg:space-x-[80px] sm:space-x-10 space-x-8 font-medium lg:text-xl text-lg text-gray-600'>
                <li className='hover:text-blue-500 hover:scale-125 hover:transition-all hover:duration-400 cursor-pointer'>
                    Home
                </li>
                <li className='hover:text-blue-500 hover:scale-125 hover:transition-all hover:duration-400 cursor-pointer'>
                    Services
                </li>
                <li className='hover:text-blue-500 hover:scale-125 hover:transition-all hover:duration-400 cursor-pointer'>
                    About
                </li>
                <li className='hover:text-blue-500 hover:scale-125 hover:transition-all hover:duration-400 cursor-pointer'>
                    Catgories
                </li>
            </ul>
        </div>
        <button type='button' className='hidden sm:flex px-2 py-1.5 text-base m-2 bg-blue-400 text-white rounded-md font-semibold sm:px-4 sm:py-3 sm:text-lg hover:bg-blue-500 hover:duration-400'>
            Login
        </button>
        <button type='button' className='hidden sm:flex px-2 py-1.5 text-base m-2 bg-blue-400 text-white rounded-md font-semibold sm:px-4 sm:py-3 sm:text-lg hover:bg-blue-500 hover:duration-400'>
            Join for free
        </button>
        <button type='button' className='sm:hidden flex px-2 py-1.5 text-white'>
            <img src={menu} alt="menu-button" className='h-[20px] w-[20px]'/>
        </button>
    </nav>
  );
};

export default Header;
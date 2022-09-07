import React from 'react'

const CommunityEvents = () => {
  return (
    <div className='sm:pb-10 pb-5 pt-5 sm:pt-10 sm:px-20 bg-gray-100'>
        <div className='flex items-center justify-center font-bold sm:text-6xl text-2xl leading-8 text-blue-900 text-center pb-1 mb-3 sm:pb-8 sm:mb-4'>
            <div className='p-1.5 sm:p-4 bg-red-700 my-auto border-[2px] sm:border-[6px] border-black rounded-full'/>
            <span className='ml-2 sm:ml-5'> Community Live Sessions</span>
        </div>
        <img src="https://uploads-ssl.webflow.com/615a8096dd69ecb979d5ea68/62a638fa42b260e235ae4538_Video%20calling.png" alt="live" className='sm:h-[85%] sm:w-[85%] w-[80%] h-[80%] mx-auto object-contain p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-pink-500' />
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:pt-10 sm:mt-10'>
          <div className='flex flex-col text-center items-center justify-evenly lg:p-4 p-2'>
              <div className='font-bold sm:text-3xl text-xl pt-4'>
              Immersive Experience
              </div>
              <div className='font-normal sm:text-xl text-lg sm:p-2 pt-1 text-gray-600'>
              Conduct Live sessions or webinar, get the best audio video quality
              </div>
          </div>
          <div className='flex flex-col text-center items-center justify-evenly lg:p-4 p-2'>
            <div className='font-bold sm:text-3xl text-xl pt-4'>
            Host Event with Live QnA
            </div>
            <div className='font-normal sm:text-xl text-lg sm:p-2 pt-1 text-gray-600' >
            Invite hosts, moderator & get the best live experience for your community
            </div>
          </div>
          <div className='flex flex-col text-center items-center justify-evenly lg:p-4 p-2'>
            <div className='font-bold sm:text-3xl text-xl pt-4'>
            Share your live recordings
            </div>
            <div className='font-normal sm:text-xl text-lg sm:p-2 pt-1 text-gray-600'>
            Share or post recording on Youtube, Facebook, Vimeo, or any other platform
            </div>
          </div>
        </div>
    </div>
  );
};

export default CommunityEvents;
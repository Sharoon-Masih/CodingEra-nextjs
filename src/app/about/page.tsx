import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-container  w-9/12 h-svh m-auto flex flex-col lg:space-x-5 lg:flex-row justify-center lg:justify-between items-center">
      <div className="about-text-container h-4/5 space-y-5 flex flex-col justify-center items-start bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 ...  px-4 py-2 rounded-lg shadow-xl  lg:w-195 xl:w-200 ">
        <h1 className='text-lg  font-bold w-full  text-center sm:text-2xl lg:text-xl lg:text-start xl:text-2xl'>About Community</h1>
        <span className='text-xl text-center sm:text-3xl lg:text-start lg:text-3xl xl:text-4xl font-extrabold '>We create digital ideas that are bigger,bolder,    braver and better.</span>
        <span className='font-semibold text-xs sm:text-sm text-center  h-36 lg:text-start xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo tempore unde sed aliquam repellat autem quae architecto voluptatum quidem, necessitatibus cupiditate hic et magni. Vero voluptatem recusandae iure nemo in. Tenetur necessitatibus commodi in.</span>
        <div className="logo flex flex-row justify-around w-full text-purple-950  item-center">
          <div className='flex flex-col justify-center item-start'>
            <div className='font-extrabold text-lg sm:text-3xl lg:text-3xl xl:text-4xl text-center lg:text-start'>10 K+</div>
            <div className='text-center sm:text-start text-xs sm:text-sm lg:text-xs xl:text-sm'>Year of experience</div>
          </div>
          <div className='flex flex-col justify-center item-start'>
            <div className='font-extrabold text-base sm:text-3xl lg:text-3xl xl:text-4xl text-center lg:text-start'>250 K+</div>
            <div className='text-center sm:text-start text-xs sm:text-sm lg:text-xs xl:text-sm'>People's reached</div>
          </div>
          <div className='flex flex-col justify-center item-start'>
            <div className='font-extrabold text-lg sm:text-3xl lg:text-3xl xl:text-4xl text-center lg:text-start'>5 K+</div>
            <div className='text-center sm:text-start text-xs sm:text-sm lg:text-xs xl:text-sm'>Services and plugins</div>
          </div>
        </div>
      </div>
      <div className="img bg-white hidden  h-3/4 lg:flex lg:items-center lg:justify-center "><Image src="https://i.giphy.com/KGhpQ5NMoWKQurlHwI.webp" width={400} height={400} alt="about-img" /></div>
    </div>
  )
}

export default About;
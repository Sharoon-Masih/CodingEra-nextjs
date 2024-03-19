import React from 'react'
import Image from 'next/image';

interface Icards {
  src: string,
  title: string,
  desc: string
}
const cardApi: Icards[] = [
  {
    src: "/imgs/web.gif",
    title: "Web designing",
    desc: "Lorem ipsum dolor sit amet."
  },
  {
    src: "/imgs/cloud-network.gif",
    title: "Cloud Services",
    desc: "Lorem ipsum dolor sit amet."
  },
  {
    src: "/imgs/social-media.gif",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet."
  },
  {
    src: "/imgs/support.gif",
    title: "Customer Support",
    desc: "Lorem ipsum dolor sit amet."
  },

]

const Contact = () => {
  return (
    <div className="contact-container  h-lvh xl:h-svh space-y-3 w-9/12 m-auto  flex flex-col md:flex-row justify-evenly sm:justify-between  items-center">
      <div className="img-contact xl:h-72 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2 xl:gap-x-8  justify-center items-center gap-y-3 xl:gap-y-4">
        {cardApi.map((card) =>
          <div className='bg-white h-24 xl:h-28  xl:hover:w-78 xl:hover:ease-in duration-300 xl:hover:h-32 xl:hover:border-2 xl:hover:border-solid  w-60 xl:w-72 px-1 py-1 rounded-lg shadow-md flex justify-between xl:justify-around'>
            <Image src={card.src} width={100} height={100} alt="web-png" />
            <div className='font-medium flex flex-col justify-center items-start'>
              <span>{card.title}</span>
              <span className='text-xs'>{card.desc}</span>
            </div>
          </div>)}
      </div>
      <div className="form flex flex-col xl:bg-black  xl:bg-opacity-85 xl:shadow-2xl xl:rounded-md xl:w-96 xl:h-96 space-y-2 sm:space-y-3 justify-center items-center">
        <h1 className='font-semibold sm:text-2xl xl:text-3xl xl:text-white'>Contact Form</h1>
        <div className='space-y-2 sm:space-y-3 flex flex-col justify-center items-center '>
          <input type="text" className='border-2 border-l-amber-500 py-1 px-2  text-sm sm:text-lg lg:text-base rounded-md focus:outline-none xl:text-lg xl:w-90' placeholder='Enter firstname' />
          <input type="text" placeholder='Enter lastname' className='border-2 text-sm sm:text-lg lg:text-base  border-l-amber-500 py-1 px-2 rounded-md focus:outline-none xl:text-lg xl:w-90' />
          <input type="email" placeholder='Enter email' className='border-2 text-sm sm:text-lg lg:text-base   py-1 border-l-amber-500 px-2 rounded-md focus:outline-none xl:text-lg xl:w-90 ' />
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-2 py-1 sm:px-4 sm:py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>
      </div>
    </div>
  )
}

export default Contact;
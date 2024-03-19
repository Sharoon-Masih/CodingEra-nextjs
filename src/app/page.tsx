import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Homepage = () => {
  return (
    <div className='home-container flex w-9/12 h-lvh  m-auto justify-evenly sm:justify-between lg: flex-col sm:flex-row'>
      <div className="text-container  space-y-2 flex justify-center items-center sm:items-start flex-col">
        <h1 className='text-3xl sm:text-5xl font-extrabold leading-snug text-center sm:text-start'>Creative Thoughts Community.</h1>
        <p className=' font-medium text-center sm:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt.</p>
        <div className="btn space-x-2 space-y-2 font-medium cursor-pointer">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Learn More
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             <Link href={"https://www.linkedin.com/in/sharoon-masih-360b19247/"}>Contact</Link>
            </span>
          </button>
        </div>
        <div className="social-logo cursor-pointer"><Image src={"/imgs/social-btn-logo.webp"} alt='social-btn' width={200} height={100}></Image></div>
      </div>
      <div className="img-container  items-center flex hover:animate-pulse"><Image src='/imgs/code.png' alt="codeimg" width={600} height={600} />
      </div>
    </div>
  )
}

export default Homepage;






import React from 'react'
import Leafyback from '../media/leafyback.jpg'
import { Carousel } from "@material-tailwind/react";
import bgimg from '../media/bgimg1.jpeg'

const Banner = () => {
  return (
    <div className='relative flex items-center flex-row content-center h-[500px] w-screen shadow-gray-300 mt-[130px]'>
    {/* Background Image */}
    <img src={Leafyback} className='absolute inset-0 object-cover w-full h-full opacity-[0.25] blur-sm' alt='Background' />

    {/* Content */}
    <div className='absolute z-10 flex flex-col mx-5 justify-center'>
    <p className='text-xl text-orange-800 font-semibold'>"Plants Make People Happy!"</p>
      <p className='text-5xl text-green-800 font-bold'>One Stop Solution</p>
      <p className='text-4xl text-green-700 font-semibold'>For All Gardening Requirements</p>
    </div>

    <div className='w-[976px] h-[480px] absolute top-1/2 right-2 transform -translate-y-1/2'>
    <Carousel transition={{ duration: 1 }} className='rounded-md shadow-l'>
      <img
        src={Leafyback}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>


  </div>
  )
}

export default Banner
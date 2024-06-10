import React from 'react'
import offerimg from '../media/adplantbanner.jpg'
const Offer = () => {
  return (
    <div className="h-[500px] w-screen relative flex items-center my-20">
        <img src={offerimg} className='absolute inset-0 object-cover w-full h-full opacity-[0.35] blur-sm' alt='Background' />
    
    <div className='absolute z-10 flex flex-col mx-5 justify-center'>
    <p className='text-[60px] text-green-800 font-extrabold'>USE COUPON CODE <span className='text-orange-500'>"FIRST25"</span> <br></br>TO GET 25% OFF</p>
    <p className='text-lg text-orange-600 font-bold'>*OFFER VALID ONLY ON SELECTED PRODUCTS</p>
    <button className='my-5 w-[120px] transition hover:scale-105 duration-300 font-medium text-md rounded-xl p-[6px] border-green-700 border-solid border-2 bg-white hover:text-white hover:bg-green-500'>BUY NOW!</button>

    </div>
    </div>
  )
}

export default Offer
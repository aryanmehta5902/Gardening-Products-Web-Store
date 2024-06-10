import React from 'react';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Bestselskeletons = () => {
  return (
    
      <div className='card-skeleton'>
        <div className='flex flex-col justify-center items-center h-[386px] w-[300px] rounded-md mx-5 my-5 border-gray-300 border-solid border-2 hover:shadow-2xl'>
          <Skeleton variant="rounded" height={240} width={250} sx={{ bgcolor: 'rgb(200 230 201)' }}/>
          <Skeleton variant='text' width={180} height={50} sx={{ fontSize: '1.25rem',bgcolor: 'rgb(200 230 201)' }}/>
          <div className='flex flex-row my-2 justify-center items-center'>
            <Skeleton variant='text' width={270} height={40} sx={{ fontSize: '1.125rem',bgcolor: 'rgb(200 230 201)' }}/>
            {/* <button onClick={()=>dispatch(addCart({'id':product._id,'title':product.title,'cost':product.cost,'qty':1,'img':product.insideimg1}),setVis(true))} className='transition hover:scale-105 duration-300 font-medium text-md rounded-xl p-[6px] border-green-700 border-solid border-2  hover:text-white hover:bg-green-800'>Add To Cart</button> */}
          </div>
        </div>
      </div>
     
  )
}

export default Bestselskeletons;

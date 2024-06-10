import React from 'react'
import { Link } from 'react-router-dom'
import { UseDispatch, useDispatch } from 'react-redux';
import { addCart } from '../redux/actions/productActions';

const Bestsellerprodrenderer = ({product,setVis}) => {

const dispatch=useDispatch();

  return (
    <div className='flex flex-col justify-center items-center h-[386px] w-[300px] rounded-md mx-5 my-5 border-green-700 border-solid border-2 hover:shadow-2xl'>
       <Link to={`/productdetail/${product.uniname}`}> <img className='h-[270px] w-auto hover:scale-105 ease-in duration-200' src={product.coverimg} /></Link>
        <p className='font-semibold text-xl'>{product.uniname.toUpperCase()}</p>
        <div className='flex flex-row my-2 justify-center items-center'>

        <p className='font-medium text-lg mx-2'>Rs {product.cost}</p>
        <button onClick={()=>dispatch(addCart({'id':product._id,'title':product.title,'cost':product.cost,'qty':1,'img':product.insideimg1}),setVis(true))} className='transition hover:scale-105 duration-300 font-medium text-md rounded-xl p-[6px] border-green-700 border-solid border-2  hover:text-white hover:bg-green-800'>Add To Cart</button>
        </div>
    </div>
  )
}

export default Bestsellerprodrenderer
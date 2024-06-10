import React,{useState} from 'react'
import DTlogo from "../media/DTlogo2.png";
import prof from "../media/profile.png"
import User from "../media/usericon.png"
import Cart from "../media/carticon.png"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navi = ({vis}) => {
	var [selected,setSelected]=useState('home')
	console.log(selected);

	const products=useSelector((state)=>state.cart.products);



  return (
    <div className=' fixed top-0 w-full z-50'>
      
      <nav class="bg-white shadow shadow-gray-300 w-100 px-8 md:px-auto">
	<div class="md:h-26 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		
		<div class="text-green-500 md:order-1">
			
		<img className="w-28" src={DTlogo} alt='DTimg' />

			{/* <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg> */}
		</div>
		<div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul class="flex font-semibold justify-between">
                
				<li class={"md:px-4 md:py-2 "+(selected==='home'?'text-green-700':'hover:text-green-500')}><Link to="/" onClick={()=>{setSelected('home')}}>HOME</Link></li>
				<li class={"md:px-4 md:py-2 "+(selected==='plantfood'?'text-green-700':'hover:text-green-500')}><Link to="/catagory/plantfood" onClick={()=>{setSelected('plantfood')}}>PLANT FOOD</Link></li>
				<li class={"md:px-4 md:py-2 "+(selected==='tools'?'text-green-700':'hover:text-green-500')}><Link to="/catagory/tools" onClick={()=>{setSelected('tools')}}>GARDENING TOOLS</Link></li>
				<li class={"md:px-4 md:py-2 "+(selected==='seed'?'text-green-700':'hover:text-green-500')}><Link to="/catagory/seed" onClick={()=>{setSelected('seed')}}>SEEDS</Link></li>
				<li class={"md:px-4 md:py-2 "+(selected==='waterequipments'?'text-green-700':'hover:text-green-500')}><Link to="/catagory/waterequipments" onClick={()=>{setSelected('waterequipments')}}>WATER EQUIPMENTS</Link></li>
        <li class={"md:px-4 md:py-2 "+(selected==='potandplant'?'text-green-700':'hover:text-green-500')}><Link to="/catagory/potandplant" onClick={()=>{setSelected('potandplant')}}>POT & PLANTS</Link></li>
        <li class={"md:px-4 md:py-2 "+(selected==='soil'?'text-green-700':'hover:text-green-500')}><Link to="/catagory/soil" onClick={()=>{setSelected('soil')}}>SOIL</Link></li>
			</ul>
		</div>
		
		<div class="order-2 md:order-3 flex">
		<Link to="/userlogin"><button class="mx-5 px-1 py-1 bg-white hover:bg-green-500 text-gray-50 rounded-full flex items-center gap-1">
                
			<img className="h-10 w-10" src={User} alt='DTimg' />
                
            </button></Link>

			<Link to="/cart"><button class=" py-1 bg-white  text-gray-50 rounded-full flex items-center gap-1">
                
			<img className="h-10 w-10" src={Cart} alt='DTimg' />
                
            </button></Link>
<p className='bg-green-100 h-5 w-5 rounded-2xl flex justify-center items-center'>{products.length}</p>
		</div>
		
	</div>
</nav>

{/* {console.log(vis)} */}

<div id="toast-default" className={"flex items-center h-10 justify-center w-full p-4 text-white bg-green-500 shadow dark:text-gray-400 dark:bg-gray-800 "+(vis?"":"hidden")} role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
	<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span class="sr-only">Fire icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">Item Added To The Cart Successfully!</div>
    
</div>


    </div>
  )
}

export default Navi
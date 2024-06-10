import React, { useState,useEffect } from 'react'
import './Cart.css'
import { useSelector } from 'react-redux';
import { delCart, qtyDec, qtyInc } from './redux/actions/productActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {

    // cart=JSON.parse(localStorage.getItem('cart'));
    const products=useSelector((state)=>state.cart.products);
    const dispatch=useDispatch();
    const [price,setPrice]=useState(0);
    console.log(products);
    var cart=products;

    const handlePrice=()=>{

        let ans=0;
        products.map((pri)=>{
            ans=ans+pri.qty*pri.cost
        })
        setPrice(ans);

    }


    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!==id);
        // Setcart(arr);
    }

    useEffect(()=>{
        handlePrice();
    })
    

  return (
    
    <div className='flex'>
    <div className='product-list'>
        <p className='mt-36 ml-20 text-4xl text-green-800 font-semibold'>PRODUCT CART</p>
        {products.map((item) => (
            <>
                <hr className="h-0.5 my-3 mx-5 bg-gray-300 border-1 dark:bg-gray-300 w-[70%]" />
                <div className='mainb'>

                    <div className='imgprod'>

                        <img src={item.img} />
                    </div>
                    <div className='inform'>
                        <h3 className='max-w-xl mt-3 mb-3 text-lg font-medium leading-loose tracking-wide text-black md:text-lg dark:text-gray-300'>{item.title}</h3>
                        <h5 className='max-w-xl mb-2 text-lg font-medium leading-loose tracking-wide text-gray-700 md:text-lg dark:text-gray-300'>Price: Rs {item.cost}</h5>



                        <div className='quantity'>
                            <button className="qtyb" onClick={() => dispatch(qtyInc({ 'id': item.id, 'title': item.title, 'cost': item.cost, 'qty': 1, 'img': item.insideimg1 }))}>+</button>
                            <button className="qtya">{item.qty}</button>
                            <button className="qtyb" onClick={() => dispatch(qtyDec({ 'id': item.id, 'title': item.title, 'cost': item.cost, 'qty': 1, 'img': item.insideimg1 }))}>-</button>
                        </div>
                        <button className="w-20 h-6 flex justify-center align-middle items-center my-2 transition hover:scale-105 duration-300 font-medium text-md rounded-xl p-[3px] border-green-700 border-solid border-2  hover:text-white hover:bg-green-800" onClick={() => dispatch(delCart({ 'id': item.id, 'title': item.title, 'cost': item.cost, 'qty': 1, 'img': item.insideimg1 }))}>Remove</button>
                    </div>

                </div>
            </>
        ))}
    </div>
    <div className='bg-gray-100 p-4 mt-52 h-56 w-96'>
        <center><h4 className='text-xl font-semibold mb-2 text-green-900'>Order Summary</h4></center>
        <div className='total'>
            <h4 className='text-sm text-gray-800'>Subtotal: <span className='ml-44'>Rs {price}</span></h4>
            <hr className="h-0.5 my-2 bg-gray-300 border-1 dark:bg-gray-300 w-78" />
            <h4 className='text-sm text-gray-800'>18% GST: <span className='ml-[174px]'>Rs {0.18*price}</span></h4>
            <hr className="h-0.5 my-2 bg-gray-300 border-1 dark:bg-gray-300 w-78" />
            <h4 className='text-base text-black'>Order Total: <span className='ml-[140px]'>Rs {1.18*price}</span></h4>
           <center> <Link to="/checkout"><button className=" my-2 w-1/2 h-10 px-4 py-3  flex items-center justify-center text-center text-white bg-green-700 border border-green-700 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-green-400 hover:text-white lg:w-80 rounded-xl">Checkout</button></Link></center>

        </div>
    </div>
</div>

  )
}

export default Cart


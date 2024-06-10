import React, { useState,useEffect } from 'react'
import './User.css'
import { Link, redirect, useHref } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { addCart } from './redux/actions/productActions';
import DTlogo from "./media/DTlogo2.png";
const Userlogin = () => {

    const [emailid,setEmailid]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(null)
    const [show,setShow]=useState(null)
    const [userdet,setUserdet]=useState(null)
    const [veri,setVeri]=useState(localStorage.getItem('veri') === 'true' ? true : false)
    const [loggedinuser,setLoggedinuser]=useState(null)
    const [cart,setCart]=useState([])
    const products=useSelector((state)=>state.cart.products);
    const dispatch=useDispatch();

    const handleCart = async (userid) => {
        try {
            const response = await fetch('/api/cart/');
            if (!response.ok) {
                throw new Error('Failed to fetch cart data');
            }
            const cartData = await response.json();
            console.log(cartData);
            const userCart = cartData.find((prod) => prod.userid === userid);
            if (userCart) {
                setCart(userCart.cart);
            } else {
                setError('Cart data not found for the user');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const users={emailid,password}
        const response = await fetch('/api/user');
        const json=await response.json()
        setUserdet(json)
        if(!response.ok){
                setError(json.error)
        }
        if(response.ok){
            json.map((userdets)=>{
                if(userdets.emailid===emailid){
                    if(userdets.password===password){
                        setVeri(true)
                        setLoggedinuser(userdets)
                        setShow(true)
                        localStorage.setItem('veri', true);
                        localStorage.setItem('loggedinuser', JSON.stringify(userdets));
                        handleCart(userdets.userid)
                        // Setcart([...cart,...(userdets.cart)]);

                    }
                    
                }

            })
            
           if(veri===true){
            setError(null)
            setEmailid('');
            setPassword('');
           }
           else{
            setError("enter correct email/password")
           }
            
        }

    }

    useEffect(() => {
        console.log("eff-", cart);
        if (Array.isArray(cart)) { // Check if cart is an array
            cart.forEach((prod) => {
                dispatch(addCart(prod));
            });
        }
    }, [cart]);

    

    //logout

    const logout=()=>{
        // Setcart([])
        setVeri(false)
        setLoggedinuser(null)
        localStorage.setItem('veri', false)
        localStorage.setItem('loggedinuser', null)
        localStorage.setItem('products', null)
        redirect("/")
        window.location.reload();
    }






  return (
    <div>
        { veri ? <div className='flex flex-col justify-center item-center mt-32'><h1 className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>Welcome {JSON.parse(localStorage.getItem('loggedinuser')).name}</h1>
        <Link to="/"><button onClick={logout}>Logout</button></Link>
        </div> :
//     <form className='create' onSubmit={handleSubmit}>
//         <h2>User Login</h2>
//         <div className='toge'>
//         <label>Email ID:</label>
//         <input type='text' onChange={(e)=>setEmailid(e.target.value)}
//         value={emailid} required
//         />
//         </div>
//         <div className='toge'>
// <label>Password:</label>
//         <input type='password' onChange={(e)=>setPassword(e.target.value)}
//         value={password} required />
//         </div>
//         <Link to="/userregistration">Don't have an account? Click Here!</Link>

// <button className='w-20 my-2 transition hover:scale-105 duration-300 font-medium text-md rounded-xl p-[3px] border-green-700 border-solid border-2  hover:text-white hover:bg-green-800'>Submit</button>
//        {error && <div className='error'>{error}</div>}
//     </form>
<section class="bg-gray-50 dark:bg-gray-900">
<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class=" mt-28 w-32 h-24 mr-2" src={DTlogo} alt="logo" /></a>
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type='text' onChange={(e)=>setEmailid(e.target.value)} value={emailid} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required="" />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" class="w-full text-white bg-green-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
            </form>
        </div>
    </div>
</div>
</section>
        }
    </div>
  )
}

export default Userlogin
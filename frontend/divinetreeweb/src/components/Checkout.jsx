import React, { useEffect,useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Userlogin from './Userlogin';


function Checkout({ setShowNaviFooter }) {
    const [x, setX] = useState(null);
    const [deli, setDeli] = useState(null);
    const history = useNavigate();
    // var x = localStorage.getItem("veri");
    console.log(x);
  useEffect(() => {
    // Hide Navi and Footer when component mounts
    setShowNaviFooter(false);

    // Show Navi and Footer when component unmounts
    // x = 
     const storedValue = localStorage.getItem("veri");
        setX(storedValue);
        const xyz=localStorage.getItem('loggedinuser');
        console.log(xyz);
        setDeli(JSON.parse(xyz));
    return () => setShowNaviFooter(true);


  }, []); // Run only once when component mounts and unmounts

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
  
  useEffect(() => {
    if (x === 'false') {
        history('/userlogin');
    }
}, [x, history]);

  return (
    x!=='false' ? <>
    <div className='flex'>
    <div className='product-list'>
        <p className='mt-10 ml-20 text-4xl text-green-800 font-semibold'>CHECKOUT</p>
        {products.map((item) => (
            <>
                <hr className="h-0.5 my-3 mx-5 bg-gray-300 border-1 dark:bg-gray-300 w-[70%]" />
                <div className='flex justify-center items-center'>

                    <div className='imgprod'>

                        <img src={item.img} className='w-24'/>
                    </div>
                    <div className='inform'>
                        <h3 className='max-w-xl mt-3 mb-3 text-lg font-medium leading-loose tracking-wide text-black md:text-lg dark:text-gray-300'>{item.title}</h3>
                        <h5 className='max-w-xl mb-2 text-lg font-medium leading-loose tracking-wide text-gray-700 md:text-lg dark:text-gray-300'>Price: Rs {item.cost}</h5>
                        <h5 className='max-w-xl mb-2 text-lg font-medium leading-loose tracking-wide text-black md:text-sm dark:text-gray-300'>Qty: {item.qty}</h5>



                        {/* <div className='quantity'>
                            <button className="qtyb" onClick={() => dispatch(qtyInc({ 'id': item.id, 'title': item.title, 'cost': item.cost, 'qty': 1, 'img': item.insideimg1 }))}>+</button>
                            <button className="qtya">{item.qty}</button>
                            <button className="qtyb" onClick={() => dispatch(qtyDec({ 'id': item.id, 'title': item.title, 'cost': item.cost, 'qty': 1, 'img': item.insideimg1 }))}>-</button>
                        </div> */}
                        {/* <button className="w-20 h-6 flex justify-center align-middle items-center my-2 transition hover:scale-105 duration-300 font-medium text-md rounded-xl p-[3px] border-green-700 border-solid border-2  hover:text-white hover:bg-green-800" onClick={() => dispatch(delCart({ 'id': item.id, 'title': item.title, 'cost': item.cost, 'qty': 1, 'img': item.insideimg1 }))}>Remove</button> */}
                    </div>

                </div>
            </>
        ))}
        
    </div>
    <div className='bg-gray-100 p-4 mt-52 mr-32 h-72 w-9/12 flex flex-col items-center justify-center'>
        <center><h4 className='text-xl font-semibold mb-2 text-green-900'>Order Summary</h4></center>
        <div className='total'>
            <h4 className='text-sm text-gray-800'>Subtotal: <span className='ml-44'>Rs {price}</span></h4>
            <hr className="h-0.5 my-2 bg-gray-300 border-1 dark:bg-gray-300 w-78" />
            <h4 className='text-sm text-gray-800'>18% GST: <span className='ml-[174px]'>Rs {0.18*price}</span></h4>
            <hr className="h-0.5 my-2 bg-gray-300 border-1 dark:bg-gray-300 w-78" />
            <h4 className='text-base text-black'>Order Total: <span className='ml-[140px]'>Rs {1.18*price}</span></h4>
           {/* <center> <Link to="/checkout"><button className=" my-2 w-1/2 h-10 px-4 py-3  flex items-center justify-center text-center text-white bg-green-700 border border-green-700 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-green-400 hover:text-white lg:w-80 rounded-xl">Checkout</button></Link></center> */}

        </div>
    </div>
    
</div>

{deli?<div className='bg-gray-100 p-4 pt-20 mt-20 ml-12 h-80 w-[90%] flex flex-col items-center justify-center'>
        <center><h4 className='text-2xl font-semibold mb-2 text-green-900'>Delivery Details:</h4></center>
        <div className='total'>
            <h4 className='text-base text-black my-2'>Name: <span className='ml-44 text-gray-800'>{deli.name}</span></h4>
            {/* <hr className="h-0.5 my-2 bg-gray-300 border-1 dark:bg-gray-300 w-78" /> */}
            <h4 className='text-base text-black my-2'>Address: <span className='ml-[174px] text-gray-800'>{deli.address}</span></h4>
            {/* <hr className="h-0.5 my-2 bg-gray-300 border-1 dark:bg-gray-300 w-78" /> */}
            <h4 className='text-base text-black my-2'>Valid EmailID: <span className='ml-[140px] text-gray-700'>{deli.emailid}</span></h4>
            <center><button className=" my-10 w-1/2 h-10 px-4 py-3  flex items-center justify-center text-center text-white bg-green-700 border border-green-700 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-green-400 hover:text-white lg:w-80 rounded-xl">Place Your Order</button></center>

        </div></div>:"loading"}

</>:

null
    
  );
}

export default Checkout;

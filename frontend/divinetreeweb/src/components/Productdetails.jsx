import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import backarrow from './media/arrow-left.png'
import frontarrow from './media/arrow-right.png'
import { useDispatch } from 'react-redux';
import { addCart } from './redux/actions/productActions';
import Specprodskeleton from './skeletons/Specprodskeleton';

const Productdetails = ({setVis}) => {
  const { Id } = useParams();
  const [prod, setProd] = useState(null);
  var [butt, setButt] = useState(null);
  var [l1, setL1] = useState([]);
  // var [ssimg, setSsimg] = useState({"img1":null,"img2":null});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProds = async () => {
      try {
        const response = await fetch('/api/product/' + String(`${Id}`));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsons = await response.json();
        if (jsons != null) {
          setL1([jsons.insideimg1, jsons.insideimg2])
          // setSsimg({"img1":jsons.insideimg1});
          // setSsimg({"img2":jsons.insideimg2});
        }
        console.log(l1);
        setProd(jsons);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProds();
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  const fbutton = (fid) => {
    setButt(fid)
  }

  //   const l1=[];

  //for slideshow

  var [count, setCount] = React.useState(0);
  // var count=0;

  const lenl1 = l1.length;

  const back = () => {
    setCount(count--);
    if (count === -1) {
      setCount(lenl1 - 1);
    }
    else {
      setCount(count--);
    }
    console.log(count);

  }
  const front = () => {
    setCount(count++);
    if (count === (lenl1)) {
      setCount(count = 0);
    }
    else {
      setCount(count++);
    }
    console.log(count);
  }

  var [qtytoggle,setQtytoggle]=useState(1);

  const qtyf=()=>{
    setQtytoggle(++qtytoggle);
  }

  const qtyb=()=>{
    var temp=qtytoggle;
    if(temp!=1){
      setQtytoggle(--qtytoggle);
    }
  }

  return (
    <div className='mbox'>
      {prod ? (
        <>
          <section class="py-10 font-poppins dark:bg-gray-800 my-40">
            <div class="max-w-6xl px-4 mx-auto">
              <div class="flex flex-wrap mb-24 -mx-4">
                <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                  <div class="sticky top-0 overflow-hidden ">
                    <div class="relative mb-6 lg:mb-10 lg:h-96">
                      <button class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#" onClick={back}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-green-500 bi bi-chevron-left dark:text-green-200" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                          </path>
                        </svg>
                      </button>
                      <img class="object-contain w-full lg:h-full" src={l1[count]} alt="" />
                      <button class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#" onClick={front}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-green-500 bi bi-chevron-right dark:text-green-200" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                          </path>
                        </svg>
                      </button>
                    </div>
                    <div class="flex-wrap hidden -mx-2 md:flex">
                      <div class="w-1/2 p-2 sm:w-1/4">
                        <a class="block border border-gray-200 hover:border-green-400 dark:border-gray-700 dark:hover:border-green-300" href="#">
                          <img class="object-contain w-full lg:h-28" src={l1[0]} alt="" />
                        </a>
                      </div>
                      <div class="w-1/2 p-2 sm:w-1/4">
                        <a class="block border border-gray-200 hover:border-green-400 dark:border-gray-700 dark:hover:border-green-300" href="#">
                          <img class="object-contain w-full lg:h-28" src={l1[1]} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full px-4 md:w-1/2">
                  <div class="lg:pl-20">
                    <div class="mb-6 ">
                      {/* <span class="px-2.5 py-0.5 text-xs text-green-600 bg-green-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">New
Arrival</span> */}
                      <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                        {prod.title}
                      </h2>

                      <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                        <span>Rs. {prod.cost}</span>

                      </p>
                    </div>
                    <div class="mb-6">
                      <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Description:</h2>
                      <div class="bg-gray-100 dark:bg-gray-700 rounded-xl w-[600px]">
                        {(prod.features).split('.').map((pro) => (
                          <ul className='list-disc list-inside'>
                            <li>{pro}</li><br></br>
                          </ul>
                        ))}
                      </div>
                    </div>
                    <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                      <span class="text-base text-gray-600 dark:text-gray-400">In Stock</span>
                      <p class="mt-2 text-sm text-green-500 dark:text-green-200">Ships from India
                        <span class="text-gray-600 dark:text-gray-400">
                          <br></br>Most customers receive within 7 days.
                        </span>
                      </p>
                    </div>
                    <div class="mb-6 "></div>
                    <div class="flex flex-wrap items-center mb-6">
                      <div class="mb-4 mr-4 lg:mb-0">
                        <div class="w-28">
                          <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                            <button onClick={()=>qtyb()} class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                              <span class="m-auto text-2xl font-thin">-</span>
                            </button>
                            <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder={qtytoggle} />
                            <button onClick={()=>qtyf()} class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                              <span class="m-auto text-2xl font-thin">+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="mb-4 lg:mb-0">
                        <button class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-green-600 hover:bg-green-600 hover:border-green-600 dark:bg-green-600 dark:hover:bg-green-500 dark:hover:border-green-500 dark:hover:text-gray-100">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                            </path>
                          </svg>
                        </button>
                      </div>
                      <button onClick={() => dispatch(addCart({ 'id': prod._id, 'title': prod.title, 'cost': prod.cost, 'qty': qtytoggle, 'img': prod.insideimg1 }),setVis(true))} class="w-full px-4 py-3 text-center text-green-600 bg-green-100 border border-green-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-green-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                        Add to cart
                      </button>
                    </div>
                    {/* <div class="flex gap-4 mb-6">
                      <a href="#" class="w-full px-4 py-3 text-center text-gray-100 bg-green-600 border border-transparent dark:border-gray-700 hover:border-green-500 hover:text-green-700 hover:bg-green-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl">
                        Buy now</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Specprodskeleton />
      )}
    </div>
  );
}

export default Productdetails
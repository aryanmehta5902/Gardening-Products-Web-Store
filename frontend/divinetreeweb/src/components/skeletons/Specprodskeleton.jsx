import React from 'react'
import Skeleton from '@mui/material/Skeleton';

const Specprodskeleton = () => {
  return (
    <div className='mbox'>
              <>
          <section class="py-10 font-poppins dark:bg-gray-800 my-40">
            <div class="max-w-6xl px-4 mx-auto">
              <div class="flex flex-wrap mb-24 -mx-4">
                <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                  <div class="sticky top-0 overflow-hidden ">
                    <div class="relative mb-6 lg:mb-10 lg:h-96">
                      {/* <button class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-gray-500 bi bi-chevron-left dark:text-green-200" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                          </path>
                        </svg>
                      </button> */}
                      <Skeleton variant="rounded" height={384} width={544} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/>
                      {/* <button class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-gray-500 bi bi-chevron-right dark:text-green-200" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                          </path>
                        </svg>
                      </button> */}
                    </div>
                    <div class="flex-wrap hidden -mx-2 md:flex">
                      <div class="w-1/2 p-2 sm:w-1/4">
                        <a class="block border border-gray-200 hover:border-green-400 dark:border-gray-700 dark:hover:border-green-300" href="#">
                        <Skeleton variant="rounded" height={112} width={122} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/>
                        </a>
                      </div>
                      <div class="w-1/2 p-2 sm:w-1/4">
                        <a class="block border border-gray-200 hover:border-green-400 dark:border-gray-700 dark:hover:border-green-300" href="#">
                        <Skeleton variant="rounded" height={112} width={122} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/>
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
                      

                      {/* <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 "> */}
                      

                      <h2 class="max-w-xl mt-3 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                      <Skeleton variant="rounded" height={96} width={464} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/>
                      </h2>

                      <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                        <span><Skeleton variant="rounded" height={32} width={78} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/></span>

                      </p>
                    </div>
                    <div class="mb-6">
                      {/* <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Description:</h2> */}
                      <Skeleton variant="rounded" height={352} width={600} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/>
                    </div>
                    <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                    <Skeleton variant="rounded" height={122} width={464} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/>
                    
                    </div>
                    <div class="flex flex-wrap items-center mb-6">
                      <div class="mb-4 mr-4 lg:mb-0">
                      <Skeleton variant="rounded" height={50} width={464} animation="wave" sx={{ bgcolor: 'rgb(200 230 201)' }}/>
                      </div>
                      
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
      
    </div>
  );
}

export default Specprodskeleton
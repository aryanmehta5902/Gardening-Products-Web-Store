import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Bestsellerprodrenderer from './home/Bestsellerprodrenderer';
import Bestselskeletons from './skeletons/Bestselskeletons';
const Catagorypages = ({setVis}) => {
  const [prod, setProd] = useState(null);
  const [sortBy, setSortBy] = useState('priceLowToHigh'); // Default sort by price low to high
  const [sliderValue, setSliderValue] = useState(800); // State variable for slider value
  const { catagory } = useParams();

  useEffect(() => {
    const fetchProds = async () => {
      try {
        const response = await fetch('/api/product');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsons = await response.json();
        setProd(jsons);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchProds();
  }, []);

  useEffect(() => {
    setSliderValue(800);
  }, [catagory]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (prod && sortBy) {
      const sortedProd = [...prod];
      sortedProd.sort((a, b) => {
        if (sortBy === 'priceLowToHigh') {
          return a.cost - b.cost;
        } else {
          return b.cost - a.cost;
        }
      });
      setProd(sortedProd);
    }
  }, [prod, sortBy]);

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
    console.log(sliderValue); // Update the slider value state
  };

  const SliderComponent = useMemo(() => {
    return (
      <div class="relative mb-6 w-1/2">
        <label for="labels-range-input" class="sr-only">Labels range</label>
        <input
          id="labels-range-input"
          type="range"
          value={sliderValue} // Bind the value to state variable
          min="200"
          max="800"
          step="200" // Set step to 500 so the slider snaps to 4 specific points
          class="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={handleSliderChange} // Handle slider change
        />
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Rs 200</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Rs 400</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">Rs 600</span>
        <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">All Products</span>
      </div>
    );
  }, [sliderValue]);

  return (
    <div className='flex flex-col'>
      
      <div className='mt-48 mx-20 flex'>
        {      
        SliderComponent}
        <select value={sortBy} onChange={handleSortChange} className='mx-20 bg-white transition hover:scale-105 duration-300 font-medium text-md rounded-xl p-[6px] border-green-700 border-solid border-2'>
          <option value='priceLowToHigh'>Price Low to High</option>
          <option value='priceHighToLow'>Price High to Low</option>
        </select>
      </div>
      <div className='grid grid-cols-4 gap-4 mx-10'>
        {prod!==null ?
          (
            prod
            .filter((product) => product.catagory.includes(catagory) && product.cost<=sliderValue)
            .map((product) => (
              <Bestsellerprodrenderer key={product.id} product={product} setVis={setVis}/>
            ))):<>
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            </>
            }
      </div>
    </div>
  );
};

export default Catagorypages;

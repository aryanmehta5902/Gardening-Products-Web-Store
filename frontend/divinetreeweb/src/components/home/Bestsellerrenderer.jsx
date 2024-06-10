import React, { useEffect,useState } from 'react'
import Bestsellerprodrenderer from './Bestsellerprodrenderer';
import Bestselskeletons from '../skeletons/Bestselskeletons';

const Bestsellerrenderer = ({id,setVis}) => {
    const [prod, setProd] = useState(null);
    useEffect(()=>{
        const fetchprod=async()=>{
            try{
                const response=await fetch('api/product');
                if(!response.ok){
                    throw new Error('Network response was nt ok');
                }
                const jsons=await response.json();
                setProd(jsons);
                console.log(jsons);
            }
            catch(error){
                console.error('Error fetching data:', error);
            }
            
        };
fetchprod();
    },[]);

  return (
    <div className='grid grid-cols-4 gap-4 '>
    
      {prod!==null? (
        id === 'all' ?
          prod.map((product) => (
            <Bestsellerprodrenderer key={product._id} product={product} setVis={setVis}/>
          )) :
          prod.filter((product) => product.catagory.includes(id))
            .map((product) => (
              <Bestsellerprodrenderer key={product._id} product={product} setVis={setVis}/>
            ))
      ):<><Bestselskeletons />
      <Bestselskeletons />
      <Bestselskeletons />
      <Bestselskeletons />
      <Bestselskeletons />
      <Bestselskeletons />
      <Bestselskeletons />
      <Bestselskeletons />
      
      </>}
    </div>
  
  )
}

export default Bestsellerrenderer
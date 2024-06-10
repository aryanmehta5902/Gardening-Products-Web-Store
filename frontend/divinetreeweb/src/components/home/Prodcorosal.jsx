
import React, { useEffect } from 'react'
import Bestsellerprodrenderer from './Bestsellerprodrenderer'
import './Showprod.css'
import './Bestseller.css'
import backarrow from '../media/arrow-left.png'
import frontarrow from '../media/arrow-right.png'

import Bestselskeletons from '../skeletons/Bestselskeletons'

const Prodcorosal = ({setVis}) => {

    var [state, setstate] = React.useState({im1:0,im2:1,im3:2,im4:3});
    // var arrprod=[epsonsalt,nicotex,rose,supergrow,hose,pruner];
//scrollintoview
const [prod, setProd] = React.useState(null);
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
    

   

    const movb=()=>{
        var imval1=state.im1;
        var imval2=state.im2;
        var imval3=state.im3;
        var imval4=state.im4;

        if (state.im1<=0) {
            console.log("nosplace");
            setstate({im1:0,im2:1,im3:2,im4:3})
           
        }
        else{
            setstate({im1:--imval1,im2:--imval2,im3:--imval3,im4:--imval4})
        }
    }

    const movf=()=>{
        // setstate({im1:2})
        var imval1=state.im1;
        var imval2=state.im2;
        var imval3=state.im3;
        var imval4=state.im4;
        console.log(imval1,imval2,imval3,imval4);
        if (state.im4>=prod.length-1) {
            
            // setstate({im1:2,im2:3,im3:4,im4:5});
            console.log("limit");
            
            
        }
        else{
            setstate({im1:++imval1,im2:++imval2,im3:++imval3,im4:++imval4})
            console.log(state);
        }
    }

  return (
    <div className='flex flex-col justify-center items-center my-20'>
        <p className='text-4xl text-green-800 font-semibold'>NEW ARIVALS</p>
    <div className='flex items-center justify-center'>
        <button id='rotback' onClick={movb}><img src={backarrow} alt="barrow" /></button>
     {prod!==null?(
        <>
            <Bestsellerprodrenderer product={prod[state.im1]} setVis={setVis}/>
            <Bestsellerprodrenderer product={prod[state.im2]} setVis={setVis}/>
            <Bestsellerprodrenderer product={prod[state.im3]} setVis={setVis}/>
            <Bestsellerprodrenderer product={prod[state.im4]} setVis={setVis}/>
            </>):<>
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            <Bestselskeletons />
            </>
        
     }
        
        <button id='rotfront' onClick={movf}><img src={frontarrow} alt="barrow" /></button>
        
    </div>
    
        
       
    </div>
  )
}

export default Prodcorosal
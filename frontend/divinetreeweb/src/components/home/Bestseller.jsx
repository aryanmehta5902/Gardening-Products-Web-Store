import React,{useState} from 'react'
import Bestsellerrenderer from './Bestsellerrenderer'
const Bestseller = ({setVis}) => {

    var[id,setId]=useState('all')

   

  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <p className='text-4xl text-green-800 font-semibold'>BESTSELLERS</p>
        <div className='flex flex-row justify-between font-medium text-lg'>
            <button className={'mx-5 my-3 '+((id=='all')?'decoration-4 underline decoration-green-800':'')} onClick={()=>{setId('all')}}>ALL</button>
            <button  className={'mx-5 my-3 '+((id=='plantfood')?'decoration-4 underline decoration-green-800':'')} onClick={()=>{setId('plantfood')}}>PLANT FOOD</button>
            <button  className={'mx-5 my-3 '+((id=='tools')?'decoration-4 underline decoration-green-800':'')} onClick={()=>{setId('tools')}}>GARDENING TOOLS</button>
            <button  className={'mx-5 my-3 '+((id=='seed')?'decoration-4 underline decoration-green-800':'')} onClick={()=>{setId('seed')}}>SEEDS</button>
            <button  className={'mx-5 my-3 '+((id=='waterequipments')?'decoration-4 underline decoration-green-800':'')} onClick={()=>{setId('waterequipments')}}>WATER EQUIPMENTS</button>
            <button  className={'mx-5 my-3 '+((id=='potandplant')?'decoration-4 underline decoration-green-800':'')} onClick={()=>{setId('potandplant')}}>POT & PLANTS</button>
            <button  className={'mx-5 my-3 '+((id=='soil')?'decoration-4 underline decoration-green-800':'')} onClick={()=>{setId('soil')}}>SOIL</button>
        </div>
        <div>
            <Bestsellerrenderer id={id} setVis={setVis}/>
        </div>
    </div>
  )
}

export default Bestseller
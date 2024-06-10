import React from 'react'
import Navi from './Navi'
import Banner from './Banner'
import Bestseller from './Bestseller'
import Bestsellerprodrenderer from './Bestsellerprodrenderer'
import Footers from './Footers'
import Offer from './Offer'
import Prodcorosal from './Prodcorosal'


const Home = ({setVis}) => {
  return (
    <div>
        
        <Banner />
        <Bestseller setVis={setVis}/>
        <Offer />
        <Prodcorosal setVis={setVis}/>
        
        
    </div>
  )
}

export default Home
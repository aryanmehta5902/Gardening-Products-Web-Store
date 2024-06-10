
import './App.css';
import Navi from './components/home/Navi';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route, useRoutes, Switch, Link, Outlet } from "react-router-dom";
import Catagorypages from './components/Catagorypages';
import Footers from './components/home/Footers';
import Productdetails from './components/Productdetails';
import Cart from './components/Cart';
import Userlogin from './components/Userlogin';
import User from './components/User';
import { useEffect, useState } from 'react';
import React from 'react';
import Checkout from './components/Checkout';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const Lazycatagory=React.lazy(()=>import('./components/Catagorypages'))
function App() {

  var [vis,setVis]=useState(false);
  const [showNaviFooter, setShowNaviFooter] = useState(true);

  useEffect(() => {
    if (vis) {
        const timeout = setTimeout(() => {
            setVis(false); // Change vis back to false after 2 seconds
        }, 2000);

        // Clear the timeout when the component unmounts or vis changes again
        return () => clearTimeout(timeout);
    }
}, [vis]);

  return (<SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <BrowserRouter>
      {showNaviFooter && <Navi vis={vis}/>} 
      
        <Routes>
          
            <Route index element={<Home setVis={setVis}/>} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/catagory/:catagory" element={<React.Suspense fallback="loading..."><Lazycatagory setVis={setVis}/></React.Suspense> } />
            <Route exact path="/productdetail/:Id" element={<Productdetails setVis={setVis}/>} />
            <Route exact path="/userregistration" element={<User />} />
            <Route exact path="/userlogin" element={<Userlogin />} />
            <Route exact path="/checkout" element={<Checkout setShowNaviFooter={setShowNaviFooter} />} />

            </Routes>
           { showNaviFooter && <Footers />}
            
      </BrowserRouter></SkeletonTheme>
      
  );
}

export default App;

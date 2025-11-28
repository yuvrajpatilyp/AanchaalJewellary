import React from 'react'

import HeroBanner from './HomePage/pages/Pearlbanner';
import NavigationBar from './Reusable/NavigationBar';
import { Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import Earringsbanner from './HomePage/pages/Earringsbanner';
import SilverIdolsPage from './HomePage/pages/SilverIdolsPage';
import MangalsutraPage from './HomePage/pages/MangalsutraPage';
import Footer from './Reusable/Footer';
import ShopBestseller from './HomePage/pages/ShopBestseller';
import CategoryBar from './Reusable/CategoryBar';

function App() {
  return (
    <div>
      <NavigationBar/>
      <CategoryBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/pearl" element={<HeroBanner />} />
      <Route path="/earrings" element={<Earringsbanner />} /> 
      <Route path='/silver-idols' element={<SilverIdolsPage />} />
      <Route path='/mangalsutra' element={<MangalsutraPage />} /> 
      <Route path='/shop' element={<ShopBestseller/>} />
    
     </Routes>
     <Footer />
    </div>
    
  )
}

export default App

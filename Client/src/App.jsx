import React from 'react'

import HeroBanner from './HomePage/pages/Pearlbanner';
import NavigationBar from './Resuable/NavigationBar';
import { Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import Earringsbanner from './HomePage/pages/Earringsbanner';
import SilverIdolsPage from './HomePage/pages/SilverIdolsPage';
import MangalsutraPage from './HomePage/pages/MangalsutraPage';

function App() {
  return (
    <div>
      <NavigationBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/pearl" element={<HeroBanner />} />
      <Route path="/earrings" element={<Earringsbanner />} /> 
      <Route path='/silver-idols' element={<SilverIdolsPage />} />
      <Route path='/mangalsutra' element={<MangalsutraPage />} />
     </Routes>
    </div>
  )
}

export default App

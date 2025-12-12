
import React from 'react'
import NavigationBar from './Reusable/NavigationBar'
import CasualWear from './HomePage/CasualWear'
import Home from './HomePage/Home'
import Footer from './Reusable/Footer'
import { Route, Routes } from 'react-router-dom'
import Tradditional from './HomePage/Tradditional'
import PartyWear from './HomePage/PartyWear'
import Womenscollection from './HomePage/Womenscollection'
import Menscollection from './HomePage/Menscollection'
import Kidscollection from './HomePage/Kidscollection'
import HeroBanner from './HomePage/pages/Pearlbanner'
import Earringsbanner from './HomePage/pages/Earringsbanner'
import ShopBestseller from './HomePage/pages/ShopBestseller'
import SilverIdolsPage from './HomePage/pages/SilverIdolsPage'
import MangalsutraPage from './HomePage/pages/MangalsutraPage'
import CategoryBar from './Reusable/CategoryBar'
import MyAccount from './components/MyAccount'
import Contact from './contact/Contact'
import DiamondNecklace from './Pages/DiamondNecklace'
import GoldNecklace from './Pages/GoldNecklace'
import PlatinumRings from './Pages/PlatinumRings'
import DiamondEarrings from './Pages/DiamondEarrings'
import GoldBangles from './Pages/GoldBangles'
import DiamondBangles from './Pages/DiamondBangles'
import SilverRings from './Pages/SilverRings'
import SilverNecklace from './Pages/SilverNecklace'
function App() {
  return (
    <div>
        <NavigationBar/>
         <CategoryBar/>
      {/*routes & paths*/}
       <Routes>
 
           {/* */}
          <Route path='/' element={<Home/>}/>
          <Route path='/casual' element={<CasualWear/>} />
          <Route path='/tradditional' element={<Tradditional/>}/>
          <Route path='/partywear' element={<PartyWear/>}/>
          <Route path='/womenscollection' element={<Womenscollection/>}/>
          <Route path='/menscollection' element={<Menscollection/>}/>
          <Route path='/kidscollection' element={<Kidscollection/>}/>
          
          {/*slide banner*/}
          <Route path='/pearl' element={<HeroBanner/>}/>
          <Route path='/earrings' element={<Earringsbanner/>}/>
          <Route path='/necklace' element={<DiamondNecklace/>}/>
          <Route path='/gold' element={<GoldNecklace/>}/>
          <Route path='/ring' element={<PlatinumRings/>}/>
          
          {/* category slider */}
          <Route path='/earring' element={<DiamondEarrings/>}/>
          <Route path='/bangles' element={<GoldBangles/>}/>
          <Route path='/bracelets' element={<DiamondBangles/>}/>
          <Route path='/rings' element={<SilverRings/>}/>
          <Route path='/necklaces' element={<SilverNecklace/>}/>

          {/* best sellers */}
          <Route path='/shop' element={<ShopBestseller/>}/>
          
          {/* new arrival */}   
          <Route path='/silver-idols' element={<SilverIdolsPage />} />
          <Route path='/mangalsutra' element={<MangalsutraPage />} />

           {/*  */}
          {/* <Route path='/myAccount' element={<MyAccount />} />
          <Route path='/contact' element={<Contact />} /> */}
       </Routes> 
       <Footer />    
     
    </div>
   
  )
}
 
export default App


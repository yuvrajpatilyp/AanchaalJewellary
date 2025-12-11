
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

          {/**/}
          <Route path='/pearl' element={<HeroBanner/>}/>
          <Route path='/earrings' element={<Earringsbanner/>}/>

          {/*best sellers*/}

          <Route path='/shop' element={<ShopBestseller/>}/>
          
           {/* nwe arrival*/}
             
          <Route path='/silver-idols' element={<SilverIdolsPage />} />
          <Route path='/mangalsutra' element={<MangalsutraPage />} />
            
          <Route path='/myAccount' element={<MyAccount />} />
          <Route path='/contact' element={<Contact />} />
       </Routes> 
       <Footer />    
     
    </div>
    // <Routes>
    //   <Route path="/" element={<Footer/>} />
    // </Routes>
  )
}
 
export default App


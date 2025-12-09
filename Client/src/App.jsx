import React from 'react'
import NavigationBar from './Reusable/NavigationBar'
import CategoryBar from './Reusable/CategoryBar'
import GoldBangles from './Pages/GoldBangles'
import GoldEarrings from './Pages/GoldEarrings'
import GoldNecklace from './Pages/GoldNecklace'
import GoldRings from './Pages/GoldRings'
import DiamondBangles from './Pages/DiamondBangles'
import DiamondEarrings from './Pages/DiamondEarrings'
import DiamondNecklace from './Pages/DiamondNecklace'
import DiamondRings from './Pages/DiamondRings'
import PlatinumBangles from './Pages/PlatinumBangles'
import PlatinumEarrings from './Pages/PlatinumEarrings'
import PlatinumNecklace from './Pages/PlatinumNecklace'
import PlatinumRings from './Pages/PlatinumRings'
import SilverBangles from './Pages/SilverBangles'
import SilverEarrings from './Pages/SilverEarrings'
import SilverNecklace from './Pages/SilverNecklace'
import SilverRings from './Pages/SilverRings'
import { Route, Routes } from 'react-router-dom'
import Footer from './Reusable/Footer'
// import Bridalcollection from './Pages/Bridalcollection'
// import Haldicollection from './Pages/Haldicollection'
// import Sangeetcollection from './Pages/Sangeetcollection'

function App() {
  return (
    <div>
      <NavigationBar/>
      <CategoryBar/>

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<h1></h1>} />

        { /* GOLD */ }

        <Route path="/gold/goldbracelets" element={<GoldBangles />} />
        <Route path="/gold/goldearrings" element={<GoldEarrings />} />
        <Route path="/gold/goldnecklaces" element={<GoldNecklace />} />
        <Route path="/gold/goldrings" element={<GoldRings />} />

        {/* DIAMOND */}
         <Route path="/diamond/diamondbracelets" element={<DiamondBangles />} />
         <Route path="/diamond/diamondearrings" element={<DiamondEarrings />} />
         <Route path="/diamond/diamondnecklaces" element={<DiamondNecklace />} />
         <Route path="/diamond/diamondrings" element={<DiamondRings />} />

         {/* PLATINUM */}
         <Route path="/platinum/platinumbracelets" element={<PlatinumBangles />} />
         <Route path="/platinum/platinumearrings" element={<PlatinumEarrings />} />
         <Route path="/platinum/platinumnecklaces" element={<PlatinumNecklace />} />
         <Route path="/platinum/platinumrings" element={<PlatinumRings />} />
         
         {/* SILVER */}
         <Route path="/silver/silverbracelets" element={<SilverBangles />} />
         <Route path="/silver/silverearrings" element={<SilverEarrings />} />
         <Route path="/silver/silvernecklaces" element={<SilverNecklace />} /> 
         <Route path="/silver/silverrings" element={<SilverRings />} />
       
         {/* BRIDAL */}
         {/* <Route path="/wedding/bridalcollection" element={<Bridalcollection />} />
         <Route path="/wedding/haldi&mehndicollection" element={<Haldicollection/>} />
         <Route path="/wedding/sangeetcollection" element={<Sangeetcollection />} /> */}
       
       
       
      </Routes>
      <Footer />
    </div>
   
   
  )
}

export default App

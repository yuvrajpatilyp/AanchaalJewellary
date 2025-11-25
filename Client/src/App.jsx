import React from 'react'

import CasualWear from './HomePage/CasualWear'
import Home from './HomePage/Home'
import { Route, Routes } from 'react-router-dom'
import Tradditional from './HomePage/Tradditional'
import PartyWear from './HomePage/PartyWear'
import Womenscollection from './HomePage/Womenscollection'
import Menscollection from './HomePage/Menscollection'
import Kidscollection from './HomePage/Kidscollection'





function App() {
  return (
    <div>
      {/*routes & paths*/}
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/casual' element={<CasualWear/>} />
          <Route path='/tradditional' element={<Tradditional/>}/>
          <Route path='/partywear' element={<PartyWear/>}/>
          <Route path='/womenscollection' element={<Womenscollection/>}/>
          <Route path='/menscollection' element={<Menscollection/>}/>
          <Route path='/kidscollection' element={<Kidscollection/>}/>

       </Routes>
      
        
      
    </div>
  )
}

export default App
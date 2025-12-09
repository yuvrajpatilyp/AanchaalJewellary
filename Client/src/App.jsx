import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import OrderHistory from './Components/OrderHistory'
import MyCancellation from './Components/MyCancellation'
import MyReviews from './Components/MyReviews'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/cancellation" element={<MyCancellation/>}/>
        <Route path="/reviews" element={<MyReviews/>}/>
      </Routes>
    </div>
  )
}

export default App

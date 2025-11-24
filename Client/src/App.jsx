import React from 'react'
import NavigationBar from './Resuable/NavigationBar'
import CategoryBar from './Resuable/CategoryBar'
import Footer from './Resuable/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <CategoryBar/>
    </div>
    // <Routes>
    //   <Route path="/" element={<Footer/>} />
    // </Routes>
  )
}

export default App

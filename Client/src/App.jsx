import React from 'react'
import NavigationBar from './Reusable/NavigationBar'
import CategoryBar from './Reusable/CategoryBar'
import Footer from './Reusable/Footer'
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

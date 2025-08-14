import React from 'react'
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/showcart" element={<Cart/>}/>

      </Routes>
    </div>
  )
}

export default App
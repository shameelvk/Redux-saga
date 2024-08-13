import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
  )
}

export default App
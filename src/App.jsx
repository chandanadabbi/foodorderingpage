import React from 'react'
import {Routes,Route} from "react-router-dom"
import "./App.css"
import Home from './components/Home/Home'
import Cart from "./components/Cart/Cart"



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    
  )
}

export default App

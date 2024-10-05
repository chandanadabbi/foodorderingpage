import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 >
        Food Ordering Page
      </h2>
      <Link to="/cart"><h2>Cart</h2></Link>

    </div>
  )
}

export default Navbar

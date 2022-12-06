import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function NavBar() {
  return (
    <div className='header'>
      <div className='navbar-container'>
        <Link className="navbar-logo" to="/">FUNiTURES</Link> <div className='nav-menu'>
          <Link className='nav-links' to="/">Home</Link>
          <Link className='nav-links' to="/products">Products</Link>
          <Link className='nav-links' to="/cart">Cart</Link>
          <Link className='nav-links' to="/contact">Contact</Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
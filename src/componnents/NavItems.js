import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export const NavItems = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true)

  return (
    <div className="nav-items">
        <ul>
            <li>
              <NavLink to = "/">Home</NavLink>
            </li>
            <li>
              <NavLink to = "/about">About</NavLink>
            </li>
            <li>
              <NavLink to = "/contact">Contact</NavLink>
            </li>
            <li>Cart</li>
            <li>
              {isLoggedIn? 
              <button onClick={() => {
                return setIsLoggedIn(!isLoggedIn)
              }}>LogOut</button>
               : <button onClick={() => {
                return setIsLoggedIn(!isLoggedIn)
               }}>LogIn</button>}
            </li>
        </ul>
    </div>
  )
}

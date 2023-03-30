import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CircleIcon from '@mui/icons-material/Circle';
import useOnline from '../utils/useOnline';

export const NavItems = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const isOnline = useOnline()

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
            <li>
              <NavLink to = "/instamart">InstaMart</NavLink>
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
            {isOnline ?<CircleIcon fontSize='1rem' color="success"/> :
             <CircleIcon fontSize='1rem' color="error"/>}
        </ul>
        
    </div>
  )
}

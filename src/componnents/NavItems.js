import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CircleIcon from '@mui/icons-material/Circle';
import useOnline from '../utils/useOnline';

export const NavItems = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const isOnline = useOnline()
  const isActive = ({ isActive }) => isActive ? 'bg-red-200 font-bold p-1 rounded-md' : null

  return (
    <div >
        <ul className="flex justify-between mt-10 space-x-5 tracking-wider text-lg">
            <li>
              <NavLink className={ isActive } to = "/">Home</NavLink>
            </li>
            <li>
              <NavLink className={ isActive } to = "/about">About</NavLink>
            </li>
            <li>
              <NavLink className={ isActive } to = "/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink className={ isActive } to = "/instamart">InstaMart</NavLink>
            </li>
            <li className='tracking-wider text-lg'>Cart</li>
            <li>
              {isLoggedIn? 
              <button className='tracking-wider text-lg' onClick={() => {
                return setIsLoggedIn(!isLoggedIn)
              }}>LogOut</button>
               : <button className='tracking-wider text-lg' onClick={() => {
                return setIsLoggedIn(!isLoggedIn)
               }}>LogIn</button>}
            </li>
            {isOnline ?<CircleIcon fontSize='1rem' color="success"/> :
             <CircleIcon fontSize='1rem' color="error"/>}
        </ul>
        
    </div>
  )
}

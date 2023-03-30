import React from 'react'
import { Logo } from './Logo'
import { NavItems } from './NavItems'
import './Header.css'
import './NavItems.css'
import './Logo.css'

export const Header = () => {
  return (
    <div className="header">  
        <Logo />
        <NavItems />
    </div>
  )
}

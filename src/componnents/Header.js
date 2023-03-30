import React from 'react'
import { Logo } from './Logo'
import { NavItems } from './NavItems'

export const Header = () => {
  return (
    <div className="header">  
        <Logo />
        <NavItems />
    </div>
  )
}

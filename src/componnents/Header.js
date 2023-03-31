import React from 'react'
import { Logo } from './Logo'
import { NavItems } from './NavItems'

export const Header = () => {
  return (
    <div className='flex justify-between bg-purple-100 m-1 shadow-lg'>  
        <Logo />
        <NavItems />
        <Logo />
    </div>
  )
}

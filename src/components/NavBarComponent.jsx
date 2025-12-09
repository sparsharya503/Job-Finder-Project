import React from 'react'
import './NavBarComponent.css'
import { NavLink } from 'react-router-dom'
const NavBarComponent = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>Job Finder</div>
      <div className='nav-links'>
        <NavLink to='/' className={({isActive})=>isActive?"active":"not-active"}>Home</NavLink>
        <NavLink to='/about-us' className={({isActive})=>isActive?"active":"not-active"}>About Us</NavLink>
        <NavLink to='/search' className={({isActive})=>isActive?"active":"not-active"}>Search</NavLink>
      </div>
    </div>
  )
}

export default NavBarComponent

import React from 'react'
import './styling/leftnav.css'
import Logo from "../assets/logo.png"
import DashboardIcon from '../../public/dashboard.png'
import { NavLink } from 'react-router-dom'

export default function LeftNav() {

  const activeStyles = {
    fontWeight: '700'
  }

  return (
    <div className='leftnav-cn'>
      <div className="leftnav">
        <img src={Logo} className='logo'/>
        <div className='dashboard-link'>
          <img src={DashboardIcon} className='dashboard-icon'/>
          <NavLink to='/' style={({isActive}) => isActive ? activeStyles : null }>DashBoard</NavLink>
        </div>
        <h2>Data</h2>
        <div className='nav-options'>
          <NavLink to='Manage' style={({isActive}) => isActive ? activeStyles : null }>Manage Teams</NavLink>
          <NavLink to='Invoices' style={({isActive}) => isActive ? activeStyles : null }>Invoices Balance</NavLink>
        </div>
        <h2>Pages</h2>
        <div className="nav-options">
          <NavLink to='ProfileForm' style={({isActive}) => isActive ? activeStyles : null }>Profile Form</NavLink>
        </div>
      </div>
    </div>
  )
}

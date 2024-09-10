import React from 'react'
import LeftNav from './leftnav'
import { Outlet } from 'react-router-dom'
import './styling/layout.css'

export default function Layout() {
  return (
    <div>
        <LeftNav />
        <div className='outlet'>
          <Outlet />
        </div>   
    </div>
  )
}

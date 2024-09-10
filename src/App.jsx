import React from 'react'
import './App.css'
import Layout from './components/layout'
import Dashboard from './pages/dashboard'
import Manage from './pages/manage'
import Invoices from './pages/invoices'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProfileForm from './pages/profileform'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Dashboard />}/>
      <Route path='Manage' element={<Manage />}/>
      <Route path='Invoices' element={<Invoices />}/>
      <Route path='ProfileForm' element={<ProfileForm />}/>
    </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './component/About'
import Navbar from './component/Navbar'
import { createBrowserRouter , route } from 'react-router-dom'
import Login from './component/Login'

function App() {
  const router =createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
  ])

  return (
    <>
   
    <Navbar/>
    <RouterProvider router={router} />
      <About/>
    </>
  )
}

export default App

import React from 'react'
import { Router_App } from './config/Router_App'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'




const App = () => {
  return ( <div>
    <Router_App/>
  </div>
  )
}

export default App
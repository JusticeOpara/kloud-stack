import React from "react"
import { useState } from 'react'
import './App.css'
import Cloud from './components/Cloud'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="container">
      <Navbar
        darkmode={console.log(darkMode,"family ")}
        toggleDarkMode={toggleDarkMode}
        
      />
      <Cloud
        darkmode={darkMode}
      />
    </div>
  )
}

export default App

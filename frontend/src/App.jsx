import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import RightPanel from './components/RightPanel'
import Footer from './components/Footer'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <div style={{ marginLeft: "0", padding: "20px", marginTop: "64px" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "1rem" }}>
      
      <Chat roomName="general" />
      </main>
      <RightPanel />
      
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/main_page'
import NavBar from './components/nav_bar'
import HeroSection from './components/Hero_container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)
  console.log(JSON.stringify(import.meta.env.VITE_REACT_APP_ENV), "dskjdksjdkskjdsk");

  return (
    <>
    <NavBar/>
    <div className='container'>
      
{/*      
      <Routes>

        <Route path='/' element={<Home/>} />

      </Routes> */}
    
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/main_page'
import NavBar from './components/nav_bar'
import HomePage from './templates/home'

function App() {
  const [count, setCount] = useState(0)
  console.log(JSON.stringify(import.meta.env.VITE_REACT_APP_ENV), "dskjdksjdkskjdsk");

  return (
    <div className='container'>
    <NavBar/>
    <HomePage/>
    
    </div>
  )
}

export default App

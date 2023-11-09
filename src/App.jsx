import { useState } from 'react'

import './App.css'
// import Greet from './components/main_page'
import NavBar from './components/nav_bar'
import HomePage from './templates/home'

function App() {
  const [count, setCount] = useState(0)
  console.log(JSON.stringify(import.meta.env.VITE_REACT_APP_ENV), "dskjdksjdkskjdsk");

  return (
    <>
    <NavBar/>
    <HomePage/>
    
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='appl'>
        <Navbar />
        <div className='cardds'>
        <Card head={"This Is TITle"} desc={"This is the Description"}/>
        <Card head={"This Is TITle"} desc={"This is the Description"}/>
        <Card head={"This Is TITle"} desc={"This is the Description"}/>
        <Card head={"This Is TITle"} desc={"This is the Description"}/>
        <Card head={"This Is TITle"} desc={"This is the Description"}/>
        <Card head={"This Is TITle"} desc={"This is the Description"}/>
        </div>
      </div>
    </>
  )
}

export default App

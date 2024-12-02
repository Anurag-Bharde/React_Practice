import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comm from './components/Comm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='grid grid-cols-5'>
      <div className='bg-slate-900 col-span-1'>asdfa</div>
      <div className='bg-slate-200 col-span-3'><Comm /></div>
      <div className='bg-slate-900 h:100% col-span-1'>sdaf</div>
     </div>
    </>
  )
}

export default App

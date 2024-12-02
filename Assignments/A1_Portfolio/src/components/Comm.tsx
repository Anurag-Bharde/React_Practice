import React from 'react'
import Navigatin from './Navigatin'
import Aboutme from './Aboutme'
import Skills from './Skills'
import { BrowserRouter } from 'react-router-dom'
export default function Comm() {
  return (
    <BrowserRouter>
    <div className='pt-10 '>
      <Navigatin />
      <div className='bg-slate-100 pb-36'><Aboutme  /></div>
      <div><Skills /></div>
    </div>
    </BrowserRouter>
  )
}

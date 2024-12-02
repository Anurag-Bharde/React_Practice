import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'


export default function Navigatin() {
  return (
    <div>
      <div className='flex justify-around pb-5'>
        <Link smooth to="/#skills" className='bg-red-200'>About me</Link>
        <Link to="/#skills" className='bg-red-200'>Skills</Link>
        <Link to="/#skills" className='bg-red-200'>Project</Link>
        <Link to="/#skills" className='bg-red-200'>Foter</Link>
      </div> 
    </div>
  )
}

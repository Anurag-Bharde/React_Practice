import React from 'react'
import img1 from '../Images/image.png'

export default function Aboutme() {
  return (
    <div>
      <div className='flex justify-center py-20'>
      <h1 className='items-center'>About Me</h1>
          
        </div>
      <div className='pt-16 flex justify-around pb-5'>
        
      <img src={img1} alt="fd" />
      <div className='pr-20 pt-20'>
        <p>asdfjaslfa</p>
        <p>asdfjaslfa</p>
        <p>asdfjaslfa</p>
        <p>asdfjaslfa</p>
      </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { inpuValu, Multi1, setler } from './Store/Atom'
// import { set } from 'mongoose'

function App() {

  return (
    <>
    <RecoilRoot>
      <Multiplier />
    </RecoilRoot>
    </>
  )
}

function Multiplier(){
  const [numb,setNumb]=useRecoilState(Multi1)
  const [car,setCar]=useRecoilState(inpuValu)
  const gija=useRecoilValue(setler)

  return (
    <div>
      <button onClick={()=>{
      setNumb(numb+1)}}>the number is {numb}</button>

      <input type='number' onChange={(e)=>{
        const m=e.target.value;
        setCar(m)
      }} value={car} ></input>
      <button>the multiple is {gija}</button>
    </div>
  )
}

export default App

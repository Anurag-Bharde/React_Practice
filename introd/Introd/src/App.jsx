import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from "react";
import './App.css'

function App(){

  const [count,setCount]=useState(0);
  return (
    <div>
    <CustomButton count={count} setCount={setCount}></CustomButton>
    <CustomButton count={count+1} setCount={setCount}></CustomButton>
    <CustomButton count={count-1} setCount={setCount}></CustomButton>
    <CustomButton count={count*5} setCount={setCount}></CustomButton>
    <CustomButton count={count%5} setCount={setCount}></CustomButton>
    </div>

  )
}

//Component
function CustomButton(props){

  function clickfunc(){
    props.setCount(props.count+1)
  }
  return(
    <button onClick={clickfunc}>Counter {props.count}</button>
  )
}

export default App

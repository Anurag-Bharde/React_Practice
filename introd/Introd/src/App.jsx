import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from "react";
import './App.css'

function App(){

  const [count,setcount]=useState(0);

  function onclickhandler(){
    setcount(count+1);
  }

  return (
    <div>
    <button onClick={onclickhandler}>Counter {count}</button>
    </div>

  )
}

export default App

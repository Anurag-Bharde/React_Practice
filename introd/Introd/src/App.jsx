import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from "react";
// import './App.css'

function App(){

  const [count,setCount]=useState(0);

  return(
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}
  function CustomButton(props){

    function onclickhandler(){
      props.setCount(props.count+1);
    }
    return <button onClick={onclickhandler}> Counter {props.count}</button>
  }

export default App

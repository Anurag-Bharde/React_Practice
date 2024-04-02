import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from "react";
// import './App.css'

function App(){
const [Obj,setObj]=useState([{
  title:"We Go GYm",
  description:"I go gym"
},{
  title:"We Go Play",
  description: "He GO Playsss"
}])

function addTodo(){
  setObj([...Obj,{
    title: "new Todo",
    description: "desc of todo"
  }])
}

  return(
    <>
      <button onClick={addTodo}>Click Meh</button>
     {Obj.map(function(todo){
      return <Sispp title={todo.title} description={todo.description}></Sispp>
     })}
    </>
  )
}

function Sispp(props){
  return(
    <>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </>
  )
}

export default App

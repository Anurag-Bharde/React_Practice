// import { count } from 'console'
// import { describe } from 'node:test'
import './App.css'
import { useState } from 'react'


function App(){
  const [todos,setTodos]=useState([{
    title:"Go to gym",
    description:"jiyaaa asdfafa",
    completed: false
  },{
    title:"jskdlajfa",
    description:"Dhiskiyaooo",
    completed:true
  }
])

function addtodos(){
  setTodos([...todos,{
    title:"add dodo",
    description:"Add the new Tdodo"
  }])
}

  return (

    <div>
    <button onClick={addtodos}>Add new todo</button>

    {todos.map(function(todo){
      return <DoDO title={todo.title} description={todo.description} />
    })}
     </div>
  )
}

//component
function DoDO(props){
  function jhinigna(){
    props.title=props.setTodos(props.title + "jfdso")
  }
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App

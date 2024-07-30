import React,{ useState } from 'react'
import './App.css'

let counter=4;
function App() {
const[todo,SetTodo]=useState([{
  id:1,
  title:"An wce academy0",
  description:"ohh naadan parindey"
},{
  id:2,
  title:"gahar aaja",
  description:"nafdss kyu desh"
},{
  id:3,
  title:"gharea, sdkjfalsjklsd",
  description:"hjimiki jidksm"
}])

function oaddtodo(){
  SetTodo([...todo,{
    id:counter++,
    title:Math.random(),
    description:Math.random()
  }] )
  console.log(counter)

}


return(
<div>
<button onClick={oaddtodo}>Add a todo</button>
    {todo.map(todos =><Thegard key={todos.id} title={todos.title} description={todos.description} />)}
</div>
)
}


function Thegard({title,description}){
  return(
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}
export default App


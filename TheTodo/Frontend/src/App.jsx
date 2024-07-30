import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])
  // fetch("http://localhost:3000/todo").then(async function(res){
  //   const json= await res.json();
  //   setTodos(json.todos);
  // })

  useEffect(()=>{
    fetch("http://localhost:3000/todo")
    .then(async (res)=>{
      const json = await res.json();
      setTodos(json);
    })
  },[])


  const addTodo =(todo) =>{
    setTodos([...todos, todo]);
  }

  return (
    <>
      <div>
      <CreateTodo addTodo={addTodo}/>
      <Todos todos={todos} />
        </div>
    </>
  )
}

export default App
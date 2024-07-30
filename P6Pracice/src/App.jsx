import {useEffect, useMemo, useState} from 'react'
import axios from 'axios'
// import { count } from 'console';

function App(){
  // let mk=3
  const [counter,setCounter]=useState(0);
  const [inpval,setInpval]=useState(1)  ;
  // const [finv,Setfinv]=useState(0);

//   useEffect(()=>{
//   let g=0;
//   for(let i=1;i<=inpval;i++){
//     g=g+i;
//   }
//   Setfinv(g);
// },[inpval])


//for useeffect a render takes part bout using useMemo a render is saved and it is computationally optimal
let count= useMemo(()=>{
  let g=0;
  for(let i=1;i<=inpval;i++){
    g=g+i;
}
return g;
},[inpval])
console.log(count)

  return <div>
   <input onChange={(e)=>{
      setInpval(e.target.value);
   }} ></input>
   {/* <p>the sum of {inpval} is {finv}</p> */}
   <p>the sum of {inpval} is {count}</p>
  
      <button onClick={()=>{
        setCounter(counter+1)
      }}>counter {counter}</button>
    </div>
}

function Todo({id}){

  const [todos,setTodo]=useState({});

  useEffect(()=>{
 axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
 .then(response=>{
  setTodo(response.data.todo)
 })
},[id])

   return <div>
   <h5>{id}</h5>
    <h1>{todos.title}</h1>
    <h1>{todos.description}</h1>
   </div>
 }

export default App;
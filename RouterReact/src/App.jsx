import { useContext, useState } from "react";
import { CountContext } from "./context";
function App(){
const [count, setCount]= useState(0);

  return (
    <div>
    <CountContext.Provider value={count}>
    <Counts setCount={setCount} />
    </CountContext.Provider>
    </div>
  )
}

function Counts({setCount}){
 return <div>
  <CountRender/>
  <Buttons setCount={setCount}/>
 </div>
}

function CountRender(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}
function Buttons({setCount}){
  const count=useContext(CountContext); 
  return <div>
    <button onClick={()=>{
     setCount(count+1)
    }}>Increase</button>


    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>

}

export default App
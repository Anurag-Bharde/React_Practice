import React,{ useState } from 'react'
import './App.css'


function App() {
  return  <div>
{/* <CardWrap innerComponent={<TextComponent />} /> */}
<CardWrap>
<CardWrap children={"kasfjalskfdjlakj"}>
   </CardWrap>
</CardWrap>
    </div>
  
}

function CardWrap({children}){
  return <div style={{border:"2px solid black", padding:20}}>
  {children}
  </div>
}

function TextComponent(){
return(
<div>
hi there
 </div>
)
}


export default App


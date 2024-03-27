import React from "react";
import "./cardss.css"

const Card=(props)=>{
   return(
    <>
        <div id="cardss">
            <h1>{props.head}</h1>
            <br></br>
            <h3>{props.desc}</h3>
        </div>
    </>
   )
}

export default Card;
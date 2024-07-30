
import { useState } from "react";

export function CreateTodo({addTodo}){

    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");


    return <div>
        <input style={{padding:10, margin:10}} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br />
        <input style={{padding:10, margin:10}} type="description" placeholder="description"  
        onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input><br />

        <button  style={{padding:10, margin:10}}
        onClick={()=>{
            fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
                title,
                description,
            }),
            headers:{
                "Content-Type": "application/json",
            },
        })
        .then(async (res)=>{
            const json = await res.json();

            addTodo({
                title,
                description,
                completed:false,
                _id:json._id,
            });
            alert("TODO added");
        })

            // fetch("http://localhost:3000/todo",{
            //   method:"GET",
            //   body:JSON.stringify({
            //     title,
            //     description
            //   }),
            //   headers:{
            //         "Content-Type": "application/json"
            //     }
                
            // })

        }}
        >Add a todo</button>
    </div>
}

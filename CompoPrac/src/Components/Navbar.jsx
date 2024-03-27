import React from 'react'
import "./navv.css"
import "./download.jpeg"

const Navbar = () => {
    return (
        <>
         <div id='navv'>
            <nav>
            <div id='di1'>
                <div id='logo'>
                    <img src='CompoPrac/src/Components/download.jpeg'></img>
                </div>
                </div>
                <div id='di2'></div>
               <h4>Home</h4>
               <h4>About</h4>
               <h4>Contact Us</h4>
            </nav>
         </div>
        </>
    )
}
export default Navbar
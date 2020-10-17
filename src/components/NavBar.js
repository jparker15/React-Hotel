import React from 'react'
import Rent from './Rent'
import Return from "./Return"

export default function NavBar() {

    const hideRent = (e) =>{
        console.log(e.target);
        
        const rentDiv = document.getElementsByClassName("Rent");

        rentDiv[0].style.display = "none"
        console.log();
    }

    return (
        <nav className="NavBar">
            <h1>Welcome to React Hotel</h1>
            <button
            onClick={hideRent}
            >Rent</button>
            <button>Return</button>
            <Rent/>
            <Return/>
            <ul className="demo">
              
            </ul>
            
        </nav>
    )
}

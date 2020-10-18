import React from 'react'
import Rent from './Rent'
import Return from "./Return"

export default function NavBar() {

    let show = true; 

    const hideRent = (e) =>{
        console.log(e.target);

        show = !show
        console.log(show);
        
        const rentDiv = document.getElementsByClassName("Rent");

        if(!show){
            rentDiv[0].style.display = "none"
        }
        else{
            rentDiv[0].style.display ="inline"
        }

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

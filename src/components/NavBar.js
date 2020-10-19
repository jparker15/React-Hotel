import React from 'react'
import Rent from './Rent'
import Return from "./Return"

export default function NavBar() {

    let show = true; 

    const hideRent = (e) =>{
        console.log(e.target);
        
        show = !show;

        const rentDiv = document.getElementsByClassName("Rent");

        if(!show){
            rentDiv[0].style.display = "inline";
            
        }
        else{
            rentDiv[0].style.display ="none";
        }
    }

    const showReturn = () =>{
        show = !show;

        const returnDiv = document.getElementsByClassName("Return");

        if(!show){
            returnDiv[0].style.display = "inline";
        }
        else{
            returnDiv[0].style.display ="none";
        }

    }

    return (
        <nav className="NavBar">
            <h1>Welcome to React Hotel</h1>
            <button
            onClick={hideRent}
            >Rent</button>
            <button
            onClick={showReturn}
            >Return</button>
            <div className="roomContainer">
            <Rent/>
            <Return/> 
            </div>
        </nav>
    )
}

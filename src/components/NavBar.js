import React, { useContext } from 'react'
import {RoomContext} from "../contexts/RoomContext"

export default function NavBar() {

    const {rooms} = useContext(RoomContext); 
    console.log(rooms)

    return (
        <nav className="NavBar">
            <h1>Welcome to React Hotel</h1>
            <button>Rent</button>
            <button>Return</button>
            <ul className="demo">
                {
                    rooms.map(room=>{
                        return(<li room={room}></li>)
                    })
                }
            </ul>
            
        </nav>
    )
}

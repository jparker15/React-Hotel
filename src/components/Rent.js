import React,{useContext} from 'react' 
import {RoomContext} from "../contexts/RoomContext"

export default function Rent() {

    const {rooms} = useContext(RoomContext)

    const rentalPrompt = (e) =>{
        // prompt("Confirm Rental by Entering Your Name")
        // use set State to change renter property to equal prompt input
        console.log(e.target.);
    };

    return (
        <div className="Rent">
        
            <ul className="Avail">
                {
                    rooms.map( floor =>{

                       return floor.map( room=>{
                           
                            if (room.renter === null){
                                return(
                                    <li key={room.room}
                                        onMouseDown={rentalPrompt}
                                       
                                    >
                                       Room {room.room} ${room.price}
                                    </li>
                                )
                            }
                            else return null
                        })
                    })
                }
            </ul>
        </div>
    )
}

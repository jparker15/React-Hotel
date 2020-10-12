import React,{useContext, useState} from 'react' 
import {RoomContext} from "../contexts/RoomContext"

export default function Rent() {

    const {rooms} = useContext(RoomContext);
    const [name,setName] = useState("");


    const demo = rooms

    const rentalPrompt = (e) =>{
        // prompt("Confirm Rental by Entering Your Name")
        // use set State to change renter property to equal prompt input

        // setting a rental would change the object insides of roooms that matches room.room and setting it's renter value to the input of that renter

        const roomNum = e.target.value

       demo.map( floor => {
           return floor.map( room =>{
               return console.log(room);
           })
       })

       

        console.log(roomNum);
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
                                       value={room.room}
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

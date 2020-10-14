import React,{useContext, useState} from 'react' 
import {RoomContext} from "../contexts/RoomContext"

export default function Rent() {

    const {rooms, setRooms} = useContext(RoomContext);
    const [name,setName] = useState("");

    const rentalPrompt = (e) =>{
        // prompt("Confirm Rental by Entering Your Name")
        // use set State to change renter property to equal prompt input

        // setting a rental would change the object insides of roooms that matches room.room and setting it's renter value to the input of that renter

        const demo = rooms

        const roomNum = e.target.value

        const renter = prompt("Enter Your Name");

        demo.map( floor => {
           return floor.map( room =>{

            if(room.room == roomNum){
                console.log(room);

                room.renter = renter   
            }
            return room               
           })
        })

        setRooms(demo)
       
        console.log(rooms);
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

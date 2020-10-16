import React, {useContext} from 'react'
import {RoomContext} from "../contexts/RoomContext"

export default function Return() {

    const {rooms,setRooms} = useContext(RoomContext);

    const returnPrompt = (e) =>{
        const reRoom = prompt("Enter Renter's Name to Return Room");

        console.log(reRoom);

        const demo = rooms.map( floor =>{

            return floor.map( room =>{

                if(reRoom === room.renter){
                    console.log(room);
                    room.renter = null;
                }

                return room
            })
        })

        setRooms(demo)
    }

    

    return (
        <div className="Return">

            <ul className="Rented">

               {rooms.map( floor =>{
                   return floor.map( room =>{

                       if (room.renter !== null){
                           return(
                               <li key={room.room}
                                onClick={returnPrompt}
                               >
                                   {room.room} Rented
                               </li>
                           )
                       }
                       else return null
                      
                   })
               }

               )}
            </ul>
            
        </div>
    )
}

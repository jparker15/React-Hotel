import React, {useContext} from 'react'
import {RoomContext} from "../contexts/RoomContext"

export default function Return() {

    const {rooms,setRooms} = useContext(RoomContext);

    

    return (
        <div className="Return">
            <ul className="Rented">
               {rooms.map( floor =>{
                   return floor.map( room =>{
                       if (room.renter !== null){
                           return(
                               <li key={room.room} value={room.room}>
                                   {room.room} Rented
                               </li>
                           )
                       }
                   })
               }

               )}
            </ul>
            
        </div>
    )
}

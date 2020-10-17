import React,{createContext, useEffect, useState} from 'react'

export const RoomContext = createContext()

const RoomContextProvider = (props) => {

    const deposit = 45,
    floorCost = 50,
    roomCost = 10;

    const pricing = (floNum,roomNum) =>{
        let data = [];
        for (let i = 1; i <= floNum; i++) {
            const floPrice = (floorCost * i );
            let demo = []
            data.push(demo)
            for (let j = 1; j <= roomNum; j++) {
                const rooPrice = (roomCost * j - roomCost);
                const total = floPrice + rooPrice + deposit;
                const roomInfo = {room:`${i * 100+ j}`, price: total, renter:null }
                data[i-1].push(roomInfo)
            }
        }
        return data;
    }
    const roomsLocalStorage = localStorage.getItem("rooms");

    const initialState = roomsLocalStorage === null ? pricing(4,4) : JSON.parse(roomsLocalStorage); 
    
    // console.log(initialState);

    const [rooms, setRooms] = useState(initialState);

    useEffect(()=>{
        localStorage.setItem("rooms", JSON.stringify(rooms))
    }, [rooms])

    return (
       <RoomContext.Provider value={{rooms, setRooms}}>
           {props.children}
       </RoomContext.Provider>
    )
}
export default RoomContextProvider

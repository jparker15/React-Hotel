import React,{createContext, useState} from 'react'

export const RoomContext = createContext()

const RoomContextProvider = (props) => {

    const deposit = 45,
    floorCost = 50,
    roomCost = 10;

    const pricing = (floNum,roomNum) =>{
        let data = [];

        for (let i = 1; i <= floNum; i++) {

            const floPrice = (floorCost * i );

            data.push([`floor ${i}`])

            for (let j = 1; j <= roomNum; j++) {
                
                const rooPrice = (roomCost * j - roomCost);

                const total = floPrice + rooPrice + deposit;

                // console.log(data[i-1], i , j);

                data[i-1].push({room:`${i * 100+ j}`, price: total, renter:null })
                // console.log(i,j,total);
                // console.log(floPrice, rooPrice)
            }
            
        }
        return data;
    }

    pricing(2,8)

    const [rooms, setRooms] = useState(pricing(4,4))

    return (
       <RoomContext.Provider value={{rooms}}>
           {props.children}
       </RoomContext.Provider>
    )
}

export default RoomContextProvider

import React from 'react'


export default function Pricing(floorNum,roomNum) {

    const deposit = 45,
    floorCost = 50,
    roomCost = 10;

    let data = [];

    for (let i = 1; i <= floorNum; i++) {

        const floorPrice = (floorCost * i );

        data.push([`floor ${i}`])

        for (let j = 1; j <= roomNum; j++) {
            
            const roomPrice = (roomCost * j - roomCost);

            const total = floorPrice + roomPrice + deposit;

            data[i-1].push({room:`${i * 100+ j}`, price: total, renter:null })
        }
        
    }  

    console.log(floorNum);

    return (
        <div>
            <input type="number" ></input>
        </div>
    )
}

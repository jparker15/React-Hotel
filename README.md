# React-Hotel

## Algorithm
 
    [] Ex. [ [ {room: ‘101’, renter: ‘bill’, price: 50 }}, { room: ‘102’, renting: null, price: 60 }, ... ], [ {room: ‘202’, …}, …], [...], [...] ]

* As you can see from above each sub array will represent a floor (four total), and each floor will have four rooms. 
* Each room will be represented as an object with room (room number), renter (who is renting currently), and price (in dollars) properties.
* Note that a room not being rented should have a renter value of null. This will be used to represent a room not being rented.
* When your application is first used the data should not be hard-coded, but should be produced programmatically. 

>Pricing equation: Price = ( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)

>Room 202 = ( 50*2 ) + ( 10*2 - 10 ) + 45 = $155

>Room 301 = ( 50*3 ) + ( 10*1 - 10 ) + 45 = $200


## Task List
    [] initialize React project
    [] create navigation bar
    [] create components for Rent and Return components.
    [] have the renting page or returning page display when a navbar button is pressed
    [] create context for hotel rooms
    [] create short algorithm to create room data programmatically and set that data as the initial value of the roomsContext
    [] provide roomsContext to the application in App.js
    [] create a button on Rent component, once pressed it should take a name and set the state/LS
    [] create the a display on the Return component that will show all the unavailable rooms
    [] implement features on Return items, when you click on one it should prompt the user to enter their name. If they enter the correct name the rooms renter property should go back to default.

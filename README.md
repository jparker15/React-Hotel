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



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

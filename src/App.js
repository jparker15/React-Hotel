import React from 'react';
import NavBar from "./components/NavBar"
import Rent from './components/Rent';
import Return from './components/Return';
import RoomContext from "./contexts/RoomContext"

function App() {
  return (
    <div className="App">
      <RoomContext>
        <NavBar/>
        <Rent/>
        <Return/>
      </RoomContext>
    
      
    </div>
  );
}

export default App;

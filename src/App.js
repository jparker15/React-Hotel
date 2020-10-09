import React from 'react';
import NavBar from "./components/NavBar"
import Rent from './components/Rent';
import RoomContext from "./contexts/RoomContext"

function App() {
  return (
    <div className="App">
      <RoomContext>
        <NavBar/>
        <Rent/>
      </RoomContext>
    
      
    </div>
  );
}

export default App;

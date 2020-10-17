import React from 'react';
import NavBar from "./components/NavBar"
import RoomContext from "./contexts/RoomContext"

function App() {
  return (
    <div className="App">
      <RoomContext>
        <NavBar/>
      </RoomContext>
    
      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { boatTypeMenu } from './components/boatType'

function App() {
  const [boatType, setBoatType] = useState('1x')

  const selectBoatType = boat => {
    setBoatType(boat.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>%Gold Medal Time Calculator</h1>
      </header>
      <main>
        {boatTypeMenu(selectBoatType, boatType)}
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { boatTypeMenu } from './components/boatType'
import { distanceInput } from './components/distanceInput'

function App() {
  const [boatType, setBoatType] = useState('1x')
  const [distance, setDistance] = useState(2000)

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
        {distanceInput()}
      </main>
    </div>
  );
}

export default App;

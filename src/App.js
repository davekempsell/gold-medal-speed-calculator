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
        <div class="boat-type">
        {boatTypeMenu(selectBoatType)}
        <p>{boatType}</p>
        </div>
      </main>
    </div>
  );
}

export default App;

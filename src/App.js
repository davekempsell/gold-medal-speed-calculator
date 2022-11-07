import React, { useState } from 'react';
import './App.css';
import { BoatTypeMenu } from './components/BoatType'
import { DistanceInput } from './components/DistanceInput'
import { TimeInput } from './components/timeInput'

function App() {
  const [boatType, setBoatType] = useState('1x')
  const [distance, setDistance] = useState(2000)
  const [time, setTime] = useState('no time entered')

  return (
    <div className="App">
      <header className="App-header">
        <h1>%Gold Medal Time Calculator</h1>
      </header>
      <main>
        <div class="input-container">
          {BoatTypeMenu(boatType, setBoatType)}
          {DistanceInput(distance, setDistance)}
          {TimeInput(setTime)}
        </div>
      </main>
    </div>
  );
}

export default App;

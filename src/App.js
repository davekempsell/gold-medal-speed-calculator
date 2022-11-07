import React, { useState } from 'react';
import './App.css';
import { BoatTypeMenu } from './components/BoatType'
import { DistanceInput } from './components/DistanceInput'
import { GoldMedalSpeed } from './components/GoldMedalSpeed';
import { Speed } from './components/Speed';
import { TimeInput } from './components/timeInput'

function App() {
  const [boatType, setBoatType] = useState('M1x')
  const [distance, setDistance] = useState(2000)
  const [time, setTime] = useState([0,0,0])
  const [boatSpeed, setBoatSpeed] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <h1>% Gold Medal Time Calculator</h1>
      </header>
      <main>
        <div className="input-container">
          {BoatTypeMenu(boatType, setBoatType)}
          {DistanceInput(distance, setDistance)}
          {TimeInput(time, setTime)}
          {Speed(distance, time, setBoatSpeed)}
          {GoldMedalSpeed(boatType, boatSpeed)}
        </div>
      </main>
    </div>
  );
}

export default App;

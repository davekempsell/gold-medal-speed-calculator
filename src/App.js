import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header'
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
      {Header()}
      <main>
        {BoatTypeMenu(boatType, setBoatType)}
        {DistanceInput(distance, setDistance)}
        {TimeInput(time, setTime)}
        {Speed(distance, time, setBoatSpeed)}
        {GoldMedalSpeed(boatType, boatSpeed)}
      </main>
    </div>
  );
}

export default App;

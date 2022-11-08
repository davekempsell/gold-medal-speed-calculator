import React, { useState } from 'react';
import './App.css';
import { BoatTypeMenu } from './components/BoatType'
import { DistanceInput } from './components/DistanceInput'
import { GoldMedalSpeed } from './components/GoldMedalSpeed';
import { Speed } from './components/Speed';
import { TimeInput } from './components/timeInput'
import { faCircleQuestion, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [boatType, setBoatType] = useState('M1x')
  const [distance, setDistance] = useState(2000)
  const [time, setTime] = useState([0,0,0])
  const [boatSpeed, setBoatSpeed] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <FontAwesomeIcon id="percent-icon" icon={faPercent} size="2x"/>
          <h1>GMS Calculator</h1>
          <FontAwesomeIcon id='help-icon' icon={faCircleQuestion} size="2x"/>
        </div>
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
      <footer>

      </footer>
    </div>
  );
}

export default App;

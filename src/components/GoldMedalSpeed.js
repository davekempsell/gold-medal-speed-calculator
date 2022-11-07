import { goldMedalTimes } from '../GMT-data/goldMedalTimes'

function getSpeed(time) {
  let timeArray = time.split(':');
  let seconds = parseInt(timeArray[0] * 60) + parseInt(timeArray[1])
  return parseFloat(2000 / seconds).toFixed(3)
}

export function GoldMedalSpeed(boatType, boatSpeed) {

  let gms = getSpeed(goldMedalTimes[boatType])
  let percentageOfGMS = (boatSpeed / gms) * 100

  return (
    <div className="gms">
      <div className="output-label">
        %GMS 
      </div>
      <div className="gms-display">
        {percentageOfGMS.toFixed(2)}%
      </div>
    </div>
  )
}
import { goldMedalTimes } from '../GMT-data/goldMedalTimes'

function getSpeed(time) {
  let timeArray = time.split(':');
  let seconds = parseInt(timeArray[0] * 60) + parseInt(timeArray[1])
  return parseFloat(2000 / seconds).toFixed(2)
}

function boatTypeInfo(boatType) {
  return (
    <div className="GMT-row">
      <div className="GMT-box GMT-data">{boatType}</div>
      <div className="GMT-box GMT-data">{goldMedalTimes[boatType]}</div>
      <div className="GMT-box GMT-data">{getSpeed(goldMedalTimes[boatType])}</div>
    </div>
  )
}

export function GMSContent() {
  const boatTypes = Object.keys(goldMedalTimes)

  return (
    <div className="percentage-data">
      <h2>Gold Medal Times</h2>
      <div className="GMT-wrapper">
        <div className="GMT-row">
          <div className="GMT-box GMT-title">Boat Type</div>
          <div className="GMT-box GMT-title">Time (m:ss) </div>
          <div className="GMT-box GMT-title">Speed (m/s)</div>
        </div>
        {boatTypes.map(boatType => {
          return boatTypeInfo(boatType)
        })}
      </div>
    </div>
  )
}
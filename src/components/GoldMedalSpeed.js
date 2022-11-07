export function GoldMedalSpeed(boatType, boatSpeed) {

  let gms = 5.13
  let percentageOfGMS = (boatSpeed / gms) * 100

  return (
    <div className="gms">
      <div className="label">
        %GMS 
      </div>
      <div className="gms-display">
        {percentageOfGMS.toFixed(2)}%
      </div>
    </div>
  )
}
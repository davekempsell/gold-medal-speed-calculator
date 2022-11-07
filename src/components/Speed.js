export function Speed(distance, time) {
  
    let mins = time[0] === '' ? 0 : parseInt(time[0] * 60)
    let secs = time[1] === '' ? 0 : parseInt(time[1])
    let tenths = time[2] === '' ? 0 : parseFloat(time[2] / 10)
    let total = parseFloat(mins + secs + tenths)

    let boatSpeed = total > 0 ? distance / total : 0

  return (
    <div className="speed">
      <div className="speed-label">
        Speed 
      </div>
      <div className="speed-display">
        {boatSpeed.toFixed(2)}m/s
      </div>
    </div>
  )
}
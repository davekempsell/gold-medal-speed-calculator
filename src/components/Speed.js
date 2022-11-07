import { useEffect } from "react"

export function Speed(distance, time, setBoatSpeed) {
  
    let mins = time[0] === '' ? 0 : parseInt(time[0] * 60)
    let secs = time[1] === '' ? 0 : parseInt(time[1])
    let tenths = time[2] === '' ? 0 : parseFloat(time[2] / 10)
    let total = parseFloat(mins + secs + tenths)

    let speed = total > 0 ? distance / total : 0

    
    useEffect(() => {
      setBoatSpeed(speed.toFixed(3))
      // eslint-disable-next-line
    },[speed])

  return (
    <div className="speed">
      <div className="label">
        Speed 
      </div>
      <div className="speed-display">
        {speed.toFixed(2)}m/s
      </div>
    </div>
  )
}
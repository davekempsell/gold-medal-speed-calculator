export function Speed(distance, time) {
  
    console.log(time)
    let mins = parseInt(time[0] * 60)
    let secs = parseInt(time[1])
    let tenths = parseFloat(time[2] / 10)
    let total = parseFloat(mins + secs + tenths)

    console.log(total)

  return (
    <div className="speed">
      <div className="speed-label">
        Speed 
      </div>
      <div className="speed-display">
        {total}
      </div>
    </div>
  )
}
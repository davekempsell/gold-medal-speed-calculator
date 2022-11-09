import { useState } from 'react'

export function TimeInput(time, setTime) {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [tenths, setTenths] = useState(0)

  const resetTime = (m,s,t) => {
    setTime([m,s,t])
  }

  return (
    <div className="time">
    <div className="label">
      Time (mm:ss:0) 
    </div>
    <div className="input-wrapper">
      <input 
        type="number" 
        min="0" 
        max="99" 
        value={minutes} 
        onInput={e => {
          if(e.target.value >= 0 && e.target.value < 100) {
            setMinutes(e.target.value)
            resetTime(e.target.value, seconds, tenths)
          }
        }}>
      </input>
      <div className="semi-colon">:</div>
      <input 
        type="number" 
        min="0" max="59" 
        value={seconds} 
        onInput={e => {
          if(e.target.value >= 0 && e.target.value < 60) {
            setSeconds(e.target.value)
            resetTime(minutes, e.target.value, tenths)
          }
        }}>
      </input>
      <div className="semi-colon">:</div>
      <input 
        type="number" 
        min="0" max="9" 
        value={tenths} 
        onInput={e => {
          if(e.target.value >= 0 && e.target.value < 10) {
            setTenths(e.target.value)
            resetTime(minutes, seconds, e.target.value)
          }
        }}>
      </input>
    </div>
  </div>
  )
}
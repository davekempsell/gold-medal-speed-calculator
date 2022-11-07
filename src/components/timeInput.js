import { useEffect, useState } from 'react'

export function TimeInput(setTime) {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [tenths, setTenths] = useState(0)

  useEffect(() => {
      setTime(`${minutes}:${seconds}:${tenths}`)
  })

  return (
    <div class="time">
    <div class="time-label">
      Time (mm:ss:0) 
    </div>
    <div class="input-wrapper">
      <input 
        type="number" 
        min="0" 
        max="99" 
        value={minutes} 
        onInput={e => {
          if(e.target.value == '') {
            setMinutes(0)
          } else if(e.target.value >= 0 && e.target.value < 100) {
            setMinutes(e.target.value)
          }
        }}>
      </input>
      <input 
        type="number" 
        min="0" max="59" 
        value={seconds} 
        onInput={e => {
          if(e.target.value == '') {
            setSeconds(0)
          } else if(e.target.value >= 0 && e.target.value < 60) {
            setSeconds(e.target.value)
          }
        }}>
      </input>
      <input 
        type="number" 
        min="0" max="9" 
        value={tenths} 
        onInput={e => {
          if(e.target.value == '') {
            setTenths(0)
          } else if(e.target.value >= 0 && e.target.value < 10) {
            setTenths(e.target.value)
          }
        }}>
      </input>
    </div>
  </div>
  )
}
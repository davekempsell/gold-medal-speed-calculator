import { goldMedalTimes } from '../GMT-data/goldMedalTimes'

function boatTypeButton(boat, setBoatType) {
  return (
    <button 
      type="submit" 
      key={`boatTypeButton-${boat}`}
      value={boat} 
      onClick={e => setBoatType(e.target.value)}>
        {boat}
    </button>
  )
}

export function BoatTypeMenu(boatType, setBoatType) {

  const boatTypesMen = Object.keys(goldMedalTimes)
    .filter(element => {
      if(element.includes('M')){
        return element
      }
      return false
    })

  const boatTypesWomen = Object.keys(goldMedalTimes)
    .filter(element => {
      if(element.includes('W')){
        return element
      }
      return false
    })

  return (
    <div className="boat-type">
      <div className="dropdown">
        <button className="dropbtn">Boat Type</button>
        <div className="dropdown-content mens-boats" >
          {boatTypesMen.map(boat => {
            return (boatTypeButton(boat, setBoatType))
          })}
        </div>
        <div className="dropdown-content womens-boats">
          {boatTypesWomen.map(boat => {
            return (boatTypeButton(boat, setBoatType))
          })}
        </div>
      </div>
      <p>{boatType}</p>
    </div>
  )
}

function boatTypeButton(boat, boatType, setBoatType) {
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

  const boatTypes = ['1x', '2x', '4x', '2-', '4-', '4+', '8+']

  return (
    <div className="boat-type">
      <div className="dropdown">
        <button className="dropbtn">Boat Type</button>
        <div className="dropdown-content">
          {boatTypes.map(boat => {
            return (boatTypeButton(boat, boatType, setBoatType))
          })}
        </div>
      </div>
      <p>{boatType}</p>
    </div>
  )
}

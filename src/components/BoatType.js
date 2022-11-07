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
    <div class="boat-type">
      <div class="dropdown">
        <button class="dropbtn">Boat Type</button>
        <div class="dropdown-content">
          {boatTypes.map(boat => {
            return (boatTypeButton(boat, boatType, setBoatType))
          })}
        </div>
      </div>
      <p>{boatType}</p>
    </div>
  )
}

function boatTypeButton(boat, callback) {
  return (
    <button 
      type="submit" 
      key={`boatTypeButton-${boat}`}
      value={boat} 
      onClick={callback}>
        {boat}
    </button>
  )
}

export function boatTypeMenu(callback, boatType) {

  const boatTypes = ['1x', '2x', '4x', '2-', '4-', '4+', '8+']

  return (
    <div class="boat-type">
      <div class="dropdown">
        <button class="dropbtn">Boat Type</button>
        <div class="dropdown-content">
          {boatTypes.map(boat => {
            return (boatTypeButton(boat, callback))
          })}
        </div>
      </div>
      <p>{boatType}</p>
    </div>
  )
}

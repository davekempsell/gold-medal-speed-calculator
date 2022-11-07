export function DistanceInput(distance, setDistance) {
  return (
    <div class="distance">
      <div class="distance-label">
        Distance 
      </div>
      <input type="number" value={distance} onInput={e => setDistance(e.target.value)}></input>
    </div>
  )
}
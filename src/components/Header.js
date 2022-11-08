import { faCircleQuestion, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="percentages">
          <FontAwesomeIcon id="percent-icon" icon={faPercent} size="2x"/>
          <div className="percentage-data">
            
          </div>
        </div>
        <h1>GMS Calculator</h1>
        <div className="help">
          <FontAwesomeIcon id='help-icon' icon={faCircleQuestion} size="2x"/>
          <div className="help-content">
            
          </div>
        </div>
      </div>
    </header>
  )
}
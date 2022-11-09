import { faCircleQuestion, faPercent } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GMSContent } from "./GMSContent";

export function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="percentages">
          <FontAwesomeIcon id="percent-icon" icon={faPercent} size="2x"/>
          { GMSContent() }
        </div>
        <h1>GMS Calculator</h1>
        <div className="help">
          <FontAwesomeIcon id='help-icon' icon={faCircleQuestion} size="2x"/>
          <div className="help-content">
            <h2>Gold Medal Speed Calculator</h2>
            <p>The calculator will give a percentage of gold medal speed for all Olympic and International class boat types.</p>
            <p>Select the correct boat type from the drop down menu, by clicking on or hovering over the 'Boat Type' button.</p>
            <p>Enter the correct distance and time for the piece, and the calculator will give you the boat speed, and it's percentage of the Gold Medal Speed for that boat class.</p>
            <footer>
              <p>Built by Dave Kempsell - November 2022</p>
              {/* <a href="https://github.com/davekempsell/gold-medal-speed-calculator" target="_blank" rel="noreferrer">
                Check out the code on GitHub
                <FontAwesomeIcon icon={faGithub}/>
              </a> */}
            </footer>
          </div>
        </div>
      </div>
    </header>
  )
}
// NAV COMPONENT

// react
import React from "react";
// stylesheet
import "./nav.css";

function Nav({ navClick }) {
  return (
    <div>
      <div className="nav-container mx-auto text-center">
        <button className="nav-button mx-auto" id="home" onClick={navClick}>Home</button>
        <button className="nav-button mx-auto" id="view" onClick={navClick}>View/Edit</button>
        <button className="nav-button mx-auto" id="year" onClick={navClick}>Year Setup</button>
        <button className="nav-button mx-auto" id="comp" onClick={navClick}>Competitors</button>
        <button className="nav-button mx-auto" id="score" onClick={navClick}>Scores</button>
        <button className="nav-button mx-auto" id="report" onClick={navClick}>Reports</button>
      </div>
    </div>
  );
}

export default Nav;

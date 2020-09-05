// NAV COMPONENT
import React from "react";

function Nav({ navClick }) {
  return (
    <div>
      <div className="mx-auto text-center">
        <div className="row text-center mx-auto">
          <button className="button green mx-auto" id="home" onClick={navClick}>Home</button>
          <button className="button green mx-auto" id="view" onClick={navClick}>View / Edit</button>
        </div>
        <div className="row text-center mx-auto">
          <button className="button green mx-auto" id="year" onClick={navClick}>Year Setup</button>
          <button className="button green mx-auto" id="comp" onClick={navClick}>Competitors</button>
        </div>
        <div className="row text-center mx-auto">
          <button className="button green mx-auto" id="score" onClick={navClick}>Scores</button>
          <button className="button green mx-auto" id="report" onClick={navClick}>Reports</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;

// HOME PAGE COMPONENT
// react
import React from "react";

function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="subtitle mx-auto">View / Edit</div>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">
          Add or Update Tiers, Events, Competition Years, and Organizations
        </p>
        <div className="subtitle mx-auto">Year Setup</div>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">
          Add Active Tiers and Events for a Competition Year
        </p>
        <div className="subtitle mx-auto">Competitors</div>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">
          Add or Update Competitor Information
        </p>
        <div className="subtitle mx-auto">Scores</div>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">
          Input Event Scores for Competitors
        </p>
        <div className="subtitle mx-auto">Reports</div>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">
          View Results and Generate Reports
        </p>
      </div>
    </div>
  );
}

export default Home;

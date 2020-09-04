// HOME PAGE COMPONENT
// react
import React from "react";
// stylesheet
import "./home.css";

function Home() {
  return (
    <div>
      <div className="main-container mx-auto">
        <div className="container-title mx-auto">View / Edit</div>
        <p className="container-text mx-auto">
          Add or Update Tiers, Events, Competition Years, and Organizations
        </p>
      </div>
      <div className="main-container mx-auto">
        <div className="container-title mx-auto">Year Setup</div>
        <p className="container-text mx-auto">
          Add Active Tiers and Events for a Competition Year
        </p>
      </div>
      <div className="main-container mx-auto">
        <div className="container-title mx-auto">Competitors</div>
        <p className="container-text mx-auto">
          Add or Update Competitor Information
        </p>
      </div>
      <div className="main-container mx-auto">
        <div className="container-title mx-auto">Scores</div>
        <p className="container-text mx-auto">
          Input Event Scores for Competitors
        </p>
      </div>
      <div className="main-container mx-auto">
        <div className="container-title mx-auto">Reports</div>
        <p className="container-text mx-auto">
          View Results and Generate Reports
        </p>
      </div>
    </div>
  );
}

export default Home;

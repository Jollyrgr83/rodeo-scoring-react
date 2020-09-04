// HOME PAGE COMPONENT
// react
import React from "react";
// stylesheet
import "./home.css";

function Home() {
  return (
    <div>
      <div className="main-container mx-auto">
        <div className="container-subtitle mx-auto">View / Edit</div>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">
          Add or Update Tiers, Events, Competition Years, and Organizations
        </p>
        <div className="container-subtitle mx-auto">Year Setup</div>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">
          Add Active Tiers and Events for a Competition Year
        </p>
        <div className="container-subtitle mx-auto">Competitors</div>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">
          Add or Update Competitor Information
        </p>
        <div className="container-subtitle mx-auto">Scores</div>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">
          Input Event Scores for Competitors
        </p>
        <div className="container-subtitle mx-auto">Reports</div>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">
          View Results and Generate Reports
        </p>
      </div>
    </div>
  );
}

export default Home;

// SCORE PAGE COMPONENT
// react
import React from "react";
// stylesheet
import "./score.css";

function Score() {
  return (
    <div>
      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Select Competition Year</p>
        <hr className="container-line mx-auto"></hr>
        <div className="text-center">
          <select className="full-select mx-auto" id="view-category-select">
            <option>test</option>
          </select>
        </div>
        <p className="container-subtitle mx-auto">Select Competitor</p>
        <hr className="container-line mx-auto"></hr>
        <div className="text-center">
          <select className="full-select mx-auto" id="view-category-select">
            <option>test</option>
          </select>
        </div>
      </div>

      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Event Name</p>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="small-text mx-auto">Score</p>
          <p className="small-text mx-auto">Minutes</p>
          <p className="small-text mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
        </div>
      </div>
      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Event Name</p>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="small-text mx-auto">Score</p>
          <p className="small-text mx-auto">Minutes</p>
          <p className="small-text mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
        </div>
      </div>
      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Event Name</p>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="small-text mx-auto">Score</p>
          <p className="small-text mx-auto">Minutes</p>
          <p className="small-text mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
        </div>
      </div>
      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Event Name</p>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="small-text mx-auto">Score</p>
          <p className="small-text mx-auto">Minutes</p>
          <p className="small-text mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
        </div>
      </div>
      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Event Name</p>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="small-text mx-auto">Score</p>
          <p className="small-text mx-auto">Minutes</p>
          <p className="small-text mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
          <input className="small-input mx-auto" type="number" />
        </div>
      </div>
      <div className="main-container text-center mx-auto">
        <button className="container-button blue mx-auto">Update</button>
      </div>
    </div>
  );
}

export default Score;

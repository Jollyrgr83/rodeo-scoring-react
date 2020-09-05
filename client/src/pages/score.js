// SCORE PAGE COMPONENT
// react
import React from "react";

function Score() {
  return (
    <div>
      <div className="container mx-auto">
        <p className="subtitle mx-auto">Select Competition Year</p>
        <hr className="line mx-auto"></hr>
        <div className="text-center">
          <select className="full mx-auto" id="view-category-select">
            <option>test</option>
          </select>
        </div>
        <p className="subtitle mx-auto">Select Competitor</p>
        <hr className="line mx-auto"></hr>
        <div className="text-center">
          <select className="full mx-auto" id="view-category-select">
            <option>test</option>
          </select>
        </div>
      </div>

      <div className="container mx-auto">
        <p className="subtitle mx-auto">Event Name</p>
        <hr className="line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="text small mx-auto">Score</p>
          <p className="text small mx-auto">Minutes</p>
          <p className="text small mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
        </div>
      </div>
      <div className="container mx-auto">
        <p className="subtitle mx-auto">Event Name</p>
        <hr className="line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="text small mx-auto">Score</p>
          <p className="text small mx-auto">Minutes</p>
          <p className="text small mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
        </div>
      </div>
      <div className="container mx-auto">
        <p className="subtitle mx-auto">Event Name</p>
        <hr className="line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="text small mx-auto">Score</p>
          <p className="text small mx-auto">Minutes</p>
          <p className="text small mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
        </div>
      </div>
      <div className="container mx-auto">
        <p className="subtitle mx-auto">Event Name</p>
        <hr className="line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="text small mx-auto">Score</p>
          <p className="text small mx-auto">Minutes</p>
          <p className="text small mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
        </div>
      </div>
      <div className="container mx-auto">
        <p className="subtitle mx-auto">Event Name</p>
        <hr className="line mx-auto"></hr>
        <div className="row text-center mx-auto">
          <p className="text small mx-auto">Score</p>
          <p className="text small mx-auto">Minutes</p>
          <p className="text small mx-auto">Seconds</p>
        </div>
        <div className="row text-center mx-auto">
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
          <input className="small mx-auto" type="number" />
        </div>
      </div>
      <div className="text-center mx-auto">
        <button className="button blue mx-auto">Update</button>
      </div>
    </div>
  );
}

export default Score;

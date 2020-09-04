// COMP PAGE COMPONENT
// react
import React from "react";
// stylesheet
import "./comp.css";

function Comp() {
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
      </div>

      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">View / Edit Competitors</p>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">Select a Competitor</p>
        <div className="text-center mx-auto">
          <select className="full-select mx-auto">
            <option>test</option>
          </select>
        </div>
        <p className="container-text mx-auto">Competitor Number</p>
        <div className="text-center mx-auto">
          <input className="full-input" type="text" />
        </div>
        <p className="container-text mx-auto">First Name</p>
        <div className="text-center mx-auto">
          <input className="full-input" type="text" />
        </div>
        <p className="container-text mx-auto">Last Name</p>
        <div className="text-center mx-auto">
          <input className="full-input" type="text" />
        </div>
        <p className="container-text mx-auto">Organization</p>
        <div className="text-center mx-auto">
          <select className="full-select mx-auto">
            <option>test</option>
          </select>
        </div>
        <div className="row text-center mx-auto">
          <button className="container-button blue mx-auto">Update</button>
          <button className="container-button red mx-auto">Delete</button>
        </div>
      </div>

      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Add Competitors</p>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">Select Competition Tier</p>
        <div className="text-center mx-auto">
          <select className="full-select mx-auto">
            <option>test</option>
          </select>
        </div>
        <p className="container-text mx-auto">Enter Competitor Number</p>
        <div className="text-center mx-auto">
          <input className="full-input" type="text" />
        </div>
        <p className="container-text mx-auto">Enter First Name</p>
        <div className="text-center mx-auto">
          <input className="full-input" type="text" />
        </div>
        <p className="container-text mx-auto">Enter Last Name</p>
        <div className="text-center mx-auto">
          <input className="full-input" type="text" />
        </div>
        <p className="container-text mx-auto">Select Organization</p>
        <div className="text-center mx-auto">
          <select className="full-select mx-auto">
            <option>test</option>
          </select>
        </div>
        <div className="row text-center mx-auto">
          <button className="container-button blue mx-auto">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Comp;

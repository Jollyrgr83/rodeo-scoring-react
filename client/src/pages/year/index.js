// YEAR PAGE COMPONENT
// react
import React from "react";
// stylesheet
import "./year.css";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// fontawesome icons
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Year() {
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
        <div className="container-subtitle mx-auto">Apprentice Tier</div>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-left mx-auto container-row">
          <input className="large-input" type="text" />
          <div className="square-button red">
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
        <div className="row text-left mx-auto container-row">
          <input className="large-input" type="text" />
          <div className="square-button red">
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
        <div className="row text-left mx-auto container-row">
          <input className="large-input" type="text" />
          <div className="square-button red">
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
        <p className="container-text mx-auto">Add New Event</p>
        <div className="row text-left mx-auto container-row">
          <select className="large-select">
            <option>test</option>
          </select>
          <div className="square-button blue">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <p className="container-text mx-auto">Delete this Tier</p>
        <div className="text-center">
          <button className="container-button red">Delete Tier</button>
        </div>
      </div>

      <div className="main-container mx-auto">
        <p className="container-subtitle mx-auto">Add a Competition Tier</p>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-left mx-auto container-row">
          <select className="large-select mx-auto" id="view-category-select">
            <option>test</option>
          </select>
          <div className="square-button blue">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Year;

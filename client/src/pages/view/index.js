// VIEW PAGE COMPONENT
// react
import React from "react";
// stylesheet
import "./view.css";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// fontawesome icons
import { faRedo, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function View() {
  return (
    <div>
      
      <div className="main-container mx-auto">
        <div className="container-subtitle mx-auto">View and Edit Items</div>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">Select a Category to View/Edit</p>
        <div className="text-center">
          <select className="full-select mx-auto" id="view-category-select">
            <option>test</option>
          </select>
        </div>
        <div className="text-center">
          <button className="container-button blue">Show Items</button>
        </div>
        {/* <div className="container-warning mx-auto">
          <p className="warning-title">WARNING!</p>
          <p className="warning-text">Deleting an item will also remove all records associated with that item</p>
        </div> */}
        <div className="container-subtitle mx-auto">Item Name</div>
        <hr className="container-line mx-auto"></hr>
        <div className="row text-center mx-auto container-row">
          <input className="half-input" type="text" />
          <div className="square-button text-center mx-auto blue">
            <FontAwesomeIcon icon={faRedo} />
          </div>
          <div className="square-button text-center mx-auto red">
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
      </div>

      <div className="main-container mx-auto">
        <div className="container-subtitle mx-auto">Add Items</div>
        <hr className="container-line mx-auto"></hr>
        <p className="container-text mx-auto">Select an Item to Add</p>
        <div className="text-center">
          <select className="full-select mx-auto" id="add-category-select">
            <option>test</option>
          </select>
        </div>
        <p className="container-text mx-auto">Enter Information</p>
        <div className="text-center">
          <input className="full-input mx-auto" type="text" />
        </div>
        <div className="text-center">
          <button className="container-button blue">Add Item</button>
        </div>
      </div>

    </div>
  );
}

export default View;

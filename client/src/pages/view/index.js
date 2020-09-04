// VIEW PAGE COMPONENT
// react
import React from "react";
// stylesheet
import "./view.css";

function View() {
  return (
    <div className="main-container mx-auto">
      <div className="container-title mx-auto">View and Edit Items</div>
      <p className="container-text mx-auto">Select a Category to View/Edit</p>
      <div className="text-center">
        <select className="container-select mx-auto" id="view-category-select">
          <option>test</option>
        </select>
      </div>
      <div className="text-center">
        <button className="main-button blue">Show Items</button>
      </div>
    </div>
  );
}

export default View;

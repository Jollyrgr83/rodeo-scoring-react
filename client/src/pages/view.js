// VIEW PAGE COMPONENT
// react
import React, { useState } from "react";
// components
import ViewItem from "../components/view-item";
// utilities
import API from "../util/API";

function View() {
  const [userInput, setUserInput] = useState({ viewCategorySelect: "tier" });
  const [viewItems, setViewItems] = useState({
    event: [],
    organization: [],
    tier: [],
    year: [],
  });

  function updateViewItems() {
    API.viewAPI(userInput.viewCategorySelect).then((data) => {
      setViewItems({
        event: [...data.data.event],
        organization: [...data.data.organization],
        tier: [...data.data.tier],
        year: [...data.data.year],
      });
    });
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setUserInput({ ...userInput, [id]: value });
    // if (id === "viewCategorySelect") {
    //   API.viewAPI(value).then((data) => setViewItems({ arr: [...data] }));
    // }
  }

  function viewUpdate(event) {}

  function viewDelete(event) {}

  updateViewItems();

  return (
    <div>
      <div className="container mx-auto">
        <div className="subtitle mx-auto">View and Edit Items</div>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">Select a Category to View/Edit</p>
        <div className="text-center">
          <select
            className="full mx-auto"
            id="viewCategorySelect"
            onChange={handleChange}
            value={userInput.viewCategorySelect}
          >
            <option value="tier">Tiers</option>
            <option value="event">Events</option>
            <option value="organization">Organizations</option>
            <option value="year">Years</option>
          </select>
        </div>
        {/* <div className="container-warning mx-auto">
          <p className="warning-title">WARNING!</p>
          <p className="warning-text">Deleting an item will also remove all records associated with that item</p>
        </div> */}
        <div className="subtitle mx-auto">Item Name</div>
        <hr className="line mx-auto"></hr>
        {viewItems[userInput.viewCategorySelect].map((x) => {
          return (
            <ViewItem
              text={x.name}
              handleChange={handleChange}
              viewUpdate={viewUpdate}
              viewDelete={viewDelete}
              key={x._id}
            />
          );
        })}
      </div>

      <div className="container mx-auto">
        <div className="subtitle mx-auto">Add Items</div>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">Select an Item to Add</p>
        <div className="text-center">
          <select
            className="full mx-auto"
            id="viewAddCategorySelect"
            onChange={handleChange}
          >
            <option value="tier">Tiers</option>
            <option value="event">Events</option>
            <option value="organization">Organizations</option>
            <option value="year">Years</option>
          </select>
        </div>
        <p className="text mx-auto">Enter Information</p>
        <div className="text-center">
          <input className="full mx-auto" type="text" />
        </div>
        <div className="text-center">
          <button className="button blue">Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default View;

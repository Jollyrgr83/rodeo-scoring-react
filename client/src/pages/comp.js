// COMP PAGE COMPONENT
// react
import React from "react";

function Comp() {
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
      </div>

      <div className="container mx-auto">
        <p className="subtitle mx-auto">View / Edit Competitors</p>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">Select a Competitor</p>
        <div className="text-center mx-auto">
          <select className="full mx-auto">
            <option>test</option>
          </select>
        </div>
        <p className="text mx-auto">Competitor Number</p>
        <div className="text-center mx-auto">
          <input className="full mx-auto" type="text" />
        </div>
        <p className="text mx-auto">First Name</p>
        <div className="text-center mx-auto">
          <input className="full mx-auto" type="text" />
        </div>
        <p className="text mx-auto">Last Name</p>
        <div className="text-center mx-auto">
          <input className="full mx-auto" type="text" />
        </div>
        <p className="text mx-auto">Organization</p>
        <div className="text-center mx-auto">
          <select className="full mx-auto">
            <option>test</option>
          </select>
        </div>
        <div className="row text-center mx-auto">
          <button className="button blue mx-auto">Update</button>
          <button className="button red mx-auto">Delete</button>
        </div>
      </div>

      <div className="container mx-auto">
        <p className="subtitle mx-auto">Add Competitors</p>
        <hr className="line mx-auto"></hr>
        <p className="text mx-auto">Select Competition Tier</p>
        <div className="text-center mx-auto">
          <select className="full mx-auto">
            <option>test</option>
          </select>
        </div>
        <p className="text mx-auto">Enter Competitor Number</p>
        <div className="text-center mx-auto">
          <input className="full mx-auto" type="text" />
        </div>
        <p className="text mx-auto">Enter First Name</p>
        <div className="text-center mx-auto">
          <input className="full mx-auto" type="text" />
        </div>
        <p className="text mx-auto">Enter Last Name</p>
        <div className="text-center mx-auto">
          <input className="full mx-auto" type="text" />
        </div>
        <p className="container-text mx-auto">Select Organization</p>
        <div className="text-center mx-auto">
          <select className="full mx-auto">
            <option>test</option>
          </select>
        </div>
        <div className="row text-center mx-auto">
          <button className="button blue mx-auto">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Comp;

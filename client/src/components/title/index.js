// TITLE COMPONENT

// react
import React from "react";
// stylesheet
import "./title.css";

function Title( { title }) {
  return (
    <div className="mx-auto">
      <h1 className="title mx-auto">{title}</h1>
      <hr className="main-line mx-auto"></hr>
    </div>
  );
}

export default Title;

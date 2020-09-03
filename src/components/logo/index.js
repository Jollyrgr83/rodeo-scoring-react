// LOGO COMPONENT

// react
import React from "react";
// stylesheet
import "./logo.css";
// logo image
import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    <div className="logo-container text-center mx-auto">
      <img className="logo mx-auto" src={logo} alt="Santee Cooper Logo" />
    </div>
  );
}

export default Logo;

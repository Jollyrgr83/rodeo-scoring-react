// HEADER COMPONENT

// react
import React from "react";
// stylesheet
import "./header.css";
// components
import Title from "../title";
import Logo from "../logo";

function Header({ title }) {
  return (
    <header>
      <Title title={title} />
      <Logo />
    </header>
  );
}

export default Header;

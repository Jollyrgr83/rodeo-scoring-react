// PAGE COMPONENT
// react
import React from "react";
// page components
import Home from "../pages/home";
import View from "../pages/view";
import Year from "../pages/year";
import Comp from "../pages/comp";
import Score from "../pages/score";
import Report from "../pages/report";

function Page( { activePage, handleChange, selectOption }) {
  switch (activePage) {
    case "home":
      return (
        <Home />
      );
    case "view":
      return (
        <View handleChange={handleChange} selectOption={selectOption} />
      );
    case "year":
      return (
        <Year />
      );
    case "comp":
      return (
        <Comp />
      );
    case "score":
      return (
        <Score />
      );
    case "report":
      return (
        <Report />
      );
    default:
      return null;
    }
}

export default Page;

// PAGE COMPONENT
// react
import React from "react";
// page components
import View from "../../pages/view";
import Year from "../../pages/year";
import Comp from "../../pages/comp";
import Score from "../../pages/score";
import Report from "../../pages/report";

function Page( { activePage }) {
  switch (activePage) {
    case "home":
      return null;
    case "view":
      return (
        <View />
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

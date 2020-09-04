import React, { useState } from "react";
// stylesheet
import "./App.css";
// components
import Header from "./components/header";
import Page from "./components/page";
import Nav from "./components/nav";
// utilities
import UTIL from "./util/util";

function App() {
  const [page, setPage] = useState({
    page: "home",
    title: UTIL.titleRef["home"],
  });

  function selectPage(event) {
    console.log(event.target.id);
    setPage({ page: event.target.id, title: UTIL.titleRef[event.target.id] });
  }

  return (
    <div className="background mx-auto">
      <Header title={page.title} />
      {/* <div className="main-container mx-auto">
        <div className="container-title mx-auto">View and Edit Items</div>
        <p className="container-text mx-auto">Select a Category to View/Edit</p>
        <div className="text-center">
          <select
            className="container-select mx-auto"
            id="view-category-select"
          >
            <option>test</option>
          </select>
        </div>
        <div className="text-center">
          <button className="container-button green">Show Items</button>
        </div>
      </div> */}
      <Page activePage={page.page} />
      <Nav navClick={selectPage} />
    </div>
  );
}

export default App;

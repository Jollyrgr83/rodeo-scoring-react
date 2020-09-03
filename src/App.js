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
  const [page, setPage] = useState({ page: "home", title: UTIL.titleRef["home"] });
  
  function selectPage(event) {
    setPage({ page: event.target.id, title: UTIL.titleRef[event.target.id] });
  }
  return (
    <div className="background">
      <Header title={page.title} />
      <Page activePage={page.page} />
      <Nav navClick={selectPage} />
    </div>
  );
}

export default App;

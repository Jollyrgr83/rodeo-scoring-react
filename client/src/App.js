import React, { useState } from "react";
// stylesheets
import "./App.css";
import "./assets/css/button.css";
import "./assets/css/color.css";
import "./assets/css/size.css";
// components
import Logo from "./components/logo";
import Nav from "./components/nav";
import Title from "./components/title";
import Page from "./components/page";
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
      <Logo />
      <Nav navClick={selectPage} />
      <Title title={page.title} />
      <Page activePage={page.page} />
    </div>
  );
}

export default App;

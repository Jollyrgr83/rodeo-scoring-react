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
  const [userInput, setUserInput] = useState({ viewCategorySelect: "tier" });
  const [page, setPage] = useState({
    page: "home",
    title: UTIL.titleRef["home"],
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setUserInput({...userInput, [id]: value });
  }

  function selectPage(event) {
    console.log(event.target.id);
    setPage({ page: event.target.id, title: UTIL.titleRef[event.target.id] });
  }

  console.log("userInput", userInput);
  return (
    <div className="background mx-auto">
      <Logo />
      <Nav navClick={selectPage} />
      <Title title={page.title} />
      <Page activePage={page.page} handleChange={handleChange} selectOption={userInput.viewCategorySelect} />
    </div>
  );
}

export default App;

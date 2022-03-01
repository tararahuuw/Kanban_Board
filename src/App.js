import React from "react";
import "./App.css";
import SideBar from "./Sidebar";
import Kanban from "./Kanban"

function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <Kanban />
      </div>
    </div>
  );
}

export default App;
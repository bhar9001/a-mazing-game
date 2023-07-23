import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pathfinding from "./components/Pathfinding/Pathfinding";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(
  <React.StrictMode>
    <Pathfinding />
  </React.StrictMode>,
  document.getElementById("root")
);

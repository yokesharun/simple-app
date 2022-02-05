import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./style/index.css";
import Base from "./Base";

ReactDOM.render(
  <BrowserRouter>
    <Base />
  </BrowserRouter>,
  document.getElementById("root")
);

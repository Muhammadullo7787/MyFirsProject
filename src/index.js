import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import Documentation from "./Documentation";

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <Documentation/> */}
  </BrowserRouter>,
  document.getElementById("root")
);

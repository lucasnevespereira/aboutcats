import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";

// Renders App
ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();

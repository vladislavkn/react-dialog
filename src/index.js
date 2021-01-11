import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals.js";
import WebFontLoader from "webfontloader";

import App from "./App";

import "./styles/index.css";

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

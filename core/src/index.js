import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/*Disbale It*/
// import "./index.css";

/*Import Sass*/
// import "./styles/main.style.scss";

/* npm i -D bootstrap jquery popper.js */
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

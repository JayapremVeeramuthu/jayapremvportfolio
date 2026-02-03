import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* ✅ ORDER IS IMPORTANT */
import "./styles/global.css";   // base colors, body, font
import "./styles/grid.css";     // grid + mobile stacking fixes

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

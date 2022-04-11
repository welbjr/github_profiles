import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

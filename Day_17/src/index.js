import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AppMy from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppMy />
  </StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <Header />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routing";
import theme from "./theme";
import GlobalStyle from "./theme/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BaseCSS, GridThemeProvider } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";
import Modal from "react-modal";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routing";
import { theme, gridTheme } from "./theme";
import GlobalStyle from "./theme/globalStyles";
import store from "./store";
import { HelmetProvider, Helmet } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider
        theme={
          theme as any /*only until theme gets defined fully, now only what used is defined*/
        }
      >
        <GridThemeProvider gridTheme={gridTheme}>
          <Provider store={store}>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
            </Helmet>
            {Modal.setAppElement("#root")}
            <BaseCSS />
            <GlobalStyle />
            <Routes />
          </Provider>
        </GridThemeProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

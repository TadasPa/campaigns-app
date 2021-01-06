import { createGlobalStyle } from "styled-components";
import { fonts } from "./typography";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${fonts.default};
    font-size: 16px;
  }

  .react-datepicker {
    font-family: ${fonts.default};
    font-size: 12px;
  }
`;

export default GlobalStyle;

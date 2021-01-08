import { createGlobalStyle } from "styled-components";
import { fonts, textStyles } from "./typography";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${fonts.default};
    font-size: 16px;
  }

  .react-datepicker {
    font-family: ${textStyles.small.fontFamily};
    font-size: ${textStyles.small.fontSize};
    line-height: ${textStyles.small.lineHeight};
  }
`;

export default GlobalStyle;

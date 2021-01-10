import { DefaultTheme } from "styled-components";
import { palette } from "./colors";
import space from "./space";
import { fonts, textStyles } from "./typography";

export const theme: Pick<
  DefaultTheme,
  "space" | "fonts" | "colors" | "textStyles"
> = {
  space,
  fonts,
  colors: palette,
  textStyles,
};

export const gridTheme = {
  row: {
    padding: 0,
  },
  col: {
    padding: 0,
  },
  container: {
    padding: 0,
  },
};

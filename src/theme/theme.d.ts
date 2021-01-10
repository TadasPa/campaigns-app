import { Theme } from "styled-system";

import { fonts, fontSizes, fontWeights, textStyles } from "./typography";
import { space } from "./space";
import { palette } from "./colors";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    fonts: typeof fonts;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    space: typeof space;
    textStyles: typeof textStyles;
    colors: typeof palette;
  }
}

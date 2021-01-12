import React, { PropsWithChildren, ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { theme } from "../theme";
import GlobalStyles from "../theme/globalStyles";

const Providers = (initialTheme: DefaultTheme) => ({
  children,
}: PropsWithChildren<any>) => (
  <ThemeProvider theme={initialTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

interface ICustomRenderOptions {
  initialTheme?: DefaultTheme;
}

const customRender = (
  ui: ReactElement,
  { initialTheme = theme as any, ...restOptions }: ICustomRenderOptions = {}
) =>
  render(ui, {
    wrapper: Providers(initialTheme),
    ...restOptions,
  });

export * from "@testing-library/react";

export { customRender as render };

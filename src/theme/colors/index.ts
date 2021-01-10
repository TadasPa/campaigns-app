export enum Color {
  White = "#FFFFFF",
  Woodsmoke = "#050606",
  GovernorBay = "#3149b9",
  Amaranth = "#e91e63",
  FruitSalad = "#4caf50",
}

export const palette = {
  buttons: {
    primary: Color.GovernorBay,
  },
  status: {
    active: Color.FruitSalad,
    inactive: Color.Amaranth,
  },
  typography: {
    light: Color.White,
    dark: Color.Woodsmoke,
  },
  background: {
    white: Color.White,
    blue: Color.GovernorBay,
  },
};

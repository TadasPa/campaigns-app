export enum Color {
  White = "#FFFFFF",
  Woodsmoke = "#050606",
  Mischka = "#dcdee6",
  GovernorBay = "#3149b9",
  Amaranth = "#e91e63",
  FruitSalad = "#4caf50",
}

export const palette = {
  error: Color.Amaranth,
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
    gray: Color.Mischka,
    blue: Color.GovernorBay,
  },
};

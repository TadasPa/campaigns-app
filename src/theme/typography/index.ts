export const fonts = {
  default: "Helvetica Neue, Helvetica,Arial, sans-serif",
};

export const fontSizes = {
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  18: "1.125rem",
};

export const fontWeights = <const>{
  regular: 400,
  medium: 500,
  bold: 600,
};

export const lineHeights = {
  small: 1.4,
  normal: 1.5,
  large: 1.6,
};

const commonParagraph = {
  fontFamily: fonts.default,
  fontWeight: fontWeights.regular,
  lineHeight: lineHeights.large,
};

export const textStyles = {
  large: {
    ...commonParagraph,
    fontSize: fontSizes[18],
  },
  base: {
    ...commonParagraph,
    fontSize: fontSizes[16],
  },
  small: {
    ...commonParagraph,
    fontSize: fontSizes[14],
  },
};

import styled, { css } from "styled-components";

export const HeaderCol = styled.div`
  ${({ theme: { colors, textStyles } }) => css`
    padding: 5px;
    margin-left: 1px;
    background-color: ${colors.background.blue};
    color: ${colors.typography.light};
    font-family: ${textStyles.small.fontFamily};
    font-size: ${textStyles.small.fontSize};
    line-height: ${textStyles.small.lineHeight};
  `}
`;

export const DataCol = styled(HeaderCol)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.background.white};
    color: ${colors.typography.dark};
  `}
`;

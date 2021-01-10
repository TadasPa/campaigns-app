import React from "react";
import styled, { css } from "styled-components";
import { color, ColorProps, space, SpaceProps } from "styled-system";

const Text = styled.span<SpaceProps & ColorProps>`
  ${({ theme: { textStyles } }) => css`
    font-family: ${textStyles.base.fontFamily};
    font-size: ${textStyles.base.fontSize};
    line-height: ${textStyles.base.lineHeight};
  `}

  ${space}
  ${color}
`;

export default Text;

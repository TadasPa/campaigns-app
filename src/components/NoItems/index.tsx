import React from "react";
import styled, { css } from "styled-components";

const NoItems = styled.div`
  ${({ theme: { textStyles } }) => css`
    text-align: center;
    padding: 40px;
    font-family: ${textStyles.base.fontFamily};
    font-size: ${textStyles.base.fontSize};
    line-height: ${textStyles.base.lineHeight};
  `}
`;

export default NoItems;

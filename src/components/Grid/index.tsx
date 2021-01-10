import React from "react";
import styled from "styled-components";
import { flexbox, FlexboxProps, space, SpaceProps } from "styled-system";

export type IFlexBox = SpaceProps & FlexboxProps;

export const FlexBox = styled.div<IFlexBox>`
  display: flex;

  ${space};
  ${flexbox};
`;

export const FlexCol = styled(FlexBox)`
  flex-direction: column;
`;

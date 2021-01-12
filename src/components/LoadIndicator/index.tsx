import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "../Grid";

interface ILoadIndicator {
  isLoading: boolean;
}

const LoadIndicator: FC = ({ ...rest }) => (
  <div className="lds-ring" {...rest}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

const StyledLoadIndicator = styled(LoadIndicator)`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  z-index: 2;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${({ theme: { colors } }) => colors.background.blue};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme: { colors } }) => colors.background.blue}
      transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container: FC<ILoadIndicator> = ({ isLoading, ...rest }) => (
  <FlexBox {...rest} justifyContent="center" alignItems="center">
    <StyledLoadIndicator />
  </FlexBox>
);

const StyledContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  opacity: 0.5;
  background-color: ${({ theme: { colors } }) => colors.background.gray};
  display: ${({ isLoading }) => (isLoading ? "flex" : "none")};
`;

export default StyledContainer;

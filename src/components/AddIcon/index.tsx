import React, { FC, HTMLAttributes } from "react";
import { ReactComponent as AddSVG } from "../../assets/icons/plus-circle-fill.svg";
import styled from "styled-components";
import { FlexBox } from "../Grid";

const AddIcon: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
  return (
    <FlexBox alignItems="center" {...rest}>
      <AddSVG title="Add Items" />
      {children}
    </FlexBox>
  );
};

const StyledAddIcon = styled(AddIcon)`
  & svg {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    fill: ${({ theme: { colors } }) => colors.buttons.primary};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default StyledAddIcon;

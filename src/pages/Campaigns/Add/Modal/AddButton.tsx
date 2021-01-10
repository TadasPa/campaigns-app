import React, { FC } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface IAddButton extends SpaceProps {
  onAdd: () => void;
}

const AddButton: FC<IAddButton> = ({ onAdd, ...rest }) => {
  return (
    <button onClick={onAdd} {...rest}>
      Add campaigns
    </button>
  );
};

const StyledAddButton = styled(AddButton)<IAddButton>`
  padding: 7px;
  width: 300px;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.buttons.primary};
  color: ${({ theme: { colors } }) => colors.typography.light};
  font-family: ${({ theme: { textStyles } }) => textStyles.small.fontFamily};
  font-size: ${({ theme: { textStyles } }) => textStyles.small.fontSize};
  line-height: ${({ theme: { textStyles } }) => textStyles.small.lineHeight};

  & :hover {
    cursor: pointer;
  }

  ${space};
`;

export default StyledAddButton;

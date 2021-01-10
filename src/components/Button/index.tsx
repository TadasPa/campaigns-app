import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type IButton = SpaceProps & HTMLAttributes<HTMLButtonElement>;

const Button: FC<IButton> = ({ onClick, children, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

const StyledButton = styled(Button)<IButton>`
  padding: 7px;
  width: 300px;
  border: 0;
  border-radius: 3px;
  background-color: ${({ theme: { colors } }) => colors.buttons.primary};
  color: ${({ theme: { colors } }) => colors.typography.light};
  font-family: ${({ theme: { textStyles } }) => textStyles.small.fontFamily};
  font-size: ${({ theme: { textStyles } }) => textStyles.small.fontSize};
  line-height: ${({ theme: { textStyles } }) => textStyles.small.lineHeight};

  &:hover {
    cursor: pointer;
  }

  ${space};
`;

export default StyledButton;

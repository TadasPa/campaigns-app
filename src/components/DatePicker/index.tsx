import React from "react";
import ReactDatePicker from "react-datepicker";
import { ISetCallback } from "../../types";

import "react-datepicker/dist/react-datepicker.css";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";

export interface IDatePicker extends SpaceProps {
  selected?: Date;
  onChange: ISetCallback<Date>;
  placeholder?: string;
}

const DatePicker = ({
  selected,
  onChange,
  placeholder,
  ...rest
}: IDatePicker) => (
  <ReactDatePicker
    placeholderText={placeholder}
    dateFormat="P"
    selected={selected}
    onChange={onChange}
    {...rest}
  />
);

const StyledDatePicker = styled(DatePicker)`
  padding: 5px;

  ${({ theme: { textStyles: { small } } })=>css`
    font-family: ${small.fontFamily};
    font-size: ${small.fontSize};
    line-height: ${small.lineHeight};
  `}

  ${space}
`;

export default StyledDatePicker;

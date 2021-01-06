import React from "react";
import ReactDatePicker from "react-datepicker";
import { ISetCallback } from "../../types";

import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { fontStyle, space, SpaceProps } from "styled-system";

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
  font-family: ${({ theme: { fonts } }) => fonts.default};
  font-size: 12px;

  ${space}
`;

export default StyledDatePicker;

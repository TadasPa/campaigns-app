import React from "react";
import ReactDatePicker from "react-datepicker";
import { ISetCallback } from "../../types";

import "react-datepicker/dist/react-datepicker.css";

export interface IDatePicker {
  selected?: Date;
  onChange: ISetCallback<Date>;
}

const DatePicker = ({ selected, onChange }: IDatePicker) => (
  <ReactDatePicker dateFormat="P" selected={selected} onChange={onChange} />
);

export default DatePicker;

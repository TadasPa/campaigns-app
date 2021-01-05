import React, { FC } from "react";
import { ISetCallback } from "../../types";

interface IDateRange {
  setStartDate: ISetCallback<string>;
  setEndDate: ISetCallback<string>;
}

export const DateRange: FC<IDateRange> = ({ setStartDate, setEndDate }) => (
  <span>date range</span>
);

export default DateRange;

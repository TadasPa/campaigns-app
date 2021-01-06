import React, { FC } from "react";
import { formatToShortDate, parseShortDate } from "../../tools/dateFormatter";
import { ISetCallback } from "../../types";
import DatePicker from "../DatePicker";

interface IDateRange {
  startDate?: string;
  endDate?: string;
  setStartDate: ISetCallback<string>;
  setEndDate: ISetCallback<string>;
}

export const DateRange: FC<IDateRange> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  const start = !!startDate ? parseShortDate(startDate) : undefined;
  const end = !!endDate ? parseShortDate(endDate) : undefined;

  return (
    <>
      <div className="dateRangeFilter">
        <DatePicker
          onChange={(value?: Date) => {
            setStartDate(value ? formatToShortDate(value) : "");
          }}
          selected={start}
        />
        <span className="separator">-</span>
        <DatePicker
          onChange={(value?: Date) => {
            setEndDate(value ? formatToShortDate(value) : "");
          }}
          selected={end}
        />
      </div>
    </>
  );
};

export default DateRange;

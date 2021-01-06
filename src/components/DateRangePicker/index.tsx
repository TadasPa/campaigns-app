import React, { FC } from "react";
import { formatToShortDate, parseShortDate } from "../../tools/dateFormatter";
import { ISetCallback } from "../../types";
import DatePicker from "../DatePicker";
import { FlexBox } from "../Grid";

interface IDateRange {
  startDate?: string;
  endDate?: string;
  setStartDate: ISetCallback<string>;
  setEndDate: ISetCallback<string>;
  startPlaceholder?: string;
  endPlaceholder?: string;
}

export const DateRange: FC<IDateRange> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  startPlaceholder,
  endPlaceholder,
}) => {
  const start = !!startDate ? parseShortDate(startDate) : undefined;
  const end = !!endDate ? parseShortDate(endDate) : undefined;

  return (
    <FlexBox>
      <DatePicker
        onChange={(value?: Date) => {
          setStartDate(value ? formatToShortDate(value) : "");
        }}
        selected={start}
        placeholder={startPlaceholder}
        mr={12}
      />
      <DatePicker
        onChange={(value?: Date) => {
          setEndDate(value ? formatToShortDate(value) : "");
        }}
        selected={end}
        placeholder={endPlaceholder}
      />
    </FlexBox>
  );
};

export default DateRange;

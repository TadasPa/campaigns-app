import React, { FC } from "react";
import styled, { css } from "styled-components";
import { isDateInRange } from "../../tools/dateRange";

interface IStatus {
  startDate: string;
  endDate: string;
}

const StatusWrapper = styled.span<{ isActive: boolean }>`
  ${({ isActive, theme: { colors, textStyles } }) => css`
    ::before {
      content: "";
      height: ${textStyles.small.fontSize};
      width: ${textStyles.small.fontSize};
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
      background-color: ${isActive
        ? colors.status.active
        : colors.status.inactive};
    }
  `}
`;

const Status: FC<IStatus> = ({ startDate, endDate }) => {
  const isActive = isDateInRange(new Date(), startDate, endDate);

  return (
    <StatusWrapper isActive={isActive}>
      {isActive ? "Active" : "Inactive"}
    </StatusWrapper>
  );
};

export default Status;

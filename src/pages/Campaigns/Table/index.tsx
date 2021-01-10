import React, { FC, useMemo } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";
import { space, SpaceProps } from "styled-system";
import Status from "../../../components/Status";
import UserName from "../../../components/UserName";
import { Campaign } from "../../../types/Campaign";
import { User } from "../../../types/User";

const HeaderCol = styled.div`
  ${({ theme: { colors, textStyles } }) => css`
    padding: 5px;
    margin-left: 1px;
    background-color: ${colors.background.blue};
    color: ${colors.typography.light};
    font-family: ${textStyles.small.fontFamily};
    font-size: ${textStyles.small.fontSize};
    line-height: ${textStyles.small.lineHeight};
  `}
`;

const DataCol = styled(HeaderCol)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.background.white};
    color: ${colors.typography.dark};
  `}
`;

interface ICampaignsTable extends SpaceProps {
  campaigns: Campaign[];
  users: User[];
}

const Table: FC<ICampaignsTable> = ({ campaigns, users, ...rest }) => {
  const rows = useMemo(() => {
    return campaigns.map(
      ({ name, startDate, endDate, Budget, userId }, index) => (
        <Row key={index}>
          <Col col>
            <DataCol>{name}</DataCol>
          </Col>
          <Col col>
            <DataCol>
              <UserName userId={userId} users={users} />
            </DataCol>
          </Col>
          <Col col>
            <DataCol>{startDate}</DataCol>
          </Col>
          <Col col>
            <DataCol>{endDate}</DataCol>
          </Col>
          <Col col>
            <DataCol>
              <Status startDate={startDate} endDate={endDate} />
            </DataCol>
          </Col>
          <Col col>
            <DataCol>{Budget} USD</DataCol>
          </Col>
        </Row>
      )
    );
  }, [campaigns, users]);

  return (
    <Container {...rest}>
      <Row>
        <Col col>
          <HeaderCol>Name</HeaderCol>
        </Col>
        <Col col>
          <HeaderCol>User Name</HeaderCol>
        </Col>
        <Col col>
          <HeaderCol>Start Date</HeaderCol>
        </Col>
        <Col col>
          <HeaderCol>End Date</HeaderCol>
        </Col>
        <Col col>
          <HeaderCol>Status</HeaderCol>
        </Col>
        <Col col>
          <HeaderCol>Budget</HeaderCol>
        </Col>
      </Row>
      {rows}
    </Container>
  );
};

const StyledTable = styled(Table)<ICampaignsTable>`
  ${space}
`;

export default StyledTable;

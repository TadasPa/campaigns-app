import React, { FC, useMemo } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import NoItems from "../../../components/NoItems";
import Status from "../../../components/Status";
import { DataCol, HeaderCol } from "../../../components/Table";
import UserName from "../../../components/UserName";
import { Campaign } from "../../../types/Campaign";
import { User } from "../../../types/User";

interface ICampaignsList {
  campaigns: Campaign[];
  users: User[];
}

const List: FC<ICampaignsList> = ({ campaigns, users, ...rest }) => {
  const rows = useMemo(() => {
    if (!campaigns.length) {
      return <NoItems>No campaigns suite filter values.</NoItems>;
    }

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

export default List;

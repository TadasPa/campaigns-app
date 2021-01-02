import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface ICampaigns extends SpaceProps {}

const Campaigns: FC<ICampaigns> = () => {
  return <>campaigns page</>;
};

const CampaignsContainer: FC<ICampaigns> = styled(Campaigns)`
  padding: 10px;

  ${space}
`;

export default CampaignsContainer;

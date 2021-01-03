import React, { FC } from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

interface ICampaigns extends SpaceProps {}

const Campaigns: FC<ICampaigns> = ({ children, ...rest }) => (
  <span {...rest}>campaigns page{children}</span>
);

export const CampaignsContainer: FC<ICampaigns> = styled(Campaigns)`
  padding: 10px;

  ${space}
`;

export default CampaignsContainer;

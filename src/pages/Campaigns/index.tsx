import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { AnyAction } from "../../store";
import { CampaignActionType } from "../../store/campaigns";
import { Campaign } from "../../types/Campaign";

interface ICampaigns extends SpaceProps {}

const Campaigns: FC<ICampaigns> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.AddCampaigns = (campaigns: Campaign[] = []) => {
      dispatch<AnyAction<CampaignActionType, Campaign[]>>({
        type: CampaignActionType.Add,
        payload: campaigns,
      });
    };
  }, [dispatch]);

  return <span {...rest}>campaigns page{children}</span>;
};

export const CampaignsContainer: FC<ICampaigns> = styled(Campaigns)`
  padding: 10px;

  ${space}
`;

export default CampaignsContainer;

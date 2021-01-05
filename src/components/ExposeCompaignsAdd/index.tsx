import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "../../store";
import { CampaignActionType } from "../../store/campaigns/reducer";
import { Campaign } from "../../types/Campaign";

const ExposeCompaignsAdd: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.AddCampaigns = (campaigns: Campaign[] = []) => {
      dispatch<AnyAction<CampaignActionType, Campaign[]>>({
        type: CampaignActionType.Add,
        payload: campaigns,
      });
    };
  }, [dispatch]);

  return <></>;
};

export default ExposeCompaignsAdd;

import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "../../../../store";
import { CampaignActionType } from "../../../../store/campaigns/reducer";
import { Campaign } from "../../../../types/Campaign";

const ConsoleMethod: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.AddCampaigns = (campaigns: Campaign[] = []) => {
      dispatch<AnyAction<CampaignActionType, Campaign[]>>({
        type: CampaignActionType.Add,
        payload: campaigns,
      });
    };
  }, [dispatch]);

  return null;
};

export default ConsoleMethod;

import { AnyAction } from "..";
import { Campaign } from "../../types/Campaign";

export enum CampaignActionType {
  Add = "ADD_CAMPAIGNS",
}

const initialState: Campaign[] = [];

const reducer = (
  state: Campaign[] = initialState,
  action: AnyAction<CampaignActionType, Campaign[]>
) => {
  switch (action.type) {
    case CampaignActionType.Add:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;

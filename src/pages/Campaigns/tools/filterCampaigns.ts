import { isDateInRange } from "../../../tools/dateRange";
import { Campaign } from "../../../types/Campaign";

interface IFilterCampaigns {
  startDate: string;
  endDate: string;
  search: string;
  campaigns: Campaign[];
}

const isSearchMatching = (name: string = "", search: string = "") => {
  return name.toLowerCase().includes(search.toLowerCase().trim());
};

export const filterCampaigns = ({
  startDate: from = "",
  endDate: to = "",
  search = "",
  campaigns = [],
}: IFilterCampaigns): Campaign[] => {
  return campaigns.filter(({ name, startDate, endDate }) => {
    return (
      isDateInRange(startDate, from, to) &&
      isDateInRange(endDate, from, to) &&
      isSearchMatching(name, search)
    );
  });
};

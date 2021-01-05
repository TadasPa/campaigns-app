import { parseShortDate } from "../../../tools/dateFormatter";
import { Campaign } from "../../../types/Campaign";

interface IFilterCampaigns { 
    startDate: string;
    endDate: string;
    search: string;
    campaigns: Campaign[];
}

const isDateInRange = (date: string, from: string, to: string) => { 
    if (date) { 
        const parsedDate = parseShortDate(date);
        const parsedFrom = from ? parseShortDate(from) : '';
        const parsedTo = to ? parseShortDate(to) : '';

        if (parsedFrom && parsedDate < parsedFrom) { 
            return false;
        }
        if (parsedTo && parsedDate > parsedTo) { 
            return false;
        }
    }    
    return true;
};

const isSearchMatching = (name: string, search: string) => { 
    return name.includes(search.trim());
};

export const filterCampaigns = ({ startDate: from = '', endDate: to = '', search = '', campaigns = [] }: IFilterCampaigns): Campaign[] => {     
    return campaigns.filter(({ name, startDate, endDate }) => { 
        return isDateInRange(startDate, from, to) && isDateInRange(endDate, from, to) && isSearchMatching(name, search);
    });
};
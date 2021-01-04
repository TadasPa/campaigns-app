import { Campaign } from "../../types/Campaign";

interface CampaignsStateChunk { 
    campaigns: Campaign[];
}

export const getCampains = ({ campaigns }: CampaignsStateChunk) => campaigns;

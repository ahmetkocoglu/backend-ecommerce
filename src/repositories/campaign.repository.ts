import Campaign from "../models/campaign.model"

interface ICampaignRepository {
    list(): Promise<Array<Campaign>>;
}

class CampaignRepository implements ICampaignRepository {
    async list(): Promise<Array<Campaign>>{
        try {
            return await Campaign.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CampaignRepository()
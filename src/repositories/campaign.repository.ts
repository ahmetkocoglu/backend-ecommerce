import Campaign from "../models/campaign.model"

interface ICampaignRepository {
    list(): Promise<Array<Campaign>>;
    insert(
        productId: number, 
        title: string, 
        description: string, 
        type: string
        ): Promise<Campaign | null>
}

class CampaignRepository implements ICampaignRepository {
    async list(): Promise<Array<Campaign>>{
        try {
            return await Campaign.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        productId: number, 
        title: string, 
        description: string, 
        type: string
        ): Promise<Campaign | null>{
        try {
            return await Campaign.create({
                productId,
                title, 
                description,
                type
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CampaignRepository()
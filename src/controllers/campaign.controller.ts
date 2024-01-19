import { Request, Response } from "express";
import CampaignRepository from "../repositories/campaign.repository"

export default class CampaignController {
    async getCampaigns(req: Request, res: Response) {
        try {
            const list = await CampaignRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
}
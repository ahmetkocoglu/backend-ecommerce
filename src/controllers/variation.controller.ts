import { Request, Response } from "express";
import VariationRepository from "../repositories/variation.repository";

export default class VariationController {
    async getVariations(req: Request, res: Response) {
        try {
            const list = await VariationRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
}
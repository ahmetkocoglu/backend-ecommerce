import { Request, Response } from "express";
import priceRepository from "../repositories/price.repository";

export default class PriceController {
    async getPrices(req: Request, res: Response) {
        try {
            const list = await priceRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
}
import { Request, Response } from "express";
import movementRepository from "../repositories/movement.repository";

export default class MovementController {
    async getMovements(req: Request, res: Response) {
        try {
            const list = await movementRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
}
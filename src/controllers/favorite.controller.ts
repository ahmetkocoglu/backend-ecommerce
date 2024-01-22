import { Request, Response } from "express";
import favoriteRepository from "../repositories/favorite.repository";

export default class FavoriteController {
    async getFavorites(req: Request, res: Response) {
        try {
            const list = await favoriteRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
    async setFavorites(req: Request, res: Response) {
        const {productId, userId} = req.body
        try {
            const insert = await favoriteRepository.insert(productId, userId)

            res.status(200).send({ message: "", data: insert })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
}
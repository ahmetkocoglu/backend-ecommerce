import { Request, Response } from "express";
import UserRepository from "../repositories/user.repository"

export default class CampaignController {
    async getUsers(req: Request, res: Response) {
        try {
            const list = await UserRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }

    async getMe(req: Request, res: Response) {
        try {
            const user = await UserRepository.me(req.body.authUser.userId)
            if (!user) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", user })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
}
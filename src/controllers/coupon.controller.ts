import { Request, Response } from "express";
import couponRepository from "../repositories/coupon.repository";

export default class CouponController {
    async getCoupons(req: Request, res: Response) {
        try {
            const list = await couponRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error", error })
        }
    }
}
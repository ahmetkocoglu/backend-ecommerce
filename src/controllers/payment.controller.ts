import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import movementRepository from "../repositories/movement.repository";

export default class PaymentController {
    async pay(req: Request, res: Response){
        const token = req.headers.authorization?.replace('Bearer ', '') as string
        let userId;

        try {
            const verify = jwt.verify(token, "123")
            const decode: any = verify ? jwt.decode(token) : null
            userId = decode.id;
        } catch (error) {
            return res.status(401).send({ message: error })
        }

        if (!userId) return res.status(401).send({ message: "no user" })

        const list = await movementRepository.basket(userId)

        const basketList = list.map((k: any) => {
            return {total: k.total, productId: k.productId}
        })

        const total = (basketList.reduce((acc, o) => acc + parseFloat(o.total), 0));
        
        const pay = await movementRepository.payHeader(userId)


        res.status(200).send({ message: "Payment", body: req.body, userId, total, basketList, pay});
    }
}
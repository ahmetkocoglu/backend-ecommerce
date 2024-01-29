import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import movementRepository from "../repositories/movement.repository";
import axios from "axios";

export default class PaymentController {
    async pay(req: Request, res: Response) {
        const token = req.headers.authorization?.replace('Bearer ', '') as string
        let userId: number;

        try {
            const verify = jwt.verify(token, "123")
            const decode: any = verify ? jwt.decode(token) : null
            userId = decode.id;
        } catch (error) {
            return res.status(401).send({ message: error })
        }

        if (!userId) return res.status(401).send({ message: "no user" })

        const list = await movementRepository.basket(userId)

        if (list.length > 0) {
            const basketList = list.map((k: any) => {
                return { total: k.total, tax: k.tax, productId: k.productId }
            })

            const total = (basketList.reduce((acc, o) => acc + parseFloat(o.total), 0));
            const totalTax = (basketList.reduce((acc, o) => acc + parseFloat(o.tax), 0));

            let provisionCode;

            const cardName = req.body.cardName
            const cardNumber = req.body.cardNumber.replace(/\s/g, '');
            const expMonthYear = req.body.expMonthYear
            const cvCode = req.body.cvCode
            const installments = req.body.installments

            await axios.post("http://localhost:3070/validation", {
                cardName: cardName,
                cardNumber: cardNumber,
                expMonthYear: expMonthYear,
                cvCode: cvCode,
                installments: installments
            })
                .then((response: any) => {
                    if (response.data.status === "1") {
                        provisionCode = response.data.code
                    }
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });

            if (provisionCode) {
                await axios.post("http://localhost:3070/payment", {
                    code: provisionCode,
                    price: total
                })
                    .then(async (response: any) => {
                        if (response.data.status === true) {
                        }
                        const payId = await movementRepository.payHeaderInsert(userId, total, totalTax)

                        await movementRepository.payRowUpdate(userId, payId)

                        return res.status(200).send({ message: "Payment", body: req.body, userId, total, basketList, payId });
                    })
                    .catch((error) => {
                        console.log(error);
                        return res.status(400).send({ message: "hatalı" })
                    });
            } else {
                res.status(200).send({ message: "banka ödeme işlemini red etti" })
            }

            res.status(200).send({ message: "---" })
        } else {
            res.status(200).send({ message: "no basket" })
        }
    }
    async test(req: Request, res: Response) {
        await axios.post("http://localhost:3070/payment", {
            code: "V7N#fU3hT6xXxn9gY6dwq$T5nRaPJ$b0Dl0pBh",
            price: 100
        })
            .then((response: any) => {
                console.log(response.data);
                return res.status(200).send({ message: "başarılı", data: response.data })
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).send({ message: "hatalı" })
            });
    }
}
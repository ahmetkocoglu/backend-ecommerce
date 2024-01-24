import { Request, Response } from "express";
import movementRepository from "../repositories/movement.repository";
import productRepository from "../repositories/product.repository";
import priceRepository from "../repositories/price.repository";
import jwt from "jsonwebtoken"

export default class MovementController {
    async getMovements(req: Request, res: Response) {
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

        try {
            const list = await movementRepository.list(userId)
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
    async setMovements(req: Request, res: Response) {
        const { productId, userId, processType, price, discountPrice, quantity, tax, total, description } = req.body
        try {
            const insert = await movementRepository.insert(productId, userId, processType, price, discountPrice, quantity, tax, total, description)
            res.status(200).send({ message: "", data: insert })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
    async addBasket(req: Request, res: Response) {
        const { productId, quantity } = req.body
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

        const productRow = await productRepository.row(productId)
        if (!productRow) return res.status(401).send({ message: "no product" })
        
        const priceRow = await priceRepository.row(productId)
        if (!priceRow) return res.status(401).send({ message: "no price" })

        const price = priceRow?.price ?? 0
        const discountPrice = priceRow?.discountPrice ?? 0
        const tax = (discountPrice / 100) * (productRow?.tax ?? 0)
        const totalTax = tax * quantity
        const total = (discountPrice * quantity) + totalTax

        const insert = await movementRepository.insert(
            productId,
            userId,
            "basket",
            price,
            discountPrice,
            quantity,
            totalTax,
            total,
            "ürün sepete eklendi")

        res.status(200).send({ message: "", data: insert })
    }
}
import { Request, Response } from "express";
import ProductRepository from "../repositories/product.repository";

export default class ProductController {
    async getProducts(req: Request, res: Response) {
        try {
            const list = await ProductRepository.list()
            if (!list) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", list })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }

    async setProduct(req: Request, res: Response) {
        const {title, 
            seo, 
            description,
            stockCode,
            barcode,
            associative,
            tax} = req.body
        try {
            const insert = await ProductRepository.insert(
                title, 
                seo, 
                description,
                stockCode,
                barcode,
                associative,
                tax)

            res.status(200).send({message: "successful", data: insert})
        } catch (error) {
            res.status(500).send({message: "Some error"})
        }
    }
}
import { Request, Response } from "express";
import ProductRepository from "../repositories/product.repository";

export default class ProductCategoryController {
    async getProductCategories(req: Request, res: Response) {
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
    async getCategoryProducts(req: Request, res: Response) {
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
}
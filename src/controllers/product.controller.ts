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
    async getProduct(req: Request, res: Response) {
        const url = require('url');
        const querystring = require('querystring');

        var rawUrl = req.protocol + '://' + req.get('Host') + req.url;
        let parsedUrl = url.parse(rawUrl);
        let parsedQs = querystring.parse(parsedUrl.query);

        const id = parsedQs.id === "true";
        
        try {
            if (id === true){
                const row = await ProductRepository.productId(parseInt(req.params.seo))
                if (!row) {
                    return res.status(401).send({ message: "no valid data found" })
                }
    
                res.status(200).send({ message: "", row })
            } else {
                const row = await ProductRepository.productSeo(req.params.seo)
                if (!row) {
                    return res.status(401).send({ message: "no valid data found" })
                }
    
                res.status(200).send({ message: "", row })
            }
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
    async setProductEnable(req: Request, res: Response) {
        const id: number = parseInt(req.params.id)
        try {
            const row = await ProductRepository.productUpdate(id, { confirm: true })
            if (!row) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ status: true, message: "", row })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
    async setProductDisable(req: Request, res: Response) {
        const id: number = parseInt(req.params.id)
        try {
            const row = await ProductRepository.productUpdate(id, { confirm: false })
            if (!row) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ status: true, message: "", row })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
    async setProductDelete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id)
        const now = new Date(Date.now())
        try {
            const row = await ProductRepository.productUpdate(id, { deletedAt: now })
            if (!row) {
                return res.status(401).send({ message: "no valid data found" })
            }

            res.status(200).send({ status: true, message: "", row, now })
        } catch (error) {
            return res.status(401).send({ message: "error" })
        }
    }
    async search(req: Request, res: Response) {
        try {
            const rows = await ProductRepository.search(req.params.search)
            if (rows.length === 0) {
                return res.status(404).send({ message: "no valid data found" })
            }

            res.status(200).send({ message: "", rows })
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
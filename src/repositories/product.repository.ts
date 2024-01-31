import Product from "../models/product.model"
import { Op } from "sequelize";

interface IProductRepository {
    row(productId: number): Promise<Product | null>;
    list(): Promise<Array<Product>>;
    product(seo: string): Promise<Product | null>;
    search(seo: string): Promise<Array<Product>>;
    insert(
        title: string,
        seo: string,
        description: string,
        stockCode: string,
        barcode: string,
        associative: string,
        tax: number
    ): Promise<Product | null>
}

class ProductRepository implements IProductRepository {
    async row(productId: number): Promise<Product | null> {
        try {
            return await Product.findOne({ where: { id: productId } })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async list(): Promise<Array<Product>> {
        try {
            return await Product.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async product(seo: string): Promise<Product | null> {
        try {
            return await Product.findOne({ where: { seo } })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async search(seo: string): Promise<Array<Product>> {
        try {
            return await Product.findAll({
                where: {
                    [Op.or]: [
                        { seo: { [Op.like]: `%${seo}%` } },
                        { title: { [Op.like]: `%${seo}%` } },
                        { description: { [Op.like]: `%${seo}%` } },
                        { barcode: { [Op.like]: `%${seo}%` } },
                        { stockCode: { [Op.like]: `%${seo}%` } }
                    ]
                }
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        title: string,
        seo: string,
        description: string,
        stockCode: string,
        barcode: string,
        associative: string,
        tax: number
    ): Promise<Product | null> {
        try {
            return await Product.create({
                title,
                seo,
                description,
                stockCode,
                barcode,
                associative,
                tax
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new ProductRepository()
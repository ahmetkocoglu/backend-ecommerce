import Product from "../models/product.model"
import { Op } from "sequelize";

interface IProductRepository {
    row(productId: number): Promise<Product | null>;
    list(): Promise<Array<Product>>;
    product(seo: string): Promise<Product | null>;
    productUpdate(id: number, obj: any): Promise<Number | null>;
    productEnable(id: number): Promise<Number | null>;
    productDisable(id: number): Promise<Number | null>;
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
            return await Product.findOne({ where: {
                [Op.or]: [
                    { seo },
                    { id: seo }
                  ]
            } })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productUpdate(id: number, obj: any): Promise<Number | null> {
        try {
            return Product.update(
                obj,
                { where: { id } })
                .then((res) => {
                    return res[0]
                })
                .catch((error) => {
                    return 0
                })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productEnable(id: number): Promise<Number | null> {
        try {
            return Product.update(
                { confirm: true },
                { where: { id } })
                .then((res) => {
                    return res[0]
                })
                .catch((error) => {
                    return 0
                })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productDisable(id: number): Promise<Number | null> {
        try {
            return Product.update(
                { confirm: false },
                { where: { id } })
                .then((res) => {
                    return res[0]
                })
                .catch((error) => {
                    return 0
                })
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
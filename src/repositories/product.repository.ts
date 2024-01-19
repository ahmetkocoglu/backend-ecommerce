
import Product from "../models/product.model"

interface IProductRepository {
    list(): Promise<Array<Product>>;
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
    async list(): Promise<Array<Product>>{
        try {
            return await Product.findAll()
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
        ): Promise<Product | null>{
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
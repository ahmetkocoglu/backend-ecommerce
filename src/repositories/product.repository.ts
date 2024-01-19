
import Product from "../models/product.model"

interface IProductRepository {
    list(): Promise<Array<Product>>;
}

class ProductRepository implements IProductRepository {
    async list(): Promise<Array<Product>>{
        try {
            return await Product.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new ProductRepository()
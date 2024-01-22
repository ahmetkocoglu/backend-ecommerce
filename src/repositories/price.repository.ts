import Price from "../models/price.model"

interface IPriceRepository {
    list(): Promise<Array<Price>>;
    insert(
        productId: number,
        price: number,
        discountPrice: number,
        discountRate: number
    ): Promise<Price | null>;
}

class PriceRepository implements IPriceRepository {
    async list(): Promise<Array<Price>>{
        try {
            return await Price.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        productId: number,
        price: number,
        discountPrice: number,
        discountRate: number
    ): Promise<Price | null>{
        try {
            return await Price.create({productId, price, discountPrice, discountRate})
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new PriceRepository()
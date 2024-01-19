import Price from "../models/price.model"

interface IPriceRepository {
    list(): Promise<Array<Price>>;
}

class PriceRepository implements IPriceRepository {
    async list(): Promise<Array<Price>>{
        try {
            return await Price.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new PriceRepository()
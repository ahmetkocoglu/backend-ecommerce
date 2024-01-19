import Variation from "../models/variation.model"

interface IVariationRepository {
    list(): Promise<Array<Variation>>;
}

class VariationRepository implements IVariationRepository {
    async list(): Promise<Array<Variation>>{
        try {
            return await Variation.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new VariationRepository()
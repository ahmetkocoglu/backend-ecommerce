import Rating from "../models/rating.model"

interface IRatingRepository {
    list(): Promise<Array<Rating>>;
}

class RatingRepository implements IRatingRepository {
    async list(): Promise<Array<Rating>>{
        try {
            return await Rating.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new RatingRepository()
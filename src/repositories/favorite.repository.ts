import Favorite from "../models/favorite.model"

interface IFavoriteRepository {
    list(): Promise<Array<Favorite>>;
}

class FavoriteRepository implements IFavoriteRepository {
    async list(): Promise<Array<Favorite>>{
        try {
            return await Favorite.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new FavoriteRepository()
import Category from "../models/category.model"

interface ICategoryRepository {
    list(): Promise<Array<Category>>;
}

class CategoryRepository implements ICategoryRepository {
    async list(): Promise<Array<Category>>{
        try {
            return await Category.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CategoryRepository()
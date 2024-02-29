import Category from "../models/category.model"
import ProductCategory from "../models/product_category"

interface ICategoryRepository {
    list(): Promise<Array<Category>>
    categoryProducts(slug: string): Promise<Array<Category>>
    insert(title: string, description: string): Promise<Category | null>
}

class CategoryRepository implements ICategoryRepository {
    async list(): Promise<Array<Category>> {
        try {
            return await Category.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async categoryProducts(slug: string): Promise<Array<Category>> {
        try {
            return await Category.findAll({ 
                where: { seo: slug },
                include: {
                    model: ProductCategory
                }
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }

    async insert(title: string, description: string): Promise<Category | null> {
        try {
            return await Category.create({ title, description })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CategoryRepository()
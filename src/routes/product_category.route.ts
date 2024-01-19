import { Router } from "express"
import ProductCategoryController from "../controllers/product_category.controller"

class ProductCategoryRoutes {
    router = Router()
    controller = new ProductCategoryController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getCategoryProducts)
        this.router.get('/', this.controller.getProductCategories)
    }
}

export default new ProductCategoryRoutes().router

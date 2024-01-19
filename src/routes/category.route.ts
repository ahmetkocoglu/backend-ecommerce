import { Router } from "express"
import CategoryController from "../controllers/category.controller"

class CategoryRoutes {
    router = Router()
    controller = new CategoryController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getCategories)
    }
}

export default new CategoryRoutes().router

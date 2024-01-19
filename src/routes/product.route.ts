import { Router } from "express"
import ProductController from "../controllers/product.controller"

class ProductRoutes {
    router = Router()
    controller = new ProductController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getProducts)
        this.router.post('/', this.controller.setProduct)
    }
}

export default new ProductRoutes().router

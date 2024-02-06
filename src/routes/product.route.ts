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
        this.router.get('/:seo', this.controller.getProduct)
        this.router.get('/confirm/enable/:id', this.controller.setProductEnable)
        this.router.get('/confirm/disable/:id', this.controller.setProductDisable)
        this.router.get('/delete/:id', this.controller.setProductDelete)
        this.router.get('/search/:search', this.controller.search)
        this.router.post('/', this.controller.setProduct)
    }
}

export default new ProductRoutes().router

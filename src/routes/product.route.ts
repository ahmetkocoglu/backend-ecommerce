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
        this.router.get('/confirm/enable/:id', this.controller.setProductEnable)
        this.router.get('/confirm/disable/:id', this.controller.setProductDisable)
        this.router.get('/delete/:id', this.controller.setProductDelete)
        //this.router.get('/search', this.controller.search) soru işareti diğer satura konunca bu satırla aynı oluyor
        this.router.get('/search/:search?', this.controller.search)
        this.router.get('/:seo', this.controller.getProduct)
        this.router.post('/', this.controller.setProduct)
        this.router.put('/', this.controller.updateProduct)
    }
}

export default new ProductRoutes().router

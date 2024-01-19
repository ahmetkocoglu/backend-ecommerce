import { Router } from "express"
import PriceController from "../controllers/price.controller"

class PriceRoutes {
    router = Router()
    controller = new PriceController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getPrices)
    }
}

export default new PriceRoutes().router

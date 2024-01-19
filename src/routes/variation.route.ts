import { Router } from "express"
import VariationController from "../controllers/variation.controller"

class VariationRoutes {
    router = Router()
    controller = new VariationController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getVariations)
    }
}

export default new VariationRoutes().router

import { Router } from "express"
import MovementController from "../controllers/movement.controller"

class MovementRoutes {
    router = Router()
    controller = new MovementController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getMovements)
    }
}

export default new MovementRoutes().router

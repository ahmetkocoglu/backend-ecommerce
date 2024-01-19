import { Router } from "express"
import RatingController from "../controllers/rating.controller"

class RatingRoutes {
    router = Router()
    controller = new RatingController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getRatings)
    }
}

export default new RatingRoutes().router

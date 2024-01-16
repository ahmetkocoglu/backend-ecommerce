import { Router } from "express"
import ImagesController from "../controllers/images.controller"

class ImagesRouters{
    router = Router()
    controller = new ImagesController()

    constructor() {
        this.initializeRouters()
    }

    initializeRouters() {
        this.router.get('/images', this.controller.getImages)
    }
}

export default new ImagesRouters().router

import { Router } from "express"
import CommentController from "../controllers/comment.controller"

class CommentRoutes {
    router = Router()
    controller = new CommentController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getComments)
    }
}

export default new CommentRoutes().router

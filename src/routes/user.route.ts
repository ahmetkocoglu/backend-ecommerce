import { Router } from "express"
import UserController from "../controllers/user.controller"

class UserRoutes {
    router = Router()
    controller = new UserController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getUsers)
    }
}

export default new UserRoutes().router

import { Router } from "express"
import PaymentController from "../controllers/payment.controller"

class PaymentRoutes {
    router = Router()
    controller = new PaymentController

    constructor() {
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.post('/', this.controller.pay)
    }
}

export default new PaymentRoutes().router
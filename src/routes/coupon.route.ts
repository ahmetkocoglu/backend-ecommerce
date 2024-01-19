import { Router } from "express"
import CouponController from "../controllers/coupon.controller"

class CouponRoutes {
    router = Router()
    controller = new CouponController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getCoupons)
    }
}

export default new CouponRoutes().router

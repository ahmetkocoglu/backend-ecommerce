import { Router } from "express"
import AddressController from "../controllers/address.controller"

class AddressRoutes {
    router = Router()
    controller = new AddressController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/cities', this.controller.getCities)
        this.router.get('/city/:city', this.controller.getDistrict)
        this.router.get('/districts/:city/:district', this.controller.getTown)
    }
}

export default new AddressRoutes().router

import { Application } from "express"
import authRouter from "./auth.route"
import addressRoutes from "./address.route"
import fileRouters from "./file.route"
import imagesRouters from "./images.route"

export default class Routes {
    constructor(app: Application){
        app.use('/api/v1/auth', authRouter)
        app.use('/api/v1/address', addressRoutes)
        app.use('/api/v1/file', fileRouters)
        app.use('/api/v1/img', imagesRouters)
    }
}

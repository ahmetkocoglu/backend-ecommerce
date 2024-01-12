import { Application } from "express"
import authRouter from "./auth.route"

export default class Routes {
    constructor(app: Application){
        app.use('/api/v1/auth', authRouter)
    }
}
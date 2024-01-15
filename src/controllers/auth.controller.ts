import { Request, Response } from "express";
import UserRepository from "../repositories/user.repository"
import User from "../models/user.model"

export default class AuthController {
    async login(req: Request, res: Response){
        const {email, password} = req.body
        console.log(req.body);
        
        if (!email && !password){
            res.status(400).send({message:"Email and Password can not be empty"})
            return;
        }

        try {
            const loginUser = await UserRepository.login(email, password)
            if (!loginUser) {
                return res.status(401).send({message:"invalid email and/or password"})
            }
        } catch (error) {
            return res.status(401).send({message:"invalid email and/or password"})
        }
        res.status(200).send({ message: "Login successful"})
    }
    async register(req: Request, res: Response){
        const {email, password} = req.body
        if (!email && !password){
            res.status(400).send({message:"Email and Password can not be empty"})
            return;
        }

        try {
            const savedUser = await UserRepository.register(email, password)

            res.status(200).send({message: "Register successful", user: savedUser})
        } catch (error) {
            res.status(500).send({message: "Some error"})
        }
    }
}
import { Request, Response } from "express";

export default class ImagesController {
    async getImages(req: Request, res: Response){
        res.status(200).send({ message: "Images retrieved"});
    }
}
import { Request, Response } from "express";

export default class FileController {
    async upload(req: Request, res: Response) {
        console.log(req);

        res.status(200).send({ message: "Uploaded successfully" });
    }
}
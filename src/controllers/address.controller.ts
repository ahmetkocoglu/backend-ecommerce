import { Request, Response } from "express";

export default class AddressController {
    async getCities(req: Request, res: Response) {
        const id = undefined

        const fs = require('fs')
        const file = await fs.promises.readFile('./public/address.json', 'utf8', (err: any, data: any) => {
            if (err) return false
            return true
        });

        const fileJson = JSON.parse(file)

        const cities: any[] = [];

        fileJson.map((k: any) => {
            k.sub.map((l: any) => {
                cities.push(l.name)
            })
        })

        res.status(200).send({ message: "Success", cities })
    }
    async getDistrict(req: Request, res: Response) {
        const city = (req.params.city)

        const fs = require('fs')
        const file = await fs.promises.readFile('./public/address.json', 'utf8', (err: any, data: any) => {
            if (err) return false
            return true
        });

        const fileJson = JSON.parse(file)

        const district: any[] = [];

        fileJson.map((k: any) => {
            k.sub.map((l: any) => {
                if (city === l.name) {
                    l.sub.map((t: any) => {
                        district.push(t.name)
                    })
                }
            })
        })

        res.status(200).send({ message: "Success", district })
    }
    async getTown(req: Request, res: Response) {
        const city = (req.params.city)
        const district = (req.params.district)

        const fs = require('fs')
        const file = await fs.promises.readFile('./public/address.json', 'utf8', (err: any, data: any) => {
            if (err) return false
            return true
        });

        const fileJson = JSON.parse(file)

        let towns: any[] = [];

        fileJson.map((k: any) => {
            k.sub.map((l: any) => {
                if (city === l.name) {
                    l.sub.map((t: any) => {
                        if (district === t.name) {
                            towns = t.sub
                        }
                    })
                }
            })
        })

        res.status(200).send({ message: "Success", district, towns, fileJson })
    }
}
import Coupon from "../models/coupon.model"

interface ICouponRepository {
    list(): Promise<Array<Coupon>>;
    insert(
        userId: number,
        code: string,
        title: string,
        description: string,
        type: string,
        price: number
    ): Promise<Coupon | null>;
}

class CouponRepository implements ICouponRepository {
    async list(): Promise<Array<Coupon>>{
        try {
            return await Coupon.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        userId: number,
        code: string,
        title: string,
        description: string,
        type: string,
        price: number
    ): Promise<Coupon | null>{
        try {
            return await Coupon.create({
                userId,
                code,
                title,
                description,
                type,
                price
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CouponRepository()
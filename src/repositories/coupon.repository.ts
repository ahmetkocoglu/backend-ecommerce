import Coupon from "../models/coupon.model"

interface ICouponRepository {
    list(): Promise<Array<Coupon>>;
}

class CouponRepository implements ICouponRepository {
    async list(): Promise<Array<Coupon>>{
        try {
            return await Coupon.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CouponRepository()
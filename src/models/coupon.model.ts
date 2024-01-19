import { Table, Column, ForeignKey, DataType} from "sequelize-typescript"
import BaseModel from "./base.model";
import Product from "./product.model";

@Table({ tableName: "coupons" })
export default class Coupon extends BaseModel {
    @ForeignKey(() => Product)
    @Column({field: "user_id"})
    userId!: number;

    @Column({ type: DataType.STRING(150), field: "code"})
    code!: string

    @Column({ type: DataType.STRING(150), field: "title"})
    title!: string

    @Column({ type: DataType.STRING(255), field: "description"})
    description!: string

    @Column({ type: DataType.STRING(20), field: "type"}) // 500 liralık ürün alırsa kullanabilir
    type!: string

    @Column({ type: DataType.DECIMAL(7, 2), field: "price" }) //12345,67
    price!: number
}
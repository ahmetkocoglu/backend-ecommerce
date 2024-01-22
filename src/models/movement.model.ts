import { Table, Column, ForeignKey, DataType} from "sequelize-typescript"
import BaseModel from "./base.model";
import Product from "./product.model";
import Users from "./user.model";

@Table({ tableName: "movements" })
export default class Movement extends BaseModel {
    @ForeignKey(() => Product)
    @Column({field: "product_id"})
    productId!: number;

    @ForeignKey(() => Users)
    @Column({field: "user_id"})
    userId!: number;

    @ForeignKey(() => Movement)
    @Column({field: "movement_id"})
    movementId!: number;

    @Column({ type: DataType.DECIMAL(7, 2), field: "price" }) // 100
    price!: number
    
    @Column({ type: DataType.BOOLEAN, field: "type" }) // giriş, çıkış, header
    type!: boolean

    @Column({ type: DataType.STRING(10), field: "process_type" }) // fatura, sepet, ödeme, kargo, iade, çöp
    processType!: string

    @Column({ type: DataType.DECIMAL(7, 2), field: "quantity" }) // 1
    quantity!: number

    @Column({ type: DataType.DECIMAL(7, 2), field: "tax" }) // 20
    tax!: number

    @Column({ type: DataType.DECIMAL(7, 2), field: "total" }) // 120
    total!: number

    @Column({ type: DataType.STRING(100), field: "description"})
    description!: string
}
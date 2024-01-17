import { Table, Column, DataType, ForeignKey } from "sequelize-typescript"
import Product from "./product.model"
import BaseModel from "./base.model";

@Table({ tableName: "prices" })
export default class Price extends BaseModel {
    @Column({ type: DataType.DECIMAL(7, 2), field: "price" }) //12345,67
    price!: number

    @ForeignKey(() => Product)
    @Column({field: "product_id"})
    productId!: number;
}
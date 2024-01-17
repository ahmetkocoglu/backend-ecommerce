import { Table, Column, DataType, ForeignKey } from "sequelize-typescript"
import Product from "./product.model"
import BaseModel from "./base.model";

@Table({ tableName: "variations" })
export default class Variation extends BaseModel {
    @Column({ type: DataType.STRING(100), field: "title" }) //12345,67
    title!: string

    @ForeignKey(() => Product)
    @Column({field: "product_id"})
    productId!: number;
}
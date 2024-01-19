import { Table, Column, DataType, ForeignKey } from "sequelize-typescript"
import Product from "./product.model"
import BaseModel from "./base.model";

@Table({ tableName: "variations" })
export default class Variation extends BaseModel {
    @Column({ type: DataType.STRING(100), field: "title" })
    title!: string

    @Column({ type: DataType.STRING(100), field: "seo" })
    seo!: string

    @Column({ type: DataType.STRING(255), field: "description"})
    description!: string

    @ForeignKey(() => Product)
    @Column({field: "product_id"})
    productId!: number;
}